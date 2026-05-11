# 🔐 Sistema de Autenticação - Setup Guide

## ✅ O que foi criado

### 1. **Páginas de Autenticação**
- ✨ **Login Page** (`/app/login/page.tsx`) - UI profissional com gradiente
- ✨ **Signup Page** (`/app/signup/page.tsx`) - UI consistente para registro
- Ambas com validação, tratamento de erros e estados de carregamento

### 2. **Middleware de Proteção** 
- 🔒 **middleware.ts** - Redireciona automaticamente:
  - Usuários não autenticados → `/login`
  - Usuários autenticados em `/login` ou `/signup` → `/home`

### 3. **Sistema de Auth Global**
- 🌐 **AuthProvider** (`/lib/auth-context.tsx`) - Context API para gerenciar estado
- `useAuth()` - Hook para acessar usuário e funções de logout

### 4. **Navbar Atualizada**
- Mostra email do usuário quando autenticado
- Botão de logout com ícone
- Links inteligentes (mostram diferentes opções baseado em auth state)

---

## 🚀 Setup - Passo a Passo

### 1. Configurar Supabase
```bash
# 1. Acesse https://app.supabase.com
# 2. Crie um novo projeto
# 3. Vá em: Settings → API
# 4. Copie:
#    - Project URL
#    - Anon Public Key
```

### 2. Criar arquivo `.env.local`
```bash
# Copie o arquivo .env.example para .env.local
cp .env.example .env.local

# Edite .env.local e adicione suas credenciais:
NEXT_PUBLIC_SUPABASE_URL=https://seu-projeto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua-chave-anon-aqui
```

### 3. Instalar dependências (já feito ✅)
```bash
npm install @supabase/ssr
```

### 4. Configurar Banco de Dados (opcional)
- Se quiser salvar dados adicionais dos usuários, create uma tabela `profiles`
- Exemplo SQL:
```sql
create table if not exists public.profiles (
  id uuid references auth.users on delete cascade primary key,
  full_name text,
  avatar_url text,
  created_at timestamp with time zone default now()
);
```

---

## 📱 Fluxo de Autenticação

```
Usuário acessa domínio
         ↓
[Middleware verifica se autenticado]
         ↓
    NÃO                          SIM
     ↓                            ↓
[REDIRECT /login]         [PERMITIR acesso]
     ↓                           ↓
[Login/Signup]            [Home Page]
     ↓                      (com Navbar)
   [SUCCESS]
     ↓
[REDIRECT /]
```

---

## 🎨 Features da UI

### Login & Signup
- ✨ Gradiente animado de fundo
- 🎯 Validação de formulário em tempo real
- 👁️ Toggle show/hide password
- ⏳ Estados de carregamento com spinner
- ❌ Exibição de erros clara
- ✅ Feedback de sucesso
- 🔗 Links para trocar entre login/signup

### Navbar
- 📧 Mostra email do usuário autenticado
- 🚪 Botão de logout
- 🎨 Design responsivo
- 🔵 Gradiente na logo

---

## 🛠️ Como Usar

### Componentes & Hooks

#### Usar o Hook `useAuth`
```tsx
"use client";
import { useAuth } from "@/lib/auth-context";

export default function MeuComponente() {
  const { user, loading, signOut } = useAuth();

  if (loading) return <div>Carregando...</div>;

  if (!user) return <div>Não autenticado</div>;

  return (
    <div>
      <p>Bem-vindo {user.email}</p>
      <button onClick={signOut}>Logout</button>
    </div>
  );
}
```

#### Redirecionar após login
- Já está configurado! Após login bem-sucedido, redireciona para `/` automaticamente

#### Adicionar mais rotas protegidas
- Edite `middleware.ts` e adicione à array `protectedRoutes`:
```ts
const protectedRoutes = ["/", "/perfil", "/meus-aulas"];
```

---

## 🐛 Troubleshooting

### "Environment variables not found"
- ✅ Verifique se `.env.local` existe
- ✅ Reinicie o servidor: `npm run dev`

### "Middleware not working"
- ✅ Verifique se `middleware.ts` está na raiz do projeto
- ✅ Verifique o padrão de match em `config.matcher`

### "Auth state not updating"
- ✅ Certifique-se que `<AuthProvider>` envolve o `{children}` em `layout.tsx`

### "Supabase connection error"
- ✅ Verifique as credenciais em `.env.local`
- ✅ Verifique se o projeto Supabase está ativo

---

## 📚 Próximas Etapas

1. ✅ Testar fluxo completo de login/signup
2. ✅ Configurar email de confirmação (Supabase Auth)
3. ✅ Adicionar "Esqueci a senha"
4. ✅ Atualizar perfil do usuário
5. ✅ Adicionar mais rotas protegidas

---

## 📞 Documentação

- [Supabase Auth Docs](https://supabase.com/docs/guides/auth)
- [Next.js Middleware](https://nextjs.org/docs/app/building-your-application/routing/middleware)
- [React Context API](https://react.dev/reference/react/useContext)
