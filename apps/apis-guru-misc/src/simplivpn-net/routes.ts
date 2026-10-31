import { createRoute, z } from '@hono/zod-openapi'

const DisableUserSchema = z
  .strictObject({ username: z.string().min(1) })
  .openapi({ required: ['username'] })
  .openapi('DisableUser')

const EnableUserSchema = z
  .strictObject({ username: z.string().min(1) })
  .openapi({ required: ['username'] })
  .openapi('EnableUser')

const RegisterSchema = z
  .strictObject({
    await: z.boolean().exactOptional(),
    password: z.string().min(1),
    username: z.string().min(1),
  })
  .openapi({ required: ['password', 'username'] })
  .openapi('Register')

const UserLoginSchema = z
  .strictObject({ password: z.string().min(1), username: z.string().min(1) })
  .openapi({ required: ['password', 'username'] })
  .openapi('UserLogin')

const BearerSecurityScheme = {
  description: 'JWT Authorization header using the bearer scheme',
  in: 'header',
  name: 'Authorization',
  type: 'apiKey',
}

export const postDisableUserRoute = createRoute({
  method: 'post',
  path: '/disable-user',
  tags: ['SimpliVPNAPI'],
  summary: 'DisableUser',
  description: "This route allows you to disable a user's vpn access.",
  operationId: 'DisableUser',
  request: {
    body: { content: { 'application/json': { schema: DisableUserSchema } }, required: true },
  },
  responses: { 200: { description: 'Success' } },
})

export const postEnableUserRoute = createRoute({
  method: 'post',
  path: '/enable-user',
  tags: ['SimpliVPNAPI'],
  summary: 'EnableUser',
  description:
    "This route allows you to enable a user's vpn access. This route can only be called using your user's Bearer Auth token.",
  operationId: 'EnableUser',
  request: {
    body: { content: { 'application/json': { schema: EnableUserSchema } }, required: true },
  },
  responses: { 200: { description: 'Success' } },
})

export const postLoginRoute = createRoute({
  method: 'post',
  path: '/login',
  tags: ['SimpliVPNAPI'],
  summary: 'Login',
  description:
    'This route allows you to login a user. The response will give you a Bearer auth token to use with all rquests pertaining to the user. This token expires in 7 days, so for every request you should check if you get an unauthorized responsve and re-validate the login if needed.',
  operationId: 'Login',
  request: {
    body: { content: { 'application/json': { schema: UserLoginSchema } }, required: true },
  },
  responses: { 200: { description: 'Success' } },
})

export const postRegisterRoute = createRoute({
  method: 'post',
  path: '/register',
  tags: ['SimpliVPNAPI'],
  summary: 'Register',
  description:
    "This route allows VPN Admin user's with an api key to register a vpn user account. This route can only be called using your api key supplied to you from SimpliVPN. Before calling this you should use your api key to call the /UsernameAvailable route to make sure the username you want is available first. All subsequent user requests following can be done using the user's api token, their token's expire every 7 days, so you should occasionally check them and if you get unauthorized, refresh their token by calling /login route. This route will also auto-enable a new user.",
  operationId: 'Register',
  request: {
    body: { content: { 'application/json': { schema: RegisterSchema } }, required: true },
  },
  responses: { 200: { description: 'Success' } },
})

export const getServerSummariesRoute = createRoute({
  method: 'get',
  path: '/server-summaries',
  tags: ['SimpliVPNAPI'],
  operationId: 'GetServerSummaries',
  responses: { 200: { description: 'Success' } },
})

export const getServersRoute = createRoute({
  method: 'get',
  path: '/servers',
  tags: ['SimpliVPNAPI'],
  operationId: 'GetServers',
  responses: { 200: { description: 'Success' } },
})

export const postUsernameAvailableRoute = createRoute({
  method: 'post',
  path: '/username-available',
  tags: ['SimpliVPNAPI'],
  summary: 'UsernameAvailable',
  description:
    "This route allows VPN Admin user's to check if a specific username is available before registering an account username. This route can only be called using your api key supplied to you from SimpliVPN.",
  operationId: 'UsernameAvailable',
  request: {
    body: { content: { 'application/json': { schema: EnableUserSchema } }, required: true },
  },
  responses: { 200: { description: 'Success' } },
})
