"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/auth-context";
import { LogOut, User } from "lucide-react";

export default function Navbar() {
  const router = useRouter();
  const { user, signOut } = useAuth();

  async function handleLogout() {
    await signOut();
    router.push("/login");
  }

  return (
    <nav className="border-b bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <Link
          href="/"
          className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-80 transition-opacity"
        >
          TutorFinder
        </Link>

        <div className="flex gap-3 items-center">
          {user ? (
            <>
              <div className="flex items-center gap-2 px-3 py-2 bg-blue-50 rounded-lg">
                <User className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">
                  {user.email}
                </span>
              </div>
              <Button
                onClick={handleLogout}
                variant="ghost"
                className="gap-2 hover:bg-red-50 hover:text-red-600"
              >
                <LogOut className="w-4 h-4" />
                Đăng Xuất
              </Button>
            </>
          ) : (
            <>
              <Link href="/login">
                <Button variant="ghost">
                  Đăng Nhập
                </Button>
              </Link>

              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                Trở Thành Gia Sư
              </Button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}