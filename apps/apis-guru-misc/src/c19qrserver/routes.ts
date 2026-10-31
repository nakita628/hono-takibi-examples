import { createRoute, z } from '@hono/zod-openapi'

const CreateUserResponseSchema = z
  .object({
    email: z
      .string()
      .exactOptional()
      .openapi({ description: "The user's email address", example: 'user@example.com' }),
    guid: z
      .string()
      .exactOptional()
      .openapi({
        description: "The user's password reset code",
        example: 'd5e53b3a-ffc1-4436-b085-04aaed5ec861',
      }),
  })
  .openapi({
    description: "The object that's returned when a user record is created.",
    title: "The object that's returned when a user record is created.",
    required: [],
  })
  .openapi('CreateUserResponse')

const InvalidTokenSchema = z
  .object({ message: z.string().exactOptional().openapi({ example: 'Login Failed' }) })
  .openapi({ description: 'Invalid token', title: 'Invalid Token', required: [] })
  .openapi('InvalidToken')

const KeyFailureSchema = z
  .object({ message: z.string().exactOptional().openapi({ example: 'Key Failures' }) })
  .openapi({ description: 'Key Failure', title: 'Key Failure', required: [] })
  .openapi('KeyFailure')

const LoginResponseSchema = z
  .object({
    admin: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'True if this user is an admin. False otherwise', example: false }),
    login_id: z
      .int()
      .exactOptional()
      .openapi({ description: 'The login id for this user', example: 1 }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: "This user's name", example: 'Firstname Lastname' }),
    read_only: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'True if this user has permissions to write to the database. False otherwise',
        example: false,
      }),
    token: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The API key that will be used to authenticate the user.',
        example: 'dc19b0b2-c0e3-821b-821a-d49e8c428479',
      }),
  })
  .openapi({ description: 'Payload of successful login', title: 'Login Response', required: [] })
  .openapi('LoginResponse')

const RequestPasswordResetResponseSchema = z
  .object({
    email: z
      .string()
      .exactOptional()
      .openapi({ description: "The user's email address", example: 'user@example.com' }),
    guid: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The password reset code',
        example: 'd5e53b3a-ffc1-4436-b085-04aaed5ec861',
      }),
  })
  .openapi({
    description: 'This object contains the password reset code for the user',
    title: 'Request Password Reset Response',
    required: [],
  })
  .openapi('RequestPasswordResetResponse')

const SigninSchema = z
  .object({
    dt: z
      .number()
      .exactOptional()
      .openapi({
        description: 'The original scan time in number of seconds since 1/1/1970 (GMT)',
        example: 1593409124.23,
      }),
    email: z
      .string()
      .exactOptional()
      .openapi({ description: "The person's email", example: 'jqp@example.com' }),
    id: z.int().exactOptional().openapi({ description: 'The record id', example: 125 }),
    name: z.string().openapi({ description: "The person's name", example: 'John Q. Public' }),
    phone: z
      .string()
      .openapi({ description: "The person's phone number", example: '(111)222-3333' }),
  })
  .openapi({
    description: 'Payload of signin object',
    required: ['name', 'phone'],
    title: 'Signin Object',
  })
  .openapi('Signin')

const SigninResponseSchema = z
  .object({ result: z.int().min(1).max(1).exactOptional().openapi({ example: 1 }) })
  .openapi({
    description: 'Response when you successfully create a signin record',
    title: 'Signin Response',
    required: [],
  })
  .openapi('SigninResponse')

const UserRecordSchema = z
  .object({
    admin: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If the user has admin privileges then the user will be able to create password reset requests on behalf of other users, and will also be able to view and edit  the data of other users.\n',
        example: true,
      }),
    email: z
      .string()
      .exactOptional()
      .openapi({ description: "The user's email address", example: 'user@example.com' }),
    id: z.int().exactOptional().openapi({ description: "The id of the user's record", example: 1 }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: "The user's name", example: 'John Doe' }),
    read_only: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Not used in this version of the API. For future use.',
        example: false,
      }),
  })
  .openapi({
    description: 'A team member user record',
    title: 'A team member user record',
    required: [],
  })
  .openapi('UserRecord')

const KeyFailureResponse = {
  description: 'Key Failure',
  content: { 'application/json': { schema: KeyFailureSchema } },
}

const SigninResponseResponse = {
  description: "The response that's sent when you successfully create a signin",
  content: { 'application/json': { schema: SigninResponseSchema } },
}

const UnauthorizedResponse = {
  description: 'Unauthorized',
  content: { 'application/json': { schema: InvalidTokenSchema } },
}

const SigninIdParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int(),
  )
  .exactOptional()
  .openapi({
    param: {
      description: 'Signin ID',
      in: 'query',
      name: 'id',
      schema: { type: 'integer' },
      required: false,
    },
  })

const ChangePasswordPayloadRequestBody = {
  description: 'Change Password Payload',
  content: {
    'application/json': {
      schema: z
        .object({
          old_password: z
            .string()
            .exactOptional()
            .openapi({ description: 'The old (current) password', example: 'hunter3' }),
          password: z
            .string()
            .exactOptional()
            .openapi({ description: 'The new password', example: 'hunter4' }),
        })
        .openapi({ title: 'Sample', required: [] }),
    },
  },
  required: true,
}

const CreateUserPayloadRequestBody = {
  description: 'Create User Payload',
  content: {
    'application/json': {
      schema: z
        .object({
          admin: z
            .boolean()
            .exactOptional()
            .openapi({
              description:
                'If the user has admin privileges then the user will be able to create password reset requests on behalf of other users, and will also be able to view and edit  the data of other users.\n',
              example: true,
            }),
          email: z
            .string()
            .exactOptional()
            .openapi({
              description: 'The email address of the user record you want to create',
              example: 'user@example.com',
            }),
          name: z
            .string()
            .exactOptional()
            .openapi({
              description: 'The name of the user record you want to create',
              example: 'Jane Doe',
            }),
          read_only: z
            .boolean()
            .exactOptional()
            .openapi({
              description: 'Not used in this version of the API. For future use.',
              example: false,
            }),
        })
        .openapi({ title: 'Sample', required: [] }),
    },
  },
  required: true,
}

const LoginPayloadRequestBody = {
  description: 'The login payload',
  content: {
    'application/json': {
      schema: z
        .object({
          email: z.string().exactOptional().openapi({ example: 'aijaz@example.org' }),
          password: z.string().exactOptional().openapi({ example: 'hunter2' }),
          source: z.enum(['iOS', 'android', 'web']).exactOptional(),
        })
        .openapi({ title: 'Sample', required: [] }),
    },
  },
  required: true,
}

const PasswordResetPayloadRequestBody = {
  description: 'Password Reset Payload',
  content: {
    'application/json': {
      schema: z
        .object({
          guid: z
            .string()
            .exactOptional()
            .openapi({
              description: 'The password reset code',
              example: 'd5e53b3a-ffc1-4436-b085-04aaed5ec861',
            }),
          password: z
            .string()
            .exactOptional()
            .openapi({ description: 'The new password', example: 'hunter3' }),
        })
        .openapi({ title: 'Sample', required: [] }),
    },
  },
  required: true,
}

const RequestPasswordResetPayloadRequestBody = {
  description: 'Request Password Reset Payload',
  content: {
    'application/json': {
      schema: z
        .object({
          email: z
            .string()
            .exactOptional()
            .openapi({
              description: 'The user whose password you want to reset',
              example: 'user@example.com',
            }),
        })
        .openapi({ title: 'Sample', required: [] }),
    },
  },
  required: true,
}

const SigninPayloadRequestBody = { content: { 'application/json': { schema: SigninSchema } } }

const TokenHeaderSecurityScheme = {
  description: 'Token to authorize requests.',
  in: 'header',
  name: 'token',
  type: 'apiKey',
}

export const postChangePasswordRoute = createRoute({
  method: 'post',
  path: '/changePassword',
  tags: ['Passwords'],
  summary: 'Used for changing your password',
  description: 'Pass in your old password and your new password',
  request: { body: ChangePasswordPayloadRequestBody },
  responses: { 200: { description: 'Success' }, 401: UnauthorizedResponse },
})

export const postLoginRoute = createRoute({
  method: 'post',
  path: '/login',
  tags: ['Authentication'],
  summary: 'Log in to get an API token',
  description: 'Submit your email and password to get an API token',
  request: { body: LoginPayloadRequestBody },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: LoginResponseSchema } },
    },
    401: UnauthorizedResponse,
  },
  security: [],
})

export const postLogoutRoute = createRoute({
  method: 'post',
  path: '/logout',
  tags: ['Authentication'],
  summary: 'Log out',
  description: 'Log out by deleting your token off the server.',
  responses: { 200: { description: 'Success' } },
})

export const postRequestPasswordResetRoute = createRoute({
  method: 'post',
  path: '/requestPasswordReset',
  tags: ['Passwords'],
  summary: 'Used for requesting a password reset code',
  description:
    "The admin should run this on behalf of a user who forgot their password.  The API will generate a password reset code which the admin should then provide to the user. The user can use their client to reset their password. Normally the password reset code is mailed to the user, but I didn't want to do this in this case because I didn't want to  introduce the complicated dependency of having an SMTP server just for this purpose. Doing it this way makes it easy for people to adopt this  API.\n",
  request: { body: RequestPasswordResetPayloadRequestBody },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RequestPasswordResetResponseSchema } },
    },
    401: UnauthorizedResponse,
  },
})

export const postSigninRoute = createRoute({
  method: 'post',
  path: '/signin',
  tags: ['Attendees signins'],
  description: 'Create a new signin record',
  request: { body: SigninPayloadRequestBody },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SigninResponseSchema } },
    },
    401: UnauthorizedResponse,
    503: KeyFailureResponse,
  },
})

export const getSigninSigninIdRoute = createRoute({
  method: 'get',
  path: '/signin/{signinId}',
  tags: ['Attendees signins'],
  summary: 'Retrieve the information associated with a signin record',
  description: 'Retrieve the information associated with a signin record\n',
  request: {
    params: z.object({
      signinId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the signin record to be retrieved.',
            in: 'path',
            name: 'signinId',
            required: true,
            schema: { example: 1, type: 'integer' },
          },
          example: 1,
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: SigninSchema } } },
    401: UnauthorizedResponse,
  },
})

export const putSigninSigninIdRoute = createRoute({
  method: 'put',
  path: '/signin/{signinId}',
  tags: ['Attendees signins'],
  summary: 'Update a signin record',
  description: 'Update a signin record\n',
  request: {
    params: z.object({
      signinId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the signin record to be retrieved.',
            in: 'path',
            name: 'signinId',
            required: true,
            schema: { example: 1, type: 'integer' },
          },
          example: 1,
        }),
    }),
    body: SigninPayloadRequestBody,
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: UserRecordSchema } } },
    401: UnauthorizedResponse,
  },
})

export const deleteSigninSigninIdRoute = createRoute({
  method: 'delete',
  path: '/signin/{signinId}',
  tags: ['Attendees signins'],
  summary: 'Delete a signin record',
  description: 'Delete a signin record      \n',
  request: {
    params: z.object({
      signinId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the signin record to be deleted.',
            in: 'path',
            name: 'signinId',
            required: true,
            schema: { example: 1, type: 'integer' },
          },
          example: 1,
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 401: UnauthorizedResponse },
})

export const getSigninsRoute = createRoute({
  method: 'get',
  path: '/signins',
  tags: ['Attendees signins'],
  summary: 'Get signin info',
  description: 'Returns a list of signin objects sorted by signin ID descending.',
  request: {
    query: z.object({
      less_than: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Return signins with IDs less than this value.',
            in: 'query',
            name: 'less_than',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      return_count: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'Return this many objects',
            in: 'query',
            name: 'return_count',
            required: false,
            schema: { default: 100, maximum: 100, minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: z.array(SigninSchema) } },
    },
    401: UnauthorizedResponse,
    503: KeyFailureResponse,
  },
})

export const postUserRoute = createRoute({
  method: 'post',
  path: '/user',
  tags: ['Team Members'],
  summary: 'Create a user',
  description: 'Use this endpoint to create a team member (user) record',
  request: { body: CreateUserPayloadRequestBody },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateUserResponseSchema } },
    },
    401: UnauthorizedResponse,
  },
})

export const getUserUserIdRoute = createRoute({
  method: 'get',
  path: '/user/{userId}',
  tags: ['Team Members'],
  summary: "Retrieve the information associated with a team member's user record",
  description: "Retrieve the information associated with a user's account\n",
  request: {
    params: z.object({
      userId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the user record to be retrieved.',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { example: 1, type: 'integer' },
          },
          example: 1,
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: UserRecordSchema } } },
    401: UnauthorizedResponse,
  },
})

export const deleteUserUserIdRoute = createRoute({
  method: 'delete',
  path: '/user/{userId}',
  tags: ['Team Members'],
  summary: "Delete a team member's user record",
  description:
    'To preserve referential integrity in the database, the user account  will not be deleted from the database. Rather, the password will be set to the empty string, effectively preventing that user from logging in. Furthermore, all active sessions for that user will be deleted, as will any password reset tokens. \n',
  request: {
    params: z.object({
      userId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The ID of the user record to be deleted.',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { example: 1, type: 'integer' },
          },
          example: 1,
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, 401: UnauthorizedResponse },
})

export const getUsersRoute = createRoute({
  method: 'get',
  path: '/users',
  tags: ['Team Members'],
  summary: "Retrieve the information associated with all team members' user records",
  description: "Retrieve the information associated with all team members' user records\n",
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(UserRecordSchema) } },
    },
    401: UnauthorizedResponse,
  },
})

export const postVerifyPasswordChangeRoute = createRoute({
  method: 'post',
  path: '/verifyPasswordChange',
  tags: ['Passwords'],
  summary: 'Used for resetting your password when you forgot it',
  description:
    'Another endpoint will generate a password reset code for you. You should  use the client app to submit the reset code along with the new password to change your password.\n',
  request: { body: PasswordResetPayloadRequestBody },
  responses: { 200: { description: 'Success' }, 401: UnauthorizedResponse },
})
