# AI Agents Documentation

This document describes how AI agents can interact with and contribute to the cfblog project.

## Project Overview

**cfblog** is a monorepo project built with pnpm workspaces and Turbo, consisting of:

- **admin** - Vue 3 admin dashboard (frontend)
- **api** - Hono-based REST API (backend)

## Tech Stack

| App | Framework | Language | Key Dependencies |
|-----|------------|----------|------------------|
| admin | Vue 3 + Vite | TypeScript | pinia, vue-router, vitest |
| api | Hono | TypeScript | @hono/node-server |

## Project Commands

```sh
# Root-level commands (run from project root)
pnpm dev           # Start all apps in development mode
pnpm build         # Build all apps
pnpm lint          # Lint all apps
pnpm check-types  # Type check all apps
pnpm fmt           # Format code with oxfmt
```

### App-specific Commands

**admin:**
```sh
cd apps/admin
pnpm dev           # Start dev server
pnpm build         # Build for production
pnpm test:unit     # Run unit tests
pnpm type-check   # TypeScript check
```

**api:**
```sh
cd apps/api
pnpm dev           # Start dev server (tsx watch)
pnpm build         # Compile TypeScript
```

## Development Guidelines

### Code Style

- Use **oxfmt** for code formatting
- Use **oxlint** for linting
- TypeScript strict mode is enabled

### Testing

- admin uses **vitest** for unit tests
- Test files are located in `src/__tests__/` or alongside components with `.spec.ts` suffix

### TypeScript Configuration

- Base TypeScript config in `packages/typescript-config/`
- Each app has its own `tsconfig.json`

## AI Agent Assistance

AI agents can help with:

1. **Feature Development**
   - Adding new Vue components in `apps/admin/src/components/`
   - Creating API routes in `apps/api/src/`
   - Implementing state management with Pinia stores

2. **Code Quality**
   - Running lint and type checks
   - Fixing type errors
   - Improving test coverage

3. **Refactoring**
   - Modernizing Vue 3 composition API usage
   - Optimizing Hono route handlers
   - Extracting shared utilities

4. **Documentation**
   - Adding JSDoc comments
   - Maintaining README files
   - API documentation

## Architecture Notes

### Monorepo Structure

```
cfblog/
├── apps/           # Applications
│   ├── admin/      # Vue 3 frontend
│   └── api/        # Hono backend
├── packages/      # Shared packages
│   └── typescript-config/
└── turbo.json     # Turbo build configuration
```

### State Management

- admin uses **Pinia** for state management
- Stores located in `apps/admin/src/stores/`

### Routing

- admin uses **Vue Router**
- Routes defined in `apps/admin/src/router/`

## Common Tasks

### Adding a New Feature

1. Create component in appropriate location
2. Add route if needed
3. Add store slice if state needed
4. Write tests
5. Run type-check and lint

### Running Tests

```sh
cd apps/admin
pnpm test:unit
```

### Building for Production

```sh
pnpm build
```

## Best Practices

1. **Always run type-check** before committing
2. **Use TypeScript** for all new code
3. **Write tests** for new components
4. **Follow existing patterns** in each app
5. **Keep dependencies updated** but test first