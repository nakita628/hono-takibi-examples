import { createRoute, z } from '@hono/zod-openapi'

export const getApiV1UsersRoute = createRoute({
  method: 'get',
  path: '/api/v1/users',
  summary: 'Find User',
  description: 'Find User',
  operationId: 'findUser',
  request: {
    query: z.object({
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'q',
            schema: { example: 'user', type: 'string' },
            required: false,
          },
          example: 'user',
        }),
    }),
    body: { content: {} },
  },
  responses: { 200: { description: '' } },
})

export const postApiV1UsersRoute = createRoute({
  method: 'post',
  path: '/api/v1/users',
  tags: ['Create User'],
  summary: 'Create User in Group',
  description: 'Create User in Group',
  operationId: 'createUserInGroup',
  request: {
    query: z.object({
      activate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'activate',
            schema: { example: 'false', type: 'string' },
            required: false,
          },
          example: 'false',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              groupIds: z.array(z.string().openapi({ example: '{{groupId}}' })).exactOptional(),
              profile: z
                .object({
                  email: z.string().exactOptional().openapi({ example: 'isaac@{{email-suffix}}' }),
                  firstName: z.string().exactOptional().openapi({ example: 'Isaac' }),
                  lastName: z.string().exactOptional().openapi({ example: 'Brock' }),
                  login: z.string().exactOptional().openapi({ example: 'isaac@{{email-suffix}}' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          example: {
            groupIds: ['{{groupId}}'],
            profile: {
              email: 'isaac@{{email-suffix}}',
              firstName: 'Isaac',
              lastName: 'Brock',
              login: 'isaac@{{email-suffix}}',
            },
          },
        },
      },
    },
  },
  responses: { 200: { description: '' } },
})

export const getApiV1UsersMeRoute = createRoute({
  method: 'get',
  path: '/api/v1/users/me',
  summary: 'Get Current User',
  description: 'Get Current User',
  operationId: 'getCurrentUser',
  request: { body: { content: {} } },
  responses: { 200: { description: '' } },
})

export const getApiV1UsersUserIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/users/{userId}',
  summary: 'Get User',
  description: 'Get User',
  operationId: 'getUser',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'userId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: {} },
  },
  responses: { 200: { description: '' } },
})

export const putApiV1UsersUserIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/users/{userId}',
  tags: ['Credential Operations'],
  summary: 'Set Recovery Credential',
  description: 'Set Recovery Credential',
  operationId: 'setRecoveryCredential',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'userId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              credentials: z
                .object({
                  recovery_question: z
                    .object({
                      answer: z.string().exactOptional().openapi({ example: 'Annie Oakley' }),
                      question: z
                        .string()
                        .exactOptional()
                        .openapi({ example: "Who's a major player in the cowboy scene?" }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          example: {
            credentials: {
              recovery_question: {
                answer: 'Annie Oakley',
                question: "Who's a major player in the cowboy scene?",
              },
            },
          },
        },
      },
    },
  },
  responses: { 200: { description: '' } },
})

export const getApiV1UsersUserIdAppLinksRoute = createRoute({
  method: 'get',
  path: '/api/v1/users/{userId}/appLinks',
  summary: 'Get Assigned App Links',
  description: 'Get Assigned App Links',
  operationId: 'getAssignedAppLinks',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'userId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: {} },
  },
  responses: { 200: { description: '' } },
})

export const postApiV1UsersUserIdCredentialsChangePasswordRoute = createRoute({
  method: 'post',
  path: '/api/v1/users/{userId}/credentials/change_password',
  tags: ['Credential Operations'],
  summary: 'Change Password',
  description: 'Change Password',
  operationId: 'changePassword',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'userId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              newPassword: z
                .object({ value: z.string().exactOptional().openapi({ example: 'uTVM,TPw55' }) })
                .exactOptional()
                .openapi({ required: [] }),
              oldPassword: z
                .object({ value: z.string().exactOptional().openapi({ example: '{{password}}' }) })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          example: { newPassword: { value: 'uTVM,TPw55' }, oldPassword: { value: '{{password}}' } },
        },
      },
    },
  },
  responses: { 200: { description: '' } },
})

export const postApiV1UsersUserIdCredentialsChangeRecoveryQuestionRoute = createRoute({
  method: 'post',
  path: '/api/v1/users/{userId}/credentials/change_recovery_question',
  tags: ['Credential Operations'],
  summary: 'Change Recovery Question',
  description: 'Change Recovery Question',
  operationId: 'changeRecoveryQuestion',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'userId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              password: z
                .object({ value: z.string().exactOptional().openapi({ example: '{{password}}' }) })
                .exactOptional()
                .openapi({ required: [] }),
              recovery_question: z
                .object({
                  answer: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'My recovery credentials are updated' }),
                  question: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'What happens when I update my question' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          example: {
            password: { value: '{{password}}' },
            recovery_question: {
              answer: 'My recovery credentials are updated',
              question: 'What happens when I update my question',
            },
          },
        },
      },
    },
  },
  responses: { 200: { description: '' } },
})

export const postApiV1UsersUserIdCredentialsForgotPasswordRoute = createRoute({
  method: 'post',
  path: '/api/v1/users/{userId}/credentials/forgot_password',
  tags: ['Credential Operations'],
  summary: 'Forgot Password (One Time Code)',
  description: 'Forgot Password (One Time Code)',
  operationId: 'forgotPassword(oneTimeCode)',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'userId', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      sendEmail: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'sendEmail',
            schema: { example: 'false', type: 'string' },
            required: false,
          },
          example: 'false',
        }),
    }),
    body: { content: {} },
  },
  responses: { 200: { description: '' } },
})

export const getApiV1UsersUserIdGroupsRoute = createRoute({
  method: 'get',
  path: '/api/v1/users/{userId}/groups',
  summary: 'Get Groups for User',
  description: 'Get Groups for User',
  operationId: 'getGroupsForUser',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'userId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: {} },
  },
  responses: { 200: { description: '' } },
})

export const postApiV1UsersUserIdLifecycleActivateRoute = createRoute({
  method: 'post',
  path: '/api/v1/users/{userId}/lifecycle/activate',
  tags: ['Lifecycle Operations'],
  summary: 'Activate User',
  description: 'Activate User',
  operationId: 'activateUser',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'userId', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      sendEmail: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'sendEmail',
            schema: { example: 'false', type: 'string' },
            required: false,
          },
          example: 'false',
        }),
    }),
    body: { content: {} },
  },
  responses: { 200: { description: '' } },
})

export const postApiV1UsersUserIdLifecycleDeactivateRoute = createRoute({
  method: 'post',
  path: '/api/v1/users/{userId}/lifecycle/deactivate',
  tags: ['Lifecycle Operations'],
  summary: 'Deactivate User',
  description: 'Deactivate User',
  operationId: 'deactivateUser',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'userId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: {} },
  },
  responses: { 200: { description: '' } },
})

export const postApiV1UsersUserIdLifecycleExpirePasswordRoute = createRoute({
  method: 'post',
  path: '/api/v1/users/{userId}/lifecycle/expire_password',
  tags: ['Lifecycle Operations'],
  summary: 'Set Temp Password',
  description: 'Set Temp Password',
  operationId: 'setTempPassword',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'userId', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      tempPassword: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'tempPassword',
            schema: { example: 'true', type: 'string' },
            required: false,
          },
          example: 'true',
        }),
    }),
    body: { content: {} },
  },
  responses: { 200: { description: '' } },
})

export const postApiV1UsersUserIdLifecycleResetFactorsRoute = createRoute({
  method: 'post',
  path: '/api/v1/users/{userId}/lifecycle/reset_factors',
  summary: 'Reset Factors',
  description: 'Reset Factors',
  operationId: 'resetFactors',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'userId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: {} },
  },
  responses: { 200: { description: '' } },
})

export const postApiV1UsersUserIdLifecycleResetPasswordRoute = createRoute({
  method: 'post',
  path: '/api/v1/users/{userId}/lifecycle/reset_password',
  tags: ['Lifecycle Operations'],
  summary: 'Reset Password',
  description: 'Reset Password',
  operationId: 'resetPassword',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'userId', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      sendEmail: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'sendEmail',
            schema: { example: 'false', type: 'string' },
            required: false,
          },
          example: 'false',
        }),
    }),
    body: { content: {} },
  },
  responses: { 200: { description: '' } },
})

export const postApiV1UsersUserIdLifecycleSuspendRoute = createRoute({
  method: 'post',
  path: '/api/v1/users/{userId}/lifecycle/suspend',
  tags: ['Lifecycle Operations'],
  summary: 'Suspend User',
  description: 'Suspend User',
  operationId: 'suspendUser',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'userId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: {} },
  },
  responses: { 200: { description: '' } },
})

export const postApiV1UsersUserIdLifecycleUnlockRoute = createRoute({
  method: 'post',
  path: '/api/v1/users/{userId}/lifecycle/unlock',
  tags: ['Lifecycle Operations'],
  summary: 'Unlock User',
  description: 'Unlock User',
  operationId: 'unlockUser',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'userId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: {} },
  },
  responses: { 200: { description: '' } },
})

export const postApiV1UsersUserIdLifecycleUnsuspendRoute = createRoute({
  method: 'post',
  path: '/api/v1/users/{userId}/lifecycle/unsuspend',
  tags: ['Lifecycle Operations'],
  summary: 'Unsuspend User',
  description: 'Unsuspend User',
  operationId: 'unsuspendUser',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'userId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: {} },
  },
  responses: { 200: { description: '' } },
})

export const deleteApiV1UsersUserIdSessionsRoute = createRoute({
  method: 'delete',
  path: '/api/v1/users/{userId}/sessions',
  summary: 'Clear User Sessions',
  description: 'Clear User Sessions',
  operationId: 'clearUserSessions',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'userId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: {} },
  },
  responses: { 200: { description: '' } },
})
