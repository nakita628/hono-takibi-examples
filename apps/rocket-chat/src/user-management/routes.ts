import { createRoute, z } from '@hono/zod-openapi'

const AuthorizationErrorResponse = {
  description: 'Unauthorized',
  content: {
    'application/json': {
      schema: z
        .object({ success: z.boolean().exactOptional(), error: z.string().exactOptional() })
        .openapi({ required: [] }),
      examples: {
        'Authorization Error': {
          value: { success: false, error: 'You must be logged in to do this.' },
        },
      },
    },
  },
}

const TrueSuccessResponse = {
  description: 'OK',
  content: {
    'application/json': {
      schema: z.object({ success: z.boolean().exactOptional() }).openapi({ required: [] }),
      examples: { Success: { value: { success: true } } },
    },
  },
}

const AuthTokenParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'X-Auth-Token',
      in: 'header',
      description: 'The authenticated user token.',
      required: true,
      schema: { type: 'string' },
      example: 'RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f',
    },
  })

const UserIdParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'X-User-Id',
      in: 'header',
      description: 'The authenticated user ID.',
      required: true,
      schema: { type: 'string' },
      example: 'rbAXPnMktTFbNpwtJ',
    },
  })

const X_2faCodeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'x-2fa-code',
      in: 'header',
      description:
        'Enter the 2FA code. This parameter is required if 2FA is enabled in your workspace. See the <a href="https://developer.rocket.chat/apidocs/introduction-to-two-factor-authentication" target="_blank">Introduction to Two-Factor Authentication</a> document for details.',
      schema: { type: 'string' },
      example: '148750',
      required: false,
    },
  })

const X_2faMethodParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'x-2fa-method',
      in: 'header',
      schema: { type: 'string' },
      description:
        'Enter the method with which you get the 2FA code. It can be `email`, `totp`, or `password`. This parameter is required if 2FA is enabled in your workspace.',
      required: false,
    },
  })

const OffsetParamsSchema = z
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
      name: 'offset',
      in: 'query',
      required: false,
      schema: { type: 'integer' },
      example: 50,
      description:
        'Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.',
    },
  })

const SortParamsSchema = z
  .any()
  .exactOptional()
  .openapi({
    param: {
      name: 'sort',
      in: 'query',
      required: false,
      schema: {},
      description:
        'List of fields to order by, and in which direction. JSON object, with properties listed in desired order, with values of 1 for ascending, or -1 for descending. For example, {"value": -1, "_id": 1}. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.',
    },
  })

const CountParamsSchema = z
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
      name: 'count',
      in: 'query',
      required: false,
      schema: { type: 'integer' },
      example: 50,
      description:
        'How many items to return. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.',
    },
  })

export const getApiV1PermissionsListAllRoute = createRoute({
  method: 'get',
  path: '/api/v1/permissions.listAll',
  tags: ['Permissions'],
  summary: 'List All Permissions',
  description:
    "Returns the list of <a href='https://docs.rocket.chat/docs/permissions' target='_blank'>permissions</a> from the workspace.\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|0.73.0            | Added       |",
  operationId: 'get-permissions.listAll',
  request: {
    query: z.object({
      updatedSince: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'updatedSince',
            in: 'query',
            description:
              'Date as ISO string. If you include this parameter, the `update` and\n`remove` fields in the response will contain only those permissions\nupdated and removed since this date and time.',
            schema: { type: 'string' },
            example: '2017-11-25T15:08:17.248Z',
            required: false,
          },
        }),
    }),
    headers: z.object({ 'X-User-Id': UserIdParamsSchema, 'X-Auth-Token': AuthTokenParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              update: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      _updatedAt: z.string().exactOptional(),
                      roles: z.array(z.string()).exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              remove: z.array(z.looseObject({})).exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                update: [
                  {
                    _id: 'access-permissions',
                    _updatedAt: '2018-11-28T11:55:49.106Z',
                    roles: ['admin'],
                  },
                  {
                    _id: 'add-oauth-service',
                    _updatedAt: '2018-11-28T12:59:51.974Z',
                    roles: ['admin', 'user'],
                  },
                ],
                remove: [],
                success: true,
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1PermissionsUpdateRoute = createRoute({
  method: 'post',
  path: '/api/v1/permissions.update',
  tags: ['Permissions'],
  summary: 'Update Permissions',
  description:
    "Update the <a href='https://docs.rocket.chat/docs/permissions' target='_blank'>permissions</a> on the workspace.\nPermission required: `access-permissions`\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|0.66.0            | Added       |",
  operationId: 'post-api-v1-permissions.update',
  request: {
    headers: z.object({ 'X-User-Id': UserIdParamsSchema, 'X-Auth-Token': AuthTokenParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              permissions: z
                .array(
                  z
                    .object({
                      _id: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Enter the permission ID.',
                          example: 'access-permissions',
                        }),
                      roles: z
                        .array(
                          z
                            .string()
                            .openapi({
                              description:
                                "For default Rocket.Chat roles, you can enter the role names such as `admin`, `user`, `owner`, etc. If you are updating the permissions for a custom role, enter the custom role ID instead of the role name. Use the <a href='https://developer.rocket.chat/apidocs/get-roles' target='_blank'>Get Roles</a> endpoint to get the list of roles with IDs in your workspace.",
                              example: 'admin',
                            }),
                        )
                        .exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .openapi({ description: 'The array of roles to overwrite.' }),
            })
            .openapi({ required: ['permissions'] }),
          examples: {
            'Example 1': {
              value: { permissions: [{ _id: 'access-permissions', roles: ['admin'] }] },
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              permissions: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      roles: z.array(z.string()).exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                permissions: [{ _id: 'access-permissions', roles: ['admin'] }],
                success: true,
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                success: false,
                error: 'Invalid body params',
                errorType: 'error-invalid-body-params',
              },
            },
            'Example 2': {
              value: {
                success: false,
                error: 'Editing permissions is not allowed',
                errorType: 'error-edit-permissions-not-allowed',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1PermissionsAddRoleRoute = createRoute({
  method: 'post',
  path: '/api/v1/permissions.addRole',
  tags: ['Permissions'],
  summary: 'Add Permission to a Role',
  description:
    "Grant a <a href='https://docs.rocket.chat/docs/permissions' target='_blank'>permission</a> to a role. \n\nPermission required: `access-permissions`. \n\nTo modify a setting-level permission, the `access-setting-permissions` permission is also required.\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|9.0.0            | The `403` response returns `errorType: error-forbidden`.       |\n|8.7.0            | Added       |",
  operationId: 'post-api-v1-permissions.addRole',
  request: {
    headers: z.object({ 'X-User-Id': UserIdParamsSchema, 'X-Auth-Token': AuthTokenParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              permissionId: z
                .string()
                .openapi({ description: 'The permission ID.', example: 'create-team-channel' }),
              role: z
                .string()
                .openapi({
                  description:
                    'The role to grant the permission to. For default Rocket.Chat roles, enter the role name, such as `admin` or `user`. For custom roles, enter the role ID.',
                  example: 'user',
                }),
            })
            .openapi({ required: ['permissionId', 'role'] }),
          examples: { Example: { value: { permissionId: 'create-team-channel', role: 'user' } } },
        },
      },
    },
  },
  responses: {
    200: TrueSuccessResponse,
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
              details: z
                .object({ method: z.string().exactOptional(), action: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            'Invalid Parameters': {
              value: {
                success: false,
                error: "must have required property 'role'",
                errorType: 'error-invalid-params',
              },
            },
            'Permission does not exist': {
              value: {
                success: false,
                error: 'Permission does not exist [error-invalid-permission]',
                errorType: 'error-invalid-permission',
                details: {
                  method: 'authorization:addPermissionToRole',
                  action: 'Adding_permission',
                },
              },
            },
            'Invalid Role': {
              value: {
                success: false,
                error: 'Role does not exist [error-invalid-role]',
                errorType: 'error-invalid-role',
                details: {
                  method: 'authorization:addPermissionToRole',
                  action: 'Adding_permission',
                },
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Permission Error': {
              value: {
                success: false,
                error: 'User does not have the permissions required for this action',
                errorType: 'error-forbidden',
              },
            },
          },
        },
      },
    },
  },
})

export const postApiV1PermissionsRemoveRoleRoute = createRoute({
  method: 'post',
  path: '/api/v1/permissions.removeRole',
  tags: ['Permissions'],
  summary: 'Remove Role from Permission',
  description:
    "Revoke a <a href='https://docs.rocket.chat/docs/permissions' target='_blank'>permission</a> from a role. \n\nPermission required: `access-permissions`. \n\nTo modify a setting-level permission, the `access-setting-permissions` permission is also required.\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|9.0.0            | The `403` response returns `errorType: error-forbidden`.       |\n|8.7.0            | Added       |",
  operationId: 'post-api-v1-permissions.removeRole',
  request: {
    headers: z.object({ 'X-User-Id': UserIdParamsSchema, 'X-Auth-Token': AuthTokenParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              permissionId: z
                .string()
                .openapi({ description: 'The permission ID.', example: 'create-team-channel' }),
              role: z
                .string()
                .openapi({
                  description:
                    'The role to revoke the permission from. For default Rocket.Chat roles, enter the role name, such as `admin` or `user`. For custom roles, enter the role ID.',
                  example: 'user',
                }),
            })
            .openapi({ required: ['permissionId', 'role'] }),
          examples: { Example: { value: { permissionId: 'create-team-channel', role: 'user' } } },
        },
      },
    },
  },
  responses: {
    200: TrueSuccessResponse,
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
              details: z
                .object({ method: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            'Invalid Parameters': {
              value: {
                success: false,
                error: "must have required property 'role'",
                errorType: 'error-invalid-params',
              },
            },
            'Permission not found': {
              value: {
                success: false,
                error: 'Permission not found [error-permission-not-found]',
                errorType: 'error-permission-not-found',
                details: { method: 'authorization:removeRoleFromPermission' },
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Permission Error': {
              value: {
                success: false,
                error: 'User does not have the permissions required for this action',
                errorType: 'error-forbidden',
              },
            },
          },
        },
      },
    },
  },
})

export const postApiV1RolesCreateRoute = createRoute({
  method: 'post',
  path: '/api/v1/roles.create',
  tags: ['Roles'],
  summary: 'Create Role',
  description:
    "<div style=\"text-align: center; margin: 1rem 0 1rem 0;\"><img src=\"https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/premium.svg\" alt=\"Premium tag\" style=\"display: block; margin: auto;\"></div>\n\nCreate a new <a href='https://docs.rocket.chat/docs/roles-in-rocketchat' target='_blank'>role</a> in the workspace. See <a href='https://docs.rocket.chat/v1/docs/custom-roles' target='_blank'>Custom Roles</a> for further information.\n\n* You can't create new roles with the same name as existing roles. For example, it is not possible to create a new role with the name `admin`.\n* The scope can either be `Users`(user level) or `Subscriptions`(room level).\n* Permission required: `access-permissions`\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|6.0.0            | Moved to Enterprise plan.       |\n|3.15.0            | The endpoint is no longer used to update roles.       |\n|0.70.0            | Added       |",
  operationId: 'post-api-v1-roles.create',
  request: {
    headers: z.object({ 'X-User-Id': UserIdParamsSchema, 'X-Auth-Token': AuthTokenParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z
                .string()
                .openapi({ description: "Enter the new role's name.", example: 'newRole' }),
              scope: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "The new role's scope. The scope can either be Users (user level) or Subscriptions (room level). The default value is `Users`.",
                  example: 'Subscriptions',
                }),
              description: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Enter a description for the new role.',
                  example: 'Role description',
                }),
              mandatory2fa: z
                .boolean()
                .default(false)
                .exactOptional()
                .openapi({
                  description:
                    'Whether the role should have a mandatory 2FA. The default value is `false`. If set to true, users assigned to this role are prompted to enter a 2FA code for certain activities.',
                }),
            })
            .openapi({ required: ['name'] }),
          examples: {
            Example: {
              value: {
                name: 'Test Role',
                scope: 'Users',
                description: 'Testing Role for API',
                mandatory2fa: false,
              },
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              role: z
                .object({
                  _id: z.string().exactOptional(),
                  name: z.string().exactOptional(),
                  scope: z.string().exactOptional(),
                  description: z.string().exactOptional(),
                  protected: z.boolean().exactOptional(),
                  mandatory2fa: z.boolean().exactOptional(),
                  _updatedAt: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                role: {
                  _id: '646c431fa8c3a3ba32d0e1c4',
                  name: 'support1',
                  scope: 'Subscriptions',
                  description: 'Role support tier 1',
                  protected: false,
                  mandatory2fa: false,
                  _updatedAt: '2023-05-23T04:37:51.161Z',
                },
                success: true,
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Missing Parameter': {
              value: {
                success: false,
                errorType: 'error-invalid-params',
                error: "must have required property 'name'",
              },
            },
            'Role Already Exists': {
              value: {
                success: false,
                error: 'Role name already exists [error-duplicate-role-names-not-allowed]',
                errorType: 'error-duplicate-role-names-not-allowed',
              },
            },
            'Access Permission not Allowed': {
              value: {
                success: false,
                error: 'Accessing permissions is not allowed [error-action-not-allowed]',
                errorType: 'error-action-not-allowed',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1RolesUpdateRoute = createRoute({
  method: 'post',
  path: '/api/v1/roles.update',
  tags: ['Roles'],
  summary: 'Update Role',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/premium.svg" alt="Premium tag" style="display: block; margin: auto;"></div>\n\nUpdate a role in the workspace.\n\nPermission required: `access-permissions`\n        \n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|6.0.0            | Moved to Enterprise plan.       |',
  operationId: 'post-api-v1-roles.update',
  request: {
    headers: z.object({ 'X-User-Id': UserIdParamsSchema, 'X-Auth-Token': AuthTokenParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              roleId: z
                .string()
                .openapi({
                  example: '646c431fa8c3a3ba32d0e1c4',
                  description: 'The role ID that you want to update.',
                }),
              name: z
                .string()
                .openapi({ example: 'newRole', description: 'The updated name of the role.' }),
              scope: z
                .string()
                .exactOptional()
                .openapi({
                  example: 'Subscriptions',
                  description:
                    'The updated  scope of the role. The scope can either be Users (user level) or Subscriptions (room level). The default value is `Users`.',
                }),
              description: z
                .string()
                .exactOptional()
                .openapi({
                  example: 'Role description',
                  description: 'Updated description for the role.',
                }),
              mandatory2fa: z
                .boolean()
                .default(false)
                .exactOptional()
                .openapi({
                  description:
                    'Whether the role should have a mandatory 2FA. The default value is `false`. If set to true, users assigned to this role are prompted to enter a 2FA code for certain activities.',
                }),
            })
            .openapi({ required: ['roleId', 'name'] }),
          examples: {
            Example: {
              value: {
                roleId: '646c431fa8c3a3ba32d0e1c4',
                name: 'Test Role',
                scope: 'Users',
                description: 'Testing Role for API',
                mandatory2fa: false,
              },
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              role: z
                .object({
                  _id: z.string().exactOptional(),
                  name: z.string().exactOptional(),
                  scope: z.string().exactOptional(),
                  description: z.string().exactOptional(),
                  protected: z.boolean().exactOptional(),
                  mandatory2fa: z.boolean().exactOptional(),
                  _updatedAt: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                role: {
                  _id: '646c431fa8c3a3ba32d0e1c4',
                  name: 'update role',
                  scope: 'Users',
                  description: 'Update Role support tier 1',
                  protected: false,
                  mandatory2fa: false,
                  _updatedAt: '2023-05-23T05:33:33.730Z',
                },
                success: true,
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Missing Parameter': {
              value: {
                success: false,
                errorType: 'error-invalid-params',
                error: "must have required property 'name'",
              },
            },
            'Access Permission not Allowed': {
              value: {
                success: false,
                error: 'Accessing permissions is not allowed [error-action-not-allowed]',
                errorType: 'error-action-not-allowed',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1RolesAddUserToRoleRoute = createRoute({
  method: 'post',
  path: '/api/v1/roles.addUserToRole',
  tags: ['Roles'],
  summary: 'Assign Role to User',
  description:
    'Assign a role to a user. Optionally, you can set this role to a user for a specific room.\n\n**Permissions required**:\n- `access-permissions`: Required to modify permissions for various roles\n- `assign-admin-role`: Permission to assign the admin role to other users\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|0.70.0            | Added       |',
  operationId: 'post-api-v1-roles.addUserToRole',
  request: {
    headers: z.object({ 'X-User-Id': UserIdParamsSchema, 'X-Auth-Token': AuthTokenParamsSchema }),
    body: {
      description:
        'By default, the three major room roles are available in Rocket.Chat are **Owner**, **Leader**, and **Moderator**. \n[Creating custom roles](https://docs.rocket.chat/use-rocket.chat/user-management/custom-roles) is exclusively available on the Enterprise plan. \nRefer to [Roles](https://docs.rocket.chat/setup-and-configure/roles-in-rocket.chat) for more information.',
      content: {
        'application/json': {
          schema: z
            .object({
              roleId: z
                .string()
                .exactOptional()
                .openapi({
                  example: '6579adcf2dd9f9d9514f6',
                  description: 'The ID of an existing role.',
                }),
              username: z.string().openapi({ description: 'The user name.', example: 'test.fun' }),
              roomId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The ID of the room where the user should be assigned a role, if it is a room role.',
                  example: '4adb09baa5ad42',
                }),
            })
            .openapi({ required: ['roleName', 'username'] }),
          examples: {
            Example: {
              value: {
                roleId: '6579adcf2dd9f9d9514f6',
                username: 'test.fun',
                roomId: '64adb09baa5ad4273bfc',
              },
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              role: z
                .object({
                  _id: z.string().exactOptional(),
                  scope: z.string().exactOptional(),
                  description: z.string().exactOptional(),
                  mandatory2fa: z.boolean().exactOptional(),
                  name: z.string().exactOptional(),
                  protected: z.boolean().exactOptional(),
                  _updatedAt: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                role: {
                  _id: 'auditor-log',
                  scope: 'Users',
                  description: '',
                  mandatory2fa: false,
                  name: 'auditor-log',
                  protected: true,
                  _updatedAt: '2023-07-10T23:20:56.702Z',
                },
                success: true,
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                success: false,
                error: "must have required property 'username' [error-invalid-role-properties]",
                errorType: 'error-invalid-role-properties',
              },
            },
            'Example 2': {
              value: {
                success: false,
                error:
                  'The required "userId" or "username" param provided does not match any users [error-invalid-user]',
                errorType: 'error-invalid-user',
              },
            },
            'Example 3': { value: { success: false, error: 'error-invalid-role-properties' } },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const getApiV1RolesGetUsersInRoleRoute = createRoute({
  method: 'get',
  path: '/api/v1/roles.getUsersInRole',
  tags: ['Roles'],
  summary: 'Get Users of a Role',
  description:
    'Gets the users that belong to a specific role.\n**Permissions required**: \n- `access-permissions`: Required to modify permissions for various roles\n- `view-other-user-channels`: Permission to view channels owned by other users. Required if the request includes a `roomId`\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|1.3.0            | Added       |',
  operationId: 'get-api-v1-roles.getUsersInRole',
  request: {
    query: z.object({
      role: z
        .string()
        .openapi({
          param: {
            name: 'role',
            in: 'query',
            description: 'The ID of the role',
            required: true,
            schema: { type: 'string', example: '653ec9873c7460e18e6f' },
          },
          example: '653ec9873c7460e18e6f',
        }),
      roomId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'roomId',
            in: 'query',
            description: 'The room ID.',
            schema: { type: 'string' },
            example: 'hfiec783ifjl',
            required: false,
          },
        }),
      offset: OffsetParamsSchema,
      count: CountParamsSchema,
    }),
    headers: z.object({ 'X-User-Id': UserIdParamsSchema, 'X-Auth-Token': AuthTokenParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              users: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      username: z.string().exactOptional(),
                      type: z.string().exactOptional(),
                      status: z.string().exactOptional(),
                      active: z.boolean().exactOptional(),
                      name: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                users: [
                  {
                    _id: 'voakrL3cHjYBwwRPq',
                    username: 'a',
                    type: 'user',
                    status: 'offline',
                    active: true,
                    name: 'a',
                  },
                  {
                    _id: 'N2s7KG6YkzgJfXbyn',
                    username: 'b',
                    type: 'user',
                    status: 'offline',
                    active: true,
                    name: 'b',
                  },
                ],
                success: true,
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                success: false,
                error: 'Query param "role" is required [error-param-not-provided]',
                errorType: 'error-param-not-provided',
              },
            },
            'Example 2': {
              value: {
                success: false,
                error: '[error-invalid-roleId]',
                errorType: 'error-invalid-roleId',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const getApiV1RolesListRoute = createRoute({
  method: 'get',
  path: '/api/v1/roles.list',
  tags: ['Roles'],
  summary: 'Get Roles',
  description:
    'Gets all the roles in the workspace.\n### Changelog\n| Version      | Description | \n| ---------------- | ------------|\n|0.73.0            | Added `mandatory2fa` property       |\n|0.70.0            | Added       |',
  operationId: 'get-api-v1-roles.list',
  request: {
    headers: z.object({ 'X-User-Id': UserIdParamsSchema, 'X-Auth-Token': AuthTokenParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              roles: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      description: z.string().exactOptional(),
                      mandatory2fa: z.boolean().exactOptional(),
                      protected: z.boolean().exactOptional(),
                      scope: z.string().exactOptional(),
                      name: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                roles: [
                  {
                    _id: 'admin',
                    description: 'Admin',
                    mandatory2fa: false,
                    protected: true,
                    scope: 'Users',
                  },
                  {
                    _id: 'moderator',
                    description: 'Moderator',
                    mandatory2fa: false,
                    protected: true,
                    scope: 'Subscriptions',
                  },
                  {
                    _id: 'leader',
                    description: 'Leader',
                    mandatory2fa: false,
                    protected: true,
                    scope: 'Subscriptions',
                  },
                  {
                    _id: 'owner',
                    description: 'Owner',
                    mandatory2fa: false,
                    protected: true,
                    scope: 'Subscriptions',
                  },
                  {
                    _id: 'user',
                    description: '',
                    mandatory2fa: false,
                    protected: true,
                    scope: 'Users',
                  },
                  {
                    _id: 'bot',
                    description: '',
                    mandatory2fa: false,
                    protected: true,
                    scope: 'Users',
                  },
                  {
                    _id: 'guest',
                    description: '',
                    mandatory2fa: false,
                    protected: true,
                    scope: 'Users',
                  },
                  { _id: 'livechat-agent', name: 'livechat-agent', scope: 'Users' },
                  { _id: 'livechat-manager', name: 'livechat-manager', scope: 'Users' },
                  { _id: 'livechat-guest', name: 'livechat-guest', scope: 'Users' },
                ],
                success: true,
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const getApiV1RolesSyncRoute = createRoute({
  method: 'get',
  path: '/api/v1/roles.sync',
  tags: ['Roles'],
  summary: 'Get Updated Roles',
  description:
    'Gets the roles in the workspace that were created, updated, or deleted after a given date. \n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|3.1.0            | Added       |',
  operationId: 'get-api-v1-roles.sync',
  request: {
    query: z.object({
      updatedSince: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'updatedSince',
            in: 'query',
            description:
              'Date as an ISO string. Roles updated at or after this date are returned in `update`, and roles deleted after this date are returned in `remove`.',
            required: false,
            schema: { type: 'string', format: 'date-time' },
            example: '2017-11-25T15:08:17.248Z',
          },
        }),
    }),
    headers: z.object({ 'X-User-Id': UserIdParamsSchema, 'X-Auth-Token': AuthTokenParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              roles: z
                .object({
                  update: z
                    .array(
                      z
                        .object({
                          _id: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'The role ID. For default roles, this is the same as the role name. For custom roles, this is a generated ID.',
                            }),
                          name: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'The role name.' }),
                          scope: z
                            .enum(['Users', 'Subscriptions'])
                            .exactOptional()
                            .openapi({
                              description:
                                'Whether the role applies to the whole workspace (`Users`) or to rooms (`Subscriptions`).',
                            }),
                          description: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'The role description. Can be an empty string.',
                            }),
                          mandatory2fa: z
                            .boolean()
                            .exactOptional()
                            .openapi({
                              description:
                                'Whether users with this role must use two-factor authentication. This field is optional and can be missing from older roles.',
                            }),
                          protected: z
                            .boolean()
                            .exactOptional()
                            .openapi({
                              description:
                                "Whether the role is a protected default role that can't be deleted.",
                            }),
                          _updatedAt: z.iso
                            .datetime({ offset: true })
                            .exactOptional()
                            .openapi({ description: 'The date the role was last updated.' }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional()
                    .openapi({
                      description: 'Roles created or updated at or after the `updatedSince` date.',
                    }),
                  remove: z
                    .array(
                      z
                        .object({
                          _id: z.string().exactOptional().openapi({ description: 'The role ID.' }),
                          name: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'The role name.' }),
                          scope: z.enum(['Users', 'Subscriptions']).exactOptional(),
                          description: z.string().exactOptional(),
                          mandatory2fa: z.boolean().exactOptional(),
                          protected: z.boolean().exactOptional(),
                          __collection__: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'The collection the role was deleted from. Always `roles`.',
                            }),
                          _deletedAt: z.iso
                            .datetime({ offset: true })
                            .exactOptional()
                            .openapi({ description: 'The date the role was deleted.' }),
                          _updatedAt: z.iso
                            .datetime({ offset: true })
                            .exactOptional()
                            .openapi({
                              description:
                                'The date the role was last updated before it was deleted.',
                            }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional()
                    .openapi({ description: 'Roles deleted after the `updatedSince` date.' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.literal(true).exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                roles: {
                  update: [
                    {
                      _id: 'admin',
                      scope: 'Users',
                      description: 'Admin',
                      mandatory2fa: false,
                      name: 'admin',
                      protected: true,
                      _updatedAt: '2026-11-07T02:22:08.393Z',
                    },
                    {
                      _id: 'moderator',
                      scope: 'Subscriptions',
                      description: 'Moderator',
                      mandatory2fa: false,
                      name: 'moderator',
                      protected: true,
                      _updatedAt: '2026-11-07T02:22:08.408Z',
                    },
                    {
                      _id: '680fc8d0825d98f164760591',
                      name: 'TOTP',
                      scope: 'Users',
                      description: 'TOTP',
                      protected: false,
                      mandatory2fa: true,
                      _updatedAt: '2025-04-28T18:31:33.121Z',
                    },
                  ],
                  remove: [
                    {
                      _id: 'anonymous',
                      __collection__: 'roles',
                      _deletedAt: '2026-10-27T19:31:44.643Z',
                      _updatedAt: '2026-10-03T03:00:56.098Z',
                      description: '',
                      mandatory2fa: false,
                      name: 'anonymous',
                      protected: true,
                      scope: 'Users',
                    },
                  ],
                },
                success: true,
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Invalid date': {
              value: {
                success: false,
                error: 'updatedSince must be a valid date string [error-invalid-param]',
                errorType: 'error-invalid-param',
              },
            },
            'Unknown query parameter': {
              value: {
                success: false,
                error: 'must NOT have additional properties',
                errorType: 'error-invalid-params',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1RolesDeleteRoute = createRoute({
  method: 'post',
  path: '/api/v1/roles.delete',
  tags: ['Roles'],
  summary: 'Delete Role',
  description:
    "Permission required: `access-permissions`\n- Roles that have the protected value as true can't be deleted (such as: `admin`, `moderator`, `user` and so on).\n- You cannot delete roles that are assigned to users. To do that, you must first remove this role from all the users.\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|3.17.0            | Added       |",
  operationId: 'post-api-v1-roles.delete',
  request: {
    headers: z.object({ 'X-User-Id': UserIdParamsSchema, 'X-Auth-Token': AuthTokenParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              roleId: z
                .string()
                .openapi({
                  example: '6579adcf2dd9f9d9514f6',
                  description: 'The ID of an existing role.',
                }),
            })
            .openapi({ required: ['roleId'] }),
        },
      },
    },
  },
  responses: {
    200: TrueSuccessResponse,
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                success: false,
                error: 'The role properties are invalid. [error-invalid-role-properties]',
                errorType: 'error-invalid-role-properties',
              },
            },
            'Example 2': {
              value: {
                success: false,
                error: 'Accessing permissions is not allowed [error-action-not-allowed]',
                errorType: 'error-action-not-allowed',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1RolesRemoveUserFromRoleRoute = createRoute({
  method: 'post',
  path: '/api/v1/roles.removeUserFromRole',
  tags: ['Roles'],
  summary: 'Remove Role from User',
  description: 'Remove a role from a user. Permission required: `access-permissions`',
  operationId: 'post-api-v1-roles.removeUserFromRole',
  request: {
    headers: z.object({ 'X-User-Id': UserIdParamsSchema, 'X-Auth-Token': AuthTokenParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              roleId: z
                .string()
                .openapi({
                  example: '6579adcf2dd9f9d9514f6',
                  description: 'The ID of an existing role.',
                }),
              username: z
                .string()
                .openapi({
                  description: 'The username for which you want to remove the role.',
                  example: 'user08',
                }),
              scope: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Optionally, you can also provide the role scope. The options are `Users` and `Subscriptions`.',
                }),
            })
            .openapi({ required: ['roleId', 'username'] }),
        },
      },
    },
  },
  responses: {
    200: TrueSuccessResponse,
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                success: false,
                error: 'The role properties are invalid. [error-invalid-role-properties]',
                errorType: 'error-invalid-role-properties',
              },
            },
            'Example 2': {
              value: {
                success: false,
                error: 'Accessing permissions is not allowed [error-action-not-allowed]',
                errorType: 'error-action-not-allowed',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const getApiV1RolesGetUsersInPublicRolesRoute = createRoute({
  method: 'get',
  path: '/api/v1/roles.getUsersInPublicRoles',
  tags: ['Roles'],
  summary: 'Get Users in Public Roles',
  description:
    'Use this endpoint to get the list of roles other than `user`, such as admin, livechat, and custom roles.\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|7.10.0            | Added       |',
  operationId: 'get-api-v1-roles.getUsersInPublicRoles',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              users: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      username: z.string().exactOptional(),
                      roles: z.array(z.string()).exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                users: [
                  { _id: 'kb2WBkjkut4YJpFQk', username: 'agent2', roles: ['livechat-agent'] },
                  {
                    _id: 'Ahgf5k9Ca4YEdMjwX',
                    username: 'test.agent',
                    roles: ['admin', 'livechat-agent'],
                  },
                ],
                success: true,
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1UsersCreateRoute = createRoute({
  method: 'post',
  path: '/api/v1/users.create',
  tags: ['Users'],
  summary: 'Create User',
  description:
    'Create a new user in your workspace. This endpoint is typically used by admins to create user accounts in the workspace.\n\nPermissions required:\n- `create-user`: Permission to create users\n- `edit-other-user-active-status`: Permission to enable or disable other accounts\n\n\n### Changelog\n| Version      | Description | \n| ---------------- | ------------|\n|9.0.0            | Renamed `freeSwitchExtension` to `sipExtension`. Added the `phones` field.       |\n|0.48.0            | `role` property is now `roles` which is an array of strings for the roles to create the user with.       |\n|0.45.0            | Users created via this now join the default channels.       |\n|0.40.0            | Added       |',
  operationId: 'post-api-v1-users.create',
  request: {
    headers: z.object({ 'X-User-Id': UserIdParamsSchema, 'X-Auth-Token': AuthTokenParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z
                .string()
                .openapi({ description: 'The display name of the user.', example: 'Test User' }),
              email: z
                .string()
                .openapi({
                  description: 'The email address for the user.',
                  example: 'email@user.tld1',
                }),
              password: z
                .string()
                .openapi({ description: 'The password for the user.', example: 'anypassyouwant' }),
              username: z
                .string()
                .openapi({ description: 'The username for the user.', example: 'uniqueusername1' }),
              active: z
                .boolean()
                .default(true)
                .exactOptional()
                .openapi({
                  description:
                    "Set the users' active status.  If the user is deactivated, they can not login. By default, the user is active.",
                  example: true,
                }),
              nickname: z
                .string()
                .exactOptional()
                .openapi({ description: 'The nickname for the user. ', example: 'testusername' }),
              bio: z
                .string()
                .exactOptional()
                .openapi({ description: 'The bio for the user.', example: 'All about the user' }),
              joinDefaultChannels: z
                .boolean()
                .default(true)
                .exactOptional()
                .openapi({
                  description:
                    'Select whether users should automatically join default channels once they are created. By default, it is set to `true`.',
                  example: true,
                }),
              statusText: z
                .string()
                .exactOptional()
                .openapi({ description: 'The status text of the user.', example: 'On a vacation' }),
              roles: z
                .array(z.string().openapi({ example: 'bot' }))
                .exactOptional()
                .openapi({
                  description:
                    'The roles to be assigned to this user. If it is not specified, the `user` role is assigned by default.\n**Note:**\n* For default roles, the role name and ID are the same. For custom roles, the name and ID are different. \n* If you are setting a custom role for a user, make sure to enter the custom role ID, and not the role name.\nRefer to [Roles](https://docs.rocket.chat/use-rocket.chat/workspace-administration/permissions#roles) for more information.',
                }),
              requirePasswordChange: z
                .boolean()
                .default(false)
                .exactOptional()
                .openapi({
                  description:
                    'Should the user be required to change their password when they login? It is set to `false` by default',
                  example: false,
                }),
              setRandomPassword: z
                .boolean()
                .default(false)
                .exactOptional()
                .openapi({
                  description:
                    'Should the user be assigned a random password once they are created? It is set to `false` by defualt.',
                  example: false,
                }),
              sendWelcomeEmail: z
                .boolean()
                .default(false)
                .exactOptional()
                .openapi({
                  description:
                    'Should the user get a welcome email? It is set to `true` by default.',
                  example: false,
                }),
              sipExtension: z
                .string()
                .exactOptional()
                .openapi({
                  description: "The user's SIP extension (formerly `freeSwitchExtension`).",
                }),
              phones: z
                .array(
                  z
                    .object({
                      number: z
                        .string()
                        .openapi({ description: 'The phone number. Spaces are removed.' }),
                      label: z
                        .string()
                        .max(50)
                        .exactOptional()
                        .openapi({ description: 'A label for the number, for example `Work`.' }),
                    })
                    .openapi({ required: ['number'] }),
                )
                .max(10)
                .exactOptional()
                .openapi({
                  description:
                    "The user's phone numbers. Up to 10 numbers, each with an optional label.",
                }),
              verified: z
                .boolean()
                .default(false)
                .exactOptional()
                .openapi({
                  description:
                    "Should the user's email address be verified when created? It is set to `false` by default.",
                  example: false,
                }),
              customFields: z
                .looseObject({})
                .exactOptional()
                .openapi({
                  example: { clearance: 'High', team: 'Queen' },
                  description:
                    'A valid JSON object of key-value pairs consisting of additional fields to be\nadded during user registration. By default, the value is `undefined`.\nTo save custom fields, you must first define them in the [workspace admin settings](https://docs.rocket.chat/use-rocket.chat/workspace-administration/settings/accounts/custom-fields).\nFor information on how to view the custom fields, see the [Get Users List](https://developer.rocket.chat/reference/api/rest-api/endpoints/user-management/users-endpoints/get-users-list) endpoint.',
                }),
            })
            .openapi({ required: ['name', 'email', 'password', 'username'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              user: z
                .object({
                  _id: z.string().exactOptional(),
                  createdAt: z.string().exactOptional(),
                  username: z.string().exactOptional(),
                  emails: z
                    .array(
                      z
                        .object({
                          address: z.string().exactOptional(),
                          verified: z.boolean().exactOptional(),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                  type: z.string().exactOptional(),
                  roles: z.array(z.string()).exactOptional(),
                  status: z.string().exactOptional(),
                  active: z.boolean().exactOptional(),
                  _updatedAt: z.string().exactOptional(),
                  bio: z.string().exactOptional(),
                  name: z.string().exactOptional(),
                  nickname: z.string().exactOptional(),
                  requirePasswordChange: z.boolean().exactOptional(),
                  settings: z.looseObject({}).exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                user: {
                  _id: 'BsNr28znDkG8aeo7W',
                  createdAt: '2016-09-13T14:57:56.037Z',
                  services: { password: { bcrypt: '$2a$i7BFS55uFYRf5TE4ErSUH8HymMNAbpMAvsOcl2C' } },
                  username: 'uniqueusername',
                  emails: [{ address: 'email@user.tld', verified: false }],
                  type: 'user',
                  status: 'offline',
                  active: true,
                  roles: ['user'],
                  _updatedAt: '2016-09-13T14:57:56.175Z',
                  name: 'name',
                  settings: {},
                },
                success: true,
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
              details: z
                .object({ method: z.string().exactOptional(), action: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            'Permission Error': {
              value: {
                success: false,
                error: 'Adding user is not allowed [error-action-not-allowed]',
                errorType: 'error-action-not-allowed',
                details: { method: 'insertOrUpdateUser', action: 'Adding_user' },
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1UsersRegisterRoute = createRoute({
  method: 'post',
  path: '/api/v1/users.register',
  tags: ['Users'],
  summary: 'Register User',
  description:
    "* An external member can use this endpoint to create an account on the workspace.\n* The number of requests you can make and the interval between each request depends on the workspace's rate limiter settings. You can find the settings from **Manage** > **Workspace** > **Settings** > **Rate Limiter** > **API Rate Limiter**.\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|0.50.0            | Added       |",
  operationId: 'post-api-v1-users.register',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              username: z
                .string()
                .openapi({ description: 'The username for the user.', example: 'rogersmith' }),
              email: z
                .string()
                .openapi({ description: 'The email for the user.', example: 'roger@example.com' }),
              pass: z
                .string()
                .openapi({ description: 'The password for the user.', example: 'passw0rd' }),
              name: z
                .string()
                .openapi({
                  description:
                    'The name of the user. \nThe value can be an empty string if `Require Name For Signup` is disabled in [account registration](https://docs.rocket.chat/use-rocket.chat/workspace-administration/settings/accounts#registration).',
                  example: 'Roger Smith',
                }),
              secretURL: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'You may have been provided with a secret URL. It includes a string appended to the registration URL. For example, `https://workspacedomain.com/register/my-secret-code`. For this parameter, enter the additional string at the end of the URL.',
                  example: 'Jjwjg6gouWLXhMGKW',
                }),
            })
            .openapi({ required: ['username', 'email', 'pass', 'name'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              user: z
                .object({
                  _id: z.string().exactOptional(),
                  type: z.string().exactOptional(),
                  status: z.string().exactOptional(),
                  active: z.boolean().exactOptional(),
                  name: z.string().exactOptional(),
                  utcOffset: z.int().exactOptional(),
                  username: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                user: {
                  _id: 'nSYqWzZ4GsKTX4dyK',
                  type: 'user',
                  status: 'offline',
                  active: true,
                  name: 'Example User',
                  utcOffset: 0,
                  username: 'example',
                },
                success: true,
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                success: false,
                error: "must have required property 'pass' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
          },
        },
      },
    },
  },
})

export const postApiV1UsersUpdateRoute = createRoute({
  method: 'post',
  path: '/api/v1/users.update',
  tags: ['Users'],
  summary: 'Update User Details',
  description:
    "Use this endpoint to update the details of an existing user. This endpoint requires 2FA.\n\n**Permissions required**:\n- `edit-other-user-password`: Permission to modify other user's passwords\n- `edit-other-user-info_description`: Permission to change other user's name, username or email address\n- `edit-other-user-active-status`: Permission to enable or disable other accounts\n\n### Changelog\n| Version      | Description | \n| ---------------- | ------------|\n|9.0.0            | Renamed `freeSwitchExtension` to `sipExtension`. Added the `phones` field.       |\n|7.0.0             | Removed upsert behaviour and stopped allowing `joinDefaultChannels` param|\n|0.48.0            | Renamed to `users.update`       |\n|0.35.0            | Added       |",
  operationId: 'post-api-v1-users.update',
  request: {
    headers: z.object({
      'X-User-Id': UserIdParamsSchema,
      'X-Auth-Token': AuthTokenParamsSchema,
      'x-2fa-code': z
        .string()
        .openapi({
          param: {
            name: 'x-2fa-code',
            in: 'header',
            required: true,
            description:
              'Enter the 2FA code. This parameter is required if 2FA is enabled in your workspace. See the <a href="https://developer.rocket.chat/apidocs/introduction-to-two-factor-authentication" target="_blank">Introduction to Two-Factor Authentication</a> document for details.',
            schema: { type: 'string' },
            example: '148750',
          },
        }),
      'x-2fa-method': z
        .string()
        .openapi({
          param: {
            name: 'x-2fa-method',
            in: 'header',
            required: true,
            schema: { type: 'string' },
            description:
              'Enter the method with which you get the 2FA code. It can be `email`, `totp`, or `password`. This parameter is required if 2FA is enabled in your workspace.',
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              userId: z
                .string()
                .openapi({
                  description: 'The user ID to update. This value must not be empty.',
                  example: 'PMGoujw82oETsaw9828rQh2oXM',
                }),
              data: z
                .object({
                  name: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'The name of the user.', example: 'Agent 2 Updated' }),
                  email: z
                    .string()
                    .exactOptional()
                    .openapi({
                      example: 'agent2@agent.com',
                      description: 'The email ID of the user.',
                    }),
                  password: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'passw0rd', description: 'The password for the user.' }),
                  username: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'example', description: 'The username for the user.' }),
                  active: z
                    .boolean()
                    .default(true)
                    .exactOptional()
                    .openapi({
                      description:
                        'Whether the user is active, which determines if they can log in. Setting this to `false` deactivates the user. If the user is the last owner of any room, or the only member of a private room, the request fails with `user-last-owner` unless `confirmRelinquish` is also `true`. See `confirmRelinquish`.',
                    }),
                  roles: z
                    .array(z.string())
                    .exactOptional()
                    .openapi({ description: 'The roles the user has been assigned.' }),
                  requirePasswordChange: z
                    .boolean()
                    .default(false)
                    .exactOptional()
                    .openapi({
                      description:
                        'Whether the user should be required to change their password when they login.',
                    }),
                  sendWelcomeEmail: z
                    .boolean()
                    .default(false)
                    .exactOptional()
                    .openapi({ description: 'Whether the user should get a welcome email.' }),
                  sipExtension: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: "The user's SIP extension (formerly `freeSwitchExtension`).",
                    }),
                  phones: z
                    .array(
                      z
                        .object({
                          number: z
                            .string()
                            .openapi({ description: 'The phone number. Spaces are removed.' }),
                          label: z
                            .string()
                            .max(50)
                            .exactOptional()
                            .openapi({
                              description: 'A label for the number, for example `Work`.',
                            }),
                        })
                        .openapi({ required: ['number'] }),
                    )
                    .max(10)
                    .exactOptional()
                    .openapi({
                      description:
                        "The user's phone numbers. Up to 10 numbers, each with an optional label.",
                    }),
                  verified: z
                    .boolean()
                    .default(true)
                    .exactOptional()
                    .openapi({
                      description: "Whether the user's email address should be verified.",
                    }),
                  customFields: z
                    .looseObject({})
                    .exactOptional()
                    .openapi({
                      example: { clearance: 'High', team: 'Queen' },
                      description:
                        'Any custom fields the user should have on their account.\nTo save custom fields, you must first define the custom fields in the admin panel (Manage > Workspace > Settings > Accounts > Registration > Custom Fields). For details on how to configure this field, see [Custom Fields](https://docs.rocket.chat/use-rocket.chat/workspace-administration/settings/accounts/custom-fields).\nFor information on how to view the custom fields, see the [Get Users List](https://developer.rocket.chat/reference/api/rest-api/endpoints/user-management/users-endpoints/get-users-list) endpoint.',
                    }),
                })
                .openapi({
                  description:
                    'The object that includes the user information to update with the following parameters. Note: If you provide an empty object, the user details are returned.',
                  required: [],
                }),
              confirmRelinquish: z
                .boolean()
                .default(false)
                .exactOptional()
                .openapi({
                  description:
                    "Top-level body parameter (not inside `data`). Only used when `data.active` is `false`. Set to `true` to deactivate the user even if they are the last owner of a room, or the only member of a private room.\nIf the room has other active members, the member who joined earliest becomes the new owner. If the user is the only member of a private room, or no other active member can take ownership, that room is deleted, together with every discussion that belongs to it. Public channels are not deleted.\nIf omitted or `false` and the user is the last owner of any room, the request fails with `user-last-owner` and the user's active status is not changed.",
                }),
            })
            .openapi({ required: ['userId', 'data'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              user: z
                .object({
                  _id: z.string().exactOptional(),
                  createdAt: z.string().exactOptional(),
                  username: z.string().exactOptional(),
                  emails: z
                    .array(
                      z
                        .object({
                          address: z.string().exactOptional(),
                          verified: z.boolean().exactOptional(),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                  type: z.string().exactOptional(),
                  roles: z.array(z.string()).exactOptional(),
                  status: z.string().exactOptional(),
                  active: z.boolean().exactOptional(),
                  inactiveReason: z.string().exactOptional(),
                  name: z.string().exactOptional(),
                  _updatedAt: z.string().exactOptional(),
                  __rooms: z.array(z.string()).exactOptional(),
                  requirePasswordChange: z.boolean().exactOptional(),
                  settings: z.looseObject({}).exactOptional(),
                  statusText: z.string().exactOptional(),
                  livechatStatusSystemModified: z.boolean().exactOptional(),
                  statusLivechat: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            Example: {
              value: {
                user: {
                  _id: 'PMGoujw82oETsaw9828rQh2oXM',
                  createdAt: '2026-02-24T23:22:54.986Z',
                  username: 'agent2',
                  emails: [{ address: 'agent2@agent.com', verified: false }],
                  type: 'user',
                  roles: ['user', 'livechat-agent'],
                  status: 'offline',
                  active: true,
                  inactiveReason: null,
                  name: 'Agent 2 Updated',
                  _updatedAt: '2026-02-25T14:25:59.157Z',
                  __rooms: ['GENERAL'],
                  requirePasswordChange: false,
                  settings: {},
                  statusText: '',
                  livechatStatusSystemModified: false,
                  statusLivechat: 'not-available',
                },
                success: true,
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
              details: z
                .object({
                  method: z.string().exactOptional(),
                  action: z.string().exactOptional(),
                  shouldBeRemoved: z.array(z.string()).exactOptional(),
                  shouldChangeOwner: z.array(z.string()).exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                success: false,
                error: 'Editing user is not allowed [error-action-not-allowed]',
                errorType: 'error-action-not-allowed',
                details: { method: 'insertOrUpdateUser', action: 'Editing_user' },
              },
            },
            'user-last-owner': {
              value: {
                success: false,
                error: '[user-last-owner]',
                errorType: 'user-last-owner',
                details: { shouldBeRemoved: ['cascade-test-group'], shouldChangeOwner: [] },
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1UsersUpdateOwnBasicInfoRoute = createRoute({
  method: 'post',
  path: '/api/v1/users.updateOwnBasicInfo',
  tags: ['Users'],
  summary: 'Update Own Basic Information',
  description:
    "Update your account information using this endpoint.\n* To change your email or password, you must confirm it using TOTP. If you don't have 2FA enabled in your account (token code or email), TOTP will require the current password method. Note that if 2FA is not enabled in the workspace, the 2FA headers are not required.\n* If you add the `currentPassword` encrypted in SHA256 to the request body, the request won't require TOTP again.\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|9.0.0            | Added the `phones` field.       |\n|6.4.0            | Add `bio` and `statusType` parameters.       |\n|0.62.2            | Added       |",
  operationId: 'post-api-v1-users.updateOwnBasicInfo',
  request: {
    headers: z.object({
      'X-User-Id': UserIdParamsSchema,
      'X-Auth-Token': AuthTokenParamsSchema,
      'x-2fa-code': X_2faCodeParamsSchema,
      'x-2fa-method': X_2faMethodParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .object({
                  email: z
                    .string()
                    .exactOptional()
                    .openapi({
                      example: 'example@example.com',
                      description: 'Email ID of the user.',
                    }),
                  newPassword: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'passw0rd', description: 'The new password of the user.' }),
                  currentPassword: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The password for the user encrypted in SHA256.',
                      example: '5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5',
                    }),
                  nickname: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'cake', description: 'The nickname of the user.' }),
                  bio: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'Engineer', description: 'The bio of the user.' }),
                  username: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'example', description: 'The username of the user.' }),
                  name: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'Example User', description: 'Name of the user.' }),
                  statusType: z
                    .string()
                    .exactOptional()
                    .openapi({
                      example: 'offline',
                      description:
                        'The status type of the user. It can be `online`, `busy`, `away`, or `offline`.',
                    }),
                  statusText: z
                    .string()
                    .exactOptional()
                    .openapi({
                      example: 'On a vacation',
                      description: 'The status text of the user.',
                    }),
                  phones: z
                    .array(
                      z
                        .object({
                          number: z
                            .string()
                            .openapi({ description: 'The phone number. Spaces are removed.' }),
                          label: z
                            .string()
                            .max(50)
                            .exactOptional()
                            .openapi({
                              description: 'A label for the number, for example `Work`.',
                            }),
                        })
                        .openapi({ required: ['number'] }),
                    )
                    .max(10)
                    .exactOptional()
                    .openapi({
                      description:
                        "The user's phone numbers. Up to 10 numbers, each with an optional label.",
                    }),
                })
                .openapi({
                  description:
                    'An object of user data to be updated with the following parameters. If you enter an empty string, the user details are returned.',
                  required: [],
                }),
              customFields: z
                .looseObject({})
                .exactOptional()
                .openapi({
                  description:
                    'Any custom fields the user should have on their account. You must define the custom fields in the workspace settings.',
                }),
            })
            .openapi({
              'x-examples': {
                'Example 1': {
                  data: {
                    email: 'test@test.com',
                    newPassword: 'testbb',
                    currentPassword:
                      'aa856615052ee58e557a2945d53bc90a228915e7d7687ea250f3b4b1581d6e53',
                    nickname: 'baby girl',
                    bio: 'Auspicious baby',
                    username: 'roxie',
                    name: 'test test',
                    statusType: 'offline',
                    statusText: 'On a vacation',
                  },
                  customFields: {},
                },
              },
              required: ['data'],
            }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              user: z
                .object({
                  _id: z.string().exactOptional(),
                  createdAt: z.string().exactOptional(),
                  services: z
                    .object({
                      password: z
                        .object({ bcrypt: z.string().exactOptional() })
                        .exactOptional()
                        .openapi({ required: [] }),
                      email2fa: z
                        .object({
                          enabled: z.boolean().exactOptional(),
                          changedAt: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      resume: z
                        .object({
                          loginTokens: z
                            .array(
                              z
                                .object({
                                  when: z.string().exactOptional(),
                                  hashedToken: z.string().exactOptional(),
                                  twoFactorAuthorizedHash: z.string().exactOptional(),
                                  twoFactorAuthorizedUntil: z.string().exactOptional(),
                                })
                                .openapi({ required: [] }),
                            )
                            .exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      email: z
                        .object({
                          verificationTokens: z
                            .array(
                              z
                                .object({
                                  token: z.string().exactOptional(),
                                  address: z.string().exactOptional(),
                                  when: z.string().exactOptional(),
                                })
                                .openapi({ required: [] }),
                            )
                            .exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      totp: z
                        .object({ enabled: z.boolean().exactOptional() })
                        .exactOptional()
                        .openapi({ required: [] }),
                      passwordHistory: z.array(z.string()).exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  username: z.string().exactOptional(),
                  emails: z
                    .array(
                      z
                        .object({
                          address: z.string().exactOptional(),
                          verified: z.boolean().exactOptional(),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                  type: z.string().exactOptional(),
                  status: z.string().exactOptional(),
                  active: z.boolean().exactOptional(),
                  _updatedAt: z.string().exactOptional(),
                  __rooms: z.array(z.string()).exactOptional(),
                  roles: z.array(z.string()).exactOptional(),
                  name: z.string().exactOptional(),
                  settings: z
                    .object({
                      preferences: z
                        .object({ themeAppearence: z.string().exactOptional() })
                        .exactOptional()
                        .openapi({ required: [] }),
                      profile: z.looseObject({}).exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  lastLogin: z.string().exactOptional(),
                  statusConnection: z.string().exactOptional(),
                  utcOffset: z.int().exactOptional(),
                  banners: z
                    .object({
                      'versionUpdate-6_0_0': z
                        .object({
                          id: z.string().exactOptional(),
                          priority: z.int().exactOptional(),
                          title: z.string().exactOptional(),
                          text: z.string().exactOptional(),
                          textArguments: z.array(z.string()).exactOptional(),
                          link: z.string().exactOptional(),
                          modifiers: z.array(z.looseObject({})).exactOptional(),
                          read: z.boolean().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      'versionUpdate-6_2_8': z
                        .object({
                          id: z.string().exactOptional(),
                          priority: z.int().exactOptional(),
                          title: z.string().exactOptional(),
                          text: z.string().exactOptional(),
                          textArguments: z.array(z.string()).exactOptional(),
                          link: z.string().exactOptional(),
                          modifiers: z.array(z.looseObject({})).exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  statusDefault: z.string().exactOptional(),
                  statusText: z.string().exactOptional(),
                  operator: z.boolean().exactOptional(),
                  livechatStatusSystemModified: z.boolean().exactOptional(),
                  statusLivechat: z.string().exactOptional(),
                  livechatCount: z.int().exactOptional(),
                  livechat: z
                    .object({ maxNumberSimultaneousChat: z.string().exactOptional() })
                    .exactOptional()
                    .openapi({ required: [] }),
                  bio: z.string().exactOptional(),
                  nickname: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                user: {
                  _id: 'rbAXPnMktTFbNpwtJ',
                  createdAt: '2023-02-20T13:42:07.119Z',
                  services: {
                    password: {
                      bcrypt: '$2b$10$E9ppW3T2itbMEcDvOdWBR.NXiW3YbifRHwBhjVkt26r1XS8yNhh6u',
                    },
                    email2fa: { enabled: true, changedAt: '2023-02-20T13:42:07.118Z' },
                    resume: {
                      loginTokens: [
                        {
                          when: '2023-09-16T09:27:10.959Z',
                          hashedToken: 'A1jmsVCHHH2SkXHrEJDfumN+VtUP3tcuJ/OGseGrRbA=',
                          twoFactorAuthorizedHash: '3067196228a830eacd6181a6977fe86a',
                          twoFactorAuthorizedUntil: '2023-09-19T16:40:58.767Z',
                        },
                        {
                          when: '2023-09-18T10:37:58.218Z',
                          hashedToken: 'RLdxvu9dDnk6QRwFdaK3my1AoPeGaR5lTkK+zEhTuPk=',
                        },
                        {
                          when: '2023-09-18T10:41:25.814Z',
                          hashedToken: 'zWZ8wW9PNlVuI2Q65vK/9vytaONk1BXxaWcNld4qvEc=',
                        },
                      ],
                    },
                    email: {
                      verificationTokens: [
                        {
                          token: 'lHq_4L8Orgxu2p5NhfVb0V9kA7kO1VaBXA5GmaJiuX3',
                          address: 'test@test.com',
                          when: '2023-05-23T18:47:07.142Z',
                        },
                      ],
                    },
                    totp: { enabled: false },
                    passwordHistory: [
                      '$2b$10$n1.FV8S2mxz7GzXA392V5OaDa5X0WR1DQ4eGGFKI/wpdhS9sVIC6S',
                      '$2b$10$4I68O5mlR.C8dRhtZ4Mj6us6EMwRHNIUqEWQe/nOhISs4e8RtOliW',
                      '$2b$10$AU9Ncfd8bO5TpE.5iLMjyujdd6RVJaoeKckVqo3MMO9Ngc3oyMAs2',
                    ],
                  },
                  username: 'roxie',
                  emails: [{ address: 'test@test.com', verified: true }],
                  type: 'user',
                  status: 'offline',
                  active: true,
                  _updatedAt: '2023-09-19T16:10:58.873Z',
                  __rooms: [
                    'GENERAL',
                    'siyr2oWQJBjQjhLwr',
                    '6GFJ3tbmHiyHbahmC',
                    '64f0f82c2c26843a68c1f7ba',
                  ],
                  roles: ['user', 'admin', 'livechat-agent', 'livechat-manager'],
                  name: 'test test',
                  settings: { preferences: { themeAppearence: 'light' }, profile: {} },
                  lastLogin: '2023-09-19T16:00:19.657Z',
                  statusConnection: 'away',
                  utcOffset: 1,
                  banners: {
                    'versionUpdate-6_0_0': {
                      id: 'versionUpdate-6_0_0',
                      priority: 10,
                      title: 'Update_your_RocketChat',
                      text: 'New_version_available_(s)',
                      textArguments: ['6.0.0'],
                      link: 'https://github.com/RocketChat/Rocket.Chat/releases/tag/6.0.0',
                      modifiers: [],
                      read: true,
                    },
                    'versionUpdate-6_2_8': {
                      id: 'versionUpdate-6_2_8',
                      priority: 10,
                      title: 'Update_your_RocketChat',
                      text: 'New_version_available_(s)',
                      textArguments: ['6.2.8'],
                      link: 'https://github.com/RocketChat/Rocket.Chat/releases/tag/6.2.8',
                      modifiers: [],
                    },
                  },
                  statusDefault: 'offline',
                  statusText: 'On a vacation',
                  operator: true,
                  livechatStatusSystemModified: false,
                  statusLivechat: 'available',
                  livechatCount: 8,
                  livechat: { maxNumberSimultaneousChat: '' },
                  bio: 'Engineer',
                  nickname: '',
                },
                success: true,
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                success: false,
                error: "must have required property 'data' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const getApiV1UsersInfoRoute = createRoute({
  method: 'get',
  path: '/api/v1/users.info',
  tags: ['Users'],
  summary: "Get User's Info",
  description:
    "Retrieves information about a user, limited to the details the caller is allowed to view. Look up the user by `userId`, `username`, `importId`, `email`, or `sipExtension`. Provide exactly one of these parameters per request.\n\nThis endpoint doesn't support the `fields` parameter. Use `includeUserRooms` instead.\n\nWhen the Premium **User status hiding** feature is enabled and the requested user has hidden their status from the caller, the response shows the user as `offline` and omits `statusText`, `statusSource`, `statusExpiresAt`, `statusDefault`, and `statusConnection`. This restriction also applies to administrators. Users always see their own status.\n\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|9.0.0            | Renamed `freeSwitchExtension` to `sipExtension`. Added the `phones` field.       |\n|8.8.0             | Added status visibility filtering |\n|8.5.0             | Added `freeSwitchExtension` query parameter for user lookup |\n|8.4.0             | Added `email` query parameter for user lookup |\n|7.0.0             | Removed the `fields` query parameter       |\n|3.4.0             | Added `unread` property inside `rooms` object       |\n|0.70.0            | Added `rooms` property to response if the user request it and has the `view-other-user-channels` permission       |\n|0.49.0            | Updated to support `userId` or `username`       |\n|0.48.0            | Renamed to `users.info`       |\n|0.35.0            | Added       |",
  operationId: 'get-api-v1-users.info',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      userId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'userId',
            in: 'query',
            description:
              'The `userId` of the user. Alternatively, you can use `username`, `importId`, `email`, or `sipExtension` to retrieve user information.',
            required: false,
            schema: { type: 'string' },
            example: 'W7NHuX5ri2e3mu2Fc',
          },
        }),
      username: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'string' },
            in: 'query',
            name: 'username',
            description:
              'The username of the user. Alternatively, you can use `userId`, `importId`, `email`, or `sipExtension` to retrieve user information.',
            required: false,
          },
        }),
      importId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'string' },
            in: 'query',
            name: 'importId',
            description:
              'The import ID of the user. Alternatively, you can use `userId`, `username`, `email`, or `sipExtension` to retrieve user information.',
            required: false,
          },
        }),
      includeUserRooms: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'string' },
            in: 'query',
            name: 'includeUserRooms',
            description: 'Whether to include the list of rooms the user is a member of.',
            required: false,
          },
        }),
      email: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'email',
            in: 'query',
            required: false,
            description:
              "Filter the results by entering the user's email. Alternatively, you can use `userId`, `username`, `importId`, or `sipExtension` to retrieve user information.",
            schema: { type: 'string' },
            example: 'john@example.com',
          },
        }),
      sipExtension: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'sipExtension',
            in: 'query',
            required: false,
            description:
              'The SIP extension assigned to the user (formerly `freeSwitchExtension`). Alternatively, you can use `userId`, `username`, `importId`, or `email` to retrieve user information.',
            schema: { type: 'string' },
            example: '1234',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              user: z
                .object({
                  _id: z.string().exactOptional(),
                  createdAt: z.string().exactOptional(),
                  username: z.string().exactOptional(),
                  emails: z
                    .array(
                      z
                        .object({
                          address: z.string().exactOptional(),
                          verified: z.boolean().exactOptional(),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                  type: z.string().exactOptional(),
                  status: z.string().exactOptional(),
                  active: z.boolean().exactOptional(),
                  roles: z.array(z.string()).exactOptional(),
                  name: z.string().exactOptional(),
                  requirePasswordChange: z.boolean().exactOptional(),
                  lastLogin: z.string().exactOptional(),
                  statusConnection: z.string().exactOptional(),
                  utcOffset: z.int().exactOptional(),
                  sipExtension: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: "The user's SIP extension (formerly `freeSwitchExtension`).",
                    }),
                  phones: z
                    .array(
                      z
                        .object({
                          number: z
                            .string()
                            .openapi({ description: 'The phone number. Spaces are removed.' }),
                          label: z
                            .string()
                            .max(50)
                            .exactOptional()
                            .openapi({
                              description: 'A label for the number, for example `Work`.',
                            }),
                        })
                        .openapi({ required: ['number'] }),
                    )
                    .max(10)
                    .exactOptional()
                    .openapi({
                      description:
                        "The user's phone numbers. Up to 10 numbers, each with an optional label. Phones are returned only when the caller can see the user's full profile, for example their own user.",
                    }),
                  canViewAllInfo: z.boolean().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                user: {
                  _id: '5fRTXMt7DMJbpPJfh',
                  createdAt: '2023-07-10T16:44:58.548Z',
                  services: {
                    password: true,
                    email2fa: { enabled: true, changedAt: '2023-07-10T16:44:58.546Z' },
                    resume: {
                      loginTokens: [
                        { when: '2023-10-05T18:55:02.996Z', hashedToken: '...' },
                        { when: '2023-10-05T19:09:30.415Z', hashedToken: '....' },
                        { when: '2023-10-10T23:40:46.098Z', hashedToken: '....' },
                      ],
                    },
                  },
                  username: 'test.john',
                  emails: [{ address: 'test.john@test.com', verified: true }],
                  type: 'user',
                  status: 'offline',
                  active: true,
                  roles: ['user', 'admin'],
                  name: 'Test John',
                  requirePasswordChange: false,
                  lastLogin: '2023-10-10T23:40:46.093Z',
                  statusConnection: 'offline',
                  utcOffset: 1,
                  statusText: '',
                  avatarETag: 'GFoEi6wv3uAxnzDcD',
                  nickname: 'tesuser2',
                  sipExtension: '1234',
                  phones: [{ number: '+15551234567', label: 'Work' }],
                  canViewAllInfo: true,
                  rooms: [
                    {
                      _id: '651667dda2f73c7460e18cce',
                      unread: 1,
                      rid: 'JKa7R9zu2DinBhBN9',
                      name: 'Livestream',
                      t: 'c',
                    },
                    {
                      _id: '64ac358a79f5c6e276cfe718',
                      unread: 0,
                      rid: 'GENERAL',
                      name: 'general',
                      t: 'c',
                    },
                    {
                      _id: '64aca0e5aa5ad4273bfbfdb8',
                      unread: 0,
                      rid: '6GFJ3tbmHiyHbahmC',
                      name: 'test-audit',
                      t: 'c',
                    },
                    {
                      _id: '64adb09baa5ad4273bfc0cc0',
                      unread: 0,
                      rid: '64adb09baa5ad4273bfc0cbf',
                      name: 'test-room',
                      t: 'c',
                      roles: ['owner'],
                    },
                    {
                      _id: '64fd791c2c26843a68c1f7e5',
                      unread: 0,
                      rid: 'siyr2oWQJBjQjhLwr',
                      name: 'try',
                      t: 'c',
                      roles: [],
                    },
                    {
                      _id: 'g5xHGWAGLA7vZXwW8',
                      rid: '5fRTXMt7DMJbpPJfhrbAXPnMktTFbNpwtJ',
                      name: 'roxie',
                      t: 'd',
                      unread: 2,
                    },
                    {
                      _id: '64ef8a982c26843a68c1f7ae',
                      unread: 0,
                      rid: 'WDuJLFkjwk6L7LdFC',
                      name: 'new',
                      t: 'p',
                      roles: ['leader'],
                    },
                  ],
                },
                success: true,
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Missing / invalid lookup': {
              value: {
                success: false,
                error:
                  "must have required property 'userId'\n must have required property 'username'\n must have required property 'importId'\n must match a schema in anyOf [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
            'User not found': { value: { success: false, error: 'User not found.' } },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const getApiV1UsersListRoute = createRoute({
  method: 'get',
  path: '/api/v1/users.list',
  tags: ['Users'],
  summary: 'Get Users List',
  description:
    "Retrieves workspace users and the information the caller is allowed to view.\nFilter by `username`, `email`, or custom field values to locate a user and obtain their `userId` for the `users.info` endpoint.\n\nThe response only contains the default user fields. To read `customFields`, set `includeCustomFields` to `true`. Other fields, such as `utcOffset`, `nickname`, `bio`, and `statusText`, are not returned by this endpoint. Use the `users.info` endpoint instead.\n\nWhen the Premium **User status hiding** feature is enabled, users who have hidden their status from the caller appear as `offline`, and their detailed status fields are omitted.\n\n**Permissions required**:\n- `view-d-room`: View direct messages.\n- `view-full-other-user-info`: View complete user details, such as account creation and last login. Also required to use the `customFields` and `includeCustomFields` parameters.\n- `view-outside-room`: View users outside the caller's rooms when `Apply_permission_view-outside-room` is enabled under **Settings** > **General** > **REST API**.\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|9.0.0            | Removed the `query` and `fields` parameters. Requests that include them return a `400` error. Added the `username`, `customFields`, and `includeCustomFields` query parameters.       |\n|8.8.0             | Added status visibility filtering |\n|8.4.0             | Added `email` query parameter for filtering |\n|0.49.0            | `Count` and `offset` query parameters supported.       |\n|0.35.0            | Added       |",
  operationId: 'get-api-v1-users.list',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const isGroup = (item: unknown): item is Record<string, unknown> =>
          typeof item === 'object' && item !== null && !Array.isArray(item)
        const lists = new WeakSet<object>()
        const isIndex = (part: string | undefined) => part !== undefined && /^\d*$/.test(part)
        const child = (target: Record<string, unknown>, key: string, asList: boolean) => {
          const held = target[key]
          if (isGroup(held)) return held
          const made: Record<string, unknown> = Object.create(null)
          if (asList) lists.add(made)
          target[key] = made
          return made
        }
        const set = (
          root: Record<string, unknown>,
          path: readonly string[],
          item: unknown,
        ): void => {
          const work: [Record<string, unknown>, number, unknown, boolean][] = [
            [root, 0, item, false],
          ]
          for (let job = work.pop(); job !== undefined; job = work.pop()) {
            const [target, at, value, split] = job
            const head = path[at]
            if (head === undefined) continue
            const next = path[at + 1]
            if (head === '') {
              if (!split && Array.isArray(value)) {
                for (let i = value.length - 1; i >= 0; i -= 1)
                  work.push([target, at, value[i], true])
                continue
              }
              const size = Object.keys(target).length
              if (next === undefined) {
                target[String(size)] = value
                continue
              }
              const free =
                next === ''
                  ? -1
                  : Object.values(target).findIndex((held) => isGroup(held) && !(next in held))
              work.push([
                child(target, String(free < 0 ? size : free), isIndex(next)),
                at + 1,
                value,
                false,
              ])
              continue
            }
            if (next === undefined) {
              target[head] = value
              continue
            }
            work.push([child(target, head, isIndex(next)), at + 1, value, false])
          }
        }
        const settle = (root: unknown): unknown => {
          if (!isGroup(root)) return root
          const found: [Record<string, unknown>, string, Record<string, unknown>][] = []
          const queue: Record<string, unknown>[] = [root]
          for (const node of queue) {
            for (const [key, inner] of Object.entries(node)) {
              if (isGroup(inner)) {
                found.push([node, key, inner])
                queue.push(inner)
              }
            }
          }
          const finish = (group: Record<string, unknown>): unknown =>
            lists.has(group)
              ? Object.entries(group)
                  .sort((a, b) => Number(a[0]) - Number(b[0]))
                  .map(([, inner]) => inner)
              : Object.assign(Object.create(null), group)
          for (const [parent, key, group] of found.reverse()) {
            parent[key] = finish(group)
          }
          return finish(root)
        }
        const deep: string[] = ['customFields']
        for (const [key, item] of Object.entries(val)) {
          const match = /^([^\[\]]+)((?:\[[^\[\]]*\])+)$/.exec(key)
          const name = match?.[1]
          const path = match?.[2]
          if (name !== undefined && path !== undefined && deep.includes(name)) {
            const parts = path.slice(1, -1).split('][')
            set(group(name), parts, item)
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([
          ...rest,
          ...[...groups].map(([name, held]) => [name, settle(held)] as const),
        ])
      })
      .pipe(
        z.object({
          offset: OffsetParamsSchema,
          count: CountParamsSchema,
          sort: z
            .string()
            .exactOptional()
            .openapi({
              param: {
                schema: { type: 'string' },
                in: 'query',
                name: 'sort',
                description:
                  'Sort the users in ascending (`1`) or descending (`-1`) order. The value must be entered as a JSON string. The options are as follows: * `status`: Sort by users\' status. For example, `sort={"status":1}` (this maps to the `active` status). * `createdAt`: Sort by the time of user creation. For example, `sort={"createdAt":-1}` * `name`: Sort by user name. For example, `sort={"name":1}`',
                required: false,
              },
            }),
          email: ((schema) =>
            z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
            z.string().min(1).nullable(),
          )
            .exactOptional()
            .openapi({
              param: {
                name: 'email',
                in: 'query',
                required: false,
                description: 'Filter users by email address. Minimum length: 1 character.',
                schema: { type: 'string', minLength: 1, nullable: true },
                example: 'user@example.com',
              },
            }),
          username: ((schema) =>
            z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
            z.string().min(1).nullable(),
          )
            .exactOptional()
            .openapi({
              param: {
                name: 'username',
                in: 'query',
                required: false,
                description:
                  'Filter users whose username contains this value. The match is not case-sensitive and checks the username only, not the display name. Regular expression characters are matched literally. Minimum length: 1 character. An empty value returns a `400` error.',
                schema: { type: 'string', minLength: 1, nullable: true },
                example: 'john',
              },
            }),
          customFields: z
            .record(z.string(), z.string())
            .exactOptional()
            .openapi({
              param: {
                name: 'customFields',
                in: 'query',
                required: false,
                style: 'deepObject',
                explode: true,
                description:
                  'Filter users by exact custom field values, in the format `customFields[<key>]=<value>`. For example, `customFields[department]=Sales`. The value match is case-sensitive. When you send more than one key, a user must match all of them. The filter works without `includeCustomFields`. Sending the parameter as a JSON string, such as `customFields={"department":"Sales"}`, returns a `400` error. Requires the `view-full-other-user-info` permission.',
                schema: { type: 'object', additionalProperties: { type: 'string' } },
                example: { department: 'Sales' },
              },
            }),
          includeCustomFields: z
            .stringbool()
            .exactOptional()
            .openapi({
              param: {
                name: 'includeCustomFields',
                in: 'query',
                required: false,
                description:
                  "Whether to include each user's full `customFields` object in the response. Users without custom fields are returned without the `customFields` key. The value must be `true` or `false`; other values return a `400` error. Requires the `view-full-other-user-info` permission. Defaults to `false`.",
                schema: { type: 'boolean' },
                example: true,
              },
            }),
        }),
      ),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              users: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      username: z.string().exactOptional(),
                      emails: z
                        .array(
                          z
                            .object({
                              address: z.string().exactOptional(),
                              verified: z.boolean().exactOptional(),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional(),
                      type: z.string().exactOptional(),
                      status: z.string().exactOptional(),
                      active: z.boolean().exactOptional(),
                      roles: z.array(z.string()).exactOptional(),
                      name: z.string().exactOptional(),
                      lastLogin: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Returned only for users who have logged in.' }),
                      nameInsensitive: z.string().exactOptional(),
                      avatarETag: z.string().exactOptional(),
                      customFields: z
                        .looseObject({})
                        .exactOptional()
                        .openapi({
                          description:
                            'Returned only when `includeCustomFields` is `true` and the user has custom fields.',
                        }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              count: z.int().exactOptional(),
              offset: z.int().exactOptional(),
              total: z.int().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                users: [
                  {
                    _id: 'DGsmi2J4WjizYn7jc',
                    username: 'uniqueusername',
                    emails: [{ address: 'email@user.tld', verified: false }],
                    type: 'user',
                    status: 'offline',
                    active: true,
                    roles: ['bot', 'user'],
                    name: 'name',
                    nameInsensitive: 'name',
                  },
                  {
                    _id: 'uZ5JvvioeHK8Coyqe',
                    active: true,
                    type: 'user',
                    status: 'offline',
                    roles: ['user'],
                    lastLogin: '2023-05-16T20:50:33.579Z',
                    username: 'user-0',
                    nameInsensitive: '',
                  },
                  {
                    _id: 'aspKK7FHe7iQgzexX',
                    active: true,
                    type: 'user',
                    status: 'offline',
                    roles: ['user'],
                    lastLogin: '2023-05-12T10:44:46.703Z',
                    username: 'user-00',
                    name: 'User 00',
                    emails: [{ address: 'user00@mail.cm', verified: false }],
                    nameInsensitive: 'user 00',
                  },
                ],
                count: 3,
                offset: 0,
                total: 3,
                success: true,
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Removed or unknown parameter': {
              value: {
                success: false,
                error: 'must NOT have additional properties',
                errorType: 'error-invalid-params',
              },
            },
            'Empty username': {
              value: {
                success: false,
                error: 'must NOT have fewer than 1 characters',
                errorType: 'error-invalid-params',
              },
            },
            'customFields sent as a JSON string': {
              value: { success: false, error: 'must be object', errorType: 'error-invalid-params' },
            },
            'Invalid includeCustomFields value': {
              value: {
                success: false,
                error: 'must be boolean',
                errorType: 'error-invalid-params',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: z
            .object({ success: z.boolean().exactOptional(), error: z.string().exactOptional() })
            .openapi({ required: [] }),
          examples: { 'Permission Error': { value: { success: false, error: 'forbidden' } } },
        },
      },
    },
  },
})

export const postApiV1UsersSetAvatarRoute = createRoute({
  method: 'post',
  path: '/api/v1/users.setAvatar',
  tags: ['Users'],
  summary: 'Set User Avatar',
  description:
    "Use this endpoint to change your or another user's avatar. You can change avatars only if the `AllowUserAvatarChange` setting under **Accounts** is enabled. To change another user's avatar, you need the permission: `edit-other-user-avatar`.\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|8.7.0             | Added optional `service` multipart field (stored as `avatarOrigin`)       |\n|0.56.0            | Add support for `username` argument.       |\n|0.48.0            | Set other users avatars if the callee has permission.       |\n|0.46.0            | Added       |",
  operationId: 'post-api-v1-users.setAvatar',
  request: {
    headers: z.object({ 'X-User-Id': UserIdParamsSchema, 'X-Auth-Token': AuthTokenParamsSchema }),
    body: {
      description:
        'You have two options to set the user avatar:\n  * Upload the image file to use as the new avatar, as form-data. For example, `image=@my-own-avatar.png`. Optionally include a `service` field to record which OAuth/external service the avatar came from (stored as `avatarOrigin`).\n  * Enter the image URL you want to set as the user avatar in the request body, using the parameter `avatarUrl`.',
      content: {
        'application/json': {
          schema: z
            .object({
              avatarUrl: z
                .string()
                .openapi({
                  description: 'Enter the image URL you want to set as the user avatar.',
                  example: 'http://domain.tld/to/my/own/avatar.jpg',
                }),
              userId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The ID or username of the user. If not provided, the avatar of the user who is sending the request is updated. Alternatively, you can enter the `username` parameter.',
                }),
            })
            .openapi({ required: ['avatarUrl'] }),
          examples: { Example: { value: { avatarUrl: 'http://domain.tld/to/my/own/avatar.jpg' } } },
        },
        'multipart/form-data': {
          schema: z
            .object({
              image: z
                .file()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description: 'The image file to upload as the new avatar.',
                }),
              service: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Optional. The name of the OAuth/external service the avatar originates from (e.g. `google`, `github`, `url`). Stored as `avatarOrigin`. ',
                  example: 'google',
                }),
              userId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The ID or username of the user. If not provided, the avatar of the user who is sending the request is updated.',
                }),
            })
            .openapi({ required: ['image'] }),
          examples: { Example: { value: { image: '@my-own-avatar.png', service: 'google' } } },
        },
      },
    },
  },
  responses: {
    200: TrueSuccessResponse,
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({ success: z.boolean().exactOptional(), error: z.string().exactOptional() })
            .openapi({ required: [] }),
          examples: { 'Example 1': { value: { success: false, error: 'Missing Content-Type' } } },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const getApiV1UsersGetAvatarRoute = createRoute({
  method: 'get',
  path: '/api/v1/users.getAvatar',
  tags: ['Users'],
  summary: 'Get User Avatar',
  description:
    "View a user's avatar.\n\n### Changelog\n| Version      | Description |\n| ------------ | ------------|\n|0.50.0        | Added       |",
  operationId: 'get-api-v1-users.getAvatar',
  request: {
    query: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            schema: { type: 'string' },
            example: 'BsNr28znDkG8aeo7W',
            in: 'query',
            name: 'userId',
            description: 'The user ID. Alternatively, you can enter the `username` parameter.',
            required: true,
          },
        }),
    }),
    headers: z.object({ 'X-User-Id': UserIdParamsSchema, 'X-Auth-Token': AuthTokenParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'image/svg+xml': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                success: false,
                error:
                  'The required "userId" or "username" param was not provided [error-user-param-not-provided]',
                errorType: 'error-user-param-not-provided',
              },
            },
          },
        },
      },
    },
  },
})

export const postApiV1UsersResetAvatarRoute = createRoute({
  method: 'post',
  path: '/api/v1/users.resetAvatar',
  tags: ['Users'],
  summary: 'Reset Avatar',
  description:
    "Reset a user's avatar to the default icon. By default, icons contain the user's initials.\nPermissions required, if the setting `AllowUserAvatarChange` is enabled: \n  * `edit-other-user-avatar`: Permission to change other user's avatar\n  * `manage-moderation-actions`: Permission to manage moderation actions, perform actions on reported users\n  \n  ### Changelog\n  | Version      | Description |\n  | ---------------- | ------------|\n  |9.0.0            | Returns `403` with `errorType: error-forbidden` instead of `400` when the request is refused.       |\n  |0.55.0            | Added       |",
  operationId: 'post-api-v1-users.resetAvatar',
  request: {
    headers: z.object({ 'X-User-Id': UserIdParamsSchema, 'X-Auth-Token': AuthTokenParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              userId: z
                .string()
                .openapi({
                  description:
                    'The user ID. Alternatively, you can enter the `username` parameter.',
                  example: 'BsNr28znDkG8aeo7W',
                }),
            })
            .openapi({ required: ['userId'] }),
          examples: { 'Example 1': { value: { userId: 'BsNr28znDkG8aeo7W' } } },
        },
      },
    },
  },
  responses: {
    200: TrueSuccessResponse,
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                success: false,
                error:
                  'The required "userId" or "username" param was not provided [error-user-param-not-provided]',
                errorType: 'error-user-param-not-provided',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 2': {
              value: {
                success: false,
                error: 'Reset avatar is not allowed [error-not-allowed]',
                errorType: 'error-forbidden',
              },
            },
          },
        },
      },
    },
  },
})

export const postApiV1UsersSetStatusRoute = createRoute({
  method: 'post',
  path: '/api/v1/users.setStatus',
  tags: ['Users'],
  summary: 'Set User Status',
  description:
    "* You can set the status for yourself or another user. The `AllowUserStatusMessageChange` setting must be enabled in the `Accounts` workspace settings.\n* To change another user's status, you must have the `edit-other-user-info` permission.\n* According to your workspace settings (under **Accounts**), you will only be able to set the invisible or `offline` status if the `Allow Invisible status option` setting is enabled.\n  \n  ### Changelog\n  | Version      | Description |\n  | ---------------- | ------------|\n  |8.6.0            | Added `expiresAt` request parameter for timed status expiration. |\n  |1.2.0            | Added       |",
  operationId: 'post-api-v1-users.setStatus',
  request: {
    headers: z.object({ 'X-User-Id': UserIdParamsSchema, 'X-Auth-Token': AuthTokenParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              message: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "The user's status message. At least one of the `message` or `status` parameters is required.",
                  example: 'My status update',
                }),
              status: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "The user's status like `online`, `away`, `busy`, or `offline`. At least one of the `message` or `status` parameters is required.",
                  example: 'online',
                }),
              expiresAt: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Date as an ISO 8601 string. Sets an expiration time for the status. When this time passes, the presence engine restores the user's previous status. Must be a future date. Omit this parameter to keep the status until it is changed again.",
                  example: '2026-06-22T18:00:00.000Z',
                }),
              userId: z
                .string()
                .exactOptional()
                .openapi({
                  example: 'zXuq7SvPKYbzYmfpo',
                  description:
                    "The user ID for which you want to set the status. You don't need to add this if you are setting the status for yourself. Alternatively, you can use the `username` parameter and enter the username for which you want to set the status.",
                }),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                message: 'My status update',
                status: 'online',
                expiresAt: '2026-06-22T18:00:00.000Z',
                userId: 'zXuq7SvPKYbzYmfpo',
                username: 'bob',
              },
            },
          },
        },
      },
    },
  },
  responses: {
    200: TrueSuccessResponse,
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({ success: z.boolean().exactOptional(), error: z.string().exactOptional() })
            .openapi({ required: [] }),
          examples: {
            'Missing status or message parameter': {
              value: {
                success: false,
                error: 'Match error: Failed Match.OneOf, Match.Maybe or Match.Optional validation',
              },
            },
            'Invalid expiresAt date': {
              value: {
                success: false,
                error: 'expiresAt must be a future date [error-invalid-date]',
                errorType: 'error-invalid-date',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const getApiV1UsersGetStatusRoute = createRoute({
  method: 'get',
  path: '/api/v1/users.getStatus',
  tags: ['Users'],
  summary: 'Get Status',
  description:
    "Gets a user's status in your workspace.\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|8.6.0            | Added `statusSource` and `statusExpiresAt` response fields. |\n|1.2.0            | Added       |",
  operationId: 'get-api-v1-users.getStatus',
  request: {
    query: z.object({
      userId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'userId',
            in: 'query',
            description:
              'The `userId` of the user. Alternatively, you can use the `username` property and value. If the value is not provided, the authenticated user is used. ',
            schema: { type: 'string' },
            example: 'W7NHuX5ri2e3mu2Fc',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              _id: z.string().exactOptional().openapi({ description: 'The user ID.' }),
              connectionStatus: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "The connection status. Returned when requesting the authenticated user's own status.",
                }),
              status: z.string().exactOptional(),
              statusSource: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The claim that set the current status. One of `internal`, `manual`, or `external`. Omitted when the user has no recorded status source.',
                }),
              statusExpiresAt: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Date as an ISO 8601 string indicating when the current status expires. Omitted when the status has no expiration.',
                }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                _id: 'W7NHuX5ri2e3mu2Fc',
                connectionStatus: 'online',
                status: 'online',
                statusSource: 'manual',
                statusExpiresAt: '2026-06-22T18:00:00.000Z',
                success: true,
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1UsersSetActiveStatusRoute = createRoute({
  method: 'post',
  path: '/api/v1/users.setActiveStatus',
  tags: ['Users'],
  summary: "Set User's Status Active",
  description:
    "Activate or deactivate a user in the workspace.\n\nAny one of the following permissions is required:\n* `edit-other-user-active-status`: Change another user's active status.\n* `manage-moderation-actions`: Manage moderation actions on reported users.\n\nWhen a user is deactivated (`activeStatus=false`), Rocket.Chat revokes all of the user's login tokens and OAuth access tokens, refresh tokens, and authorization codes. The user can no longer call the REST API with previously issued OAuth credentials.\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|8.5.0            | Added OAuth access token, refresh token, and authorization code revocation on deactivation. |\n|3.7.0            | Added `confirmRelinquish` to the payload.       |\n|0.75.0            | Added       |",
  operationId: 'post-api-v1-users.setActiveStatus',
  request: {
    headers: z.object({ 'X-User-Id': UserIdParamsSchema, 'X-Auth-Token': AuthTokenParamsSchema }),
    body: {
      description:
        'When deactivating a user (`activeStatus=false`) and `confirmRelinquish=true`:\n\n* If the user is the last owner of a room that has other active members, the member who joined earliest becomes the new owner.\n* If the user is the only member of a private room, or no other active member can take ownership, that room is deleted, together with every discussion that belongs to it, regardless of who is a member of those discussions. Public channels are not deleted.\n\nWhen `confirmRelinquish` is omitted or `false` and the user is the last owner of any room, or the only member of a private room, the request fails with `user-last-owner` and no change is made. `details.shouldBeRemoved` names the rooms that would be deleted. `details.shouldChangeOwner` names the rooms that would get a new owner. Child discussions that the user is not subscribed to are not listed; any room in `shouldBeRemoved` also takes its discussions with it.',
      content: {
        'application/json': {
          schema: z
            .object({
              activeStatus: z
                .boolean()
                .default(true)
                .openapi({ description: 'The value of the active status.' }),
              userId: z
                .string()
                .openapi({
                  description: 'The user ID whose status value is to be changed.',
                  example: '5HmCfpoB7jp2uibTC',
                }),
              confirmRelinquish: z
                .boolean()
                .default(false)
                .exactOptional()
                .openapi({
                  description:
                    'Only used when `activeStatus` is `false`. Set to `true` to deactivate the user even if they are the last owner of a room, or the only member of a private room. If omitted or `false` and the user is the last owner of any room, the request fails with `user-last-owner`.',
                }),
            })
            .openapi({
              'x-examples': { 'Example 1': { activeStatus: false, userId: '5HmCfpoB7jp2uibTC' } },
              required: ['activeStatus', 'userId'],
            }),
        },
      },
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              user: z
                .object({ _id: z.string().exactOptional(), active: z.boolean().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: { user: { _id: 'jJNyu4BQFqdgEcqnR', active: false }, success: true },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
              details: z
                .object({
                  shouldBeRemoved: z.array(z.string()).exactOptional(),
                  shouldChangeOwner: z.array(z.string()).exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                success: false,
                error: "must have required property 'activeStatus'\n[error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
            'user-last-owner': {
              value: {
                success: false,
                error: '[user-last-owner]',
                errorType: 'user-last-owner',
                details: { shouldBeRemoved: ['cascade-test-group'], shouldChangeOwner: [] },
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1UsersDeactivateIdleRoute = createRoute({
  method: 'post',
  path: '/api/v1/users.deactivateIdle',
  tags: ['Users'],
  summary: 'Deactivate Idle Users',
  description:
    "Automatically deactivate idle users in your workspace based on the number of days and roles.\n\nFor every user that this endpoint deactivates, Rocket.Chat clears the user's login tokens and revokes their OAuth access tokens, refresh tokens, and authorization codes. Deactivated users can no longer call the REST API with previously issued OAuth credentials.\n\nPermission required: `edit-other-user-active-status`\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|8.5.0            | Added login and OAuth token revocation for users deactivated by this endpoint. |\n|3.1.0            | Added       |",
  operationId: 'post-api-v1-users.deactivateIdle',
  request: {
    headers: z.object({ 'X-User-Id': UserIdParamsSchema, 'X-Auth-Token': AuthTokenParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              daysIdle: z
                .int()
                .openapi({ description: 'The number of days that the user is idle.', example: 2 }),
              role: z
                .string()
                .default('user')
                .exactOptional()
                .openapi({ description: 'The user role.', example: 'admin' }),
            })
            .openapi({ required: ['daysIdle'] }),
          examples: { 'Example 1': { value: { daysIdle: 2, role: 'user' } } },
        },
      },
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({ count: z.int().exactOptional(), success: z.boolean().exactOptional() })
            .openapi({ required: [] }),
          examples: { 'Success Example': { value: { count: 1, success: true } } },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                success: false,
                error: "must have required property 'daysIdle' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: z
            .object({ success: z.boolean().exactOptional(), error: z.string().exactOptional() })
            .openapi({ required: [] }),
          examples: { 'Permission Error': { value: { success: false, error: 'forbidden' } } },
        },
      },
    },
  },
})

export const getApiV1UsersGetPresenceRoute = createRoute({
  method: 'get',
  path: '/api/v1/users.getPresence',
  tags: ['Users'],
  summary: "Get Specific User's Presence",
  description:
    "Get a user's presence in the workspace (offline, busy, active, or away).\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|0.49.0            | Updated to support `userId` or `username`       |\n|0.48.0            | Renamed to `users.getPresence`       |\n|0.35.0            | Added       |",
  operationId: 'get-api-v1-users.getPresence',
  request: {
    headers: z.object({ 'X-User-Id': UserIdParamsSchema, 'X-Auth-Token': AuthTokenParamsSchema }),
    query: z.object({
      userId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'string' },
            example: 'BsNr28znDkG8aeo7W',
            in: 'query',
            name: 'userId',
            description:
              'The user ID. Alternatively, you can enter the `username` parameter. If not provided, the user who sending the request is retrieved.',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({ presence: z.string().exactOptional(), success: z.boolean().exactOptional() })
            .openapi({ required: [] }),
          examples: { 'Success Example': { value: { presence: 'offline', success: true } } },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const getApiV1UsersPresenceRoute = createRoute({
  method: 'get',
  path: '/api/v1/users.presence',
  tags: ['Users'],
  summary: 'Get Users Presence',
  description:
    'Get presence of multiple workspace users. You can filter by date and user IDs.\n\nIf the `Presence_broadcast_disabled` setting is true, the endpoint returns an empty array. You can find this setting under **Manage** > **Workspace** > **Settings** > **Troubleshoot**.\n\nWhen the Premium **User status hiding** feature is enabled, users who have hidden their status from the caller are omitted from the response. This applies to full results and requests filtered by `from` or `ids`.\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|8.8.0            | Added status visibility filtering. |\n|8.6.0            | Added `statusSource` and `statusExpiresAt` to returned user objects. |\n|8.5.0            | Restored comma-separated `ids` query parameter support.       |\n|1.1.0            | Added       |',
  operationId: 'get-api-v1-users.presence',
  request: {
    headers: z.object({ 'X-User-Id': UserIdParamsSchema, 'X-Auth-Token': AuthTokenParamsSchema }),
    query: z.object({
      from: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'string' },
            example: '2019-05-22T12:11:45.392Z',
            in: 'query',
            name: 'from',
            description:
              "The last date when the status was changed. Format: ISO 8601 datetime. Timezone, milliseconds and seconds are optional. If you don't pass `from` parameter, you'll get a list of all users' presence and the result will have a `full` field with value `true` .",
            required: false,
          },
        }),
      ids: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'string' },
            example: 'J4sWseCgs8eEnWvhE,BsNr28znDkG8aeo7W',
            in: 'query',
            name: 'ids',
            description:
              'The IDs of the users whose presence you want. Provide one ID as `?ids=userId1`, multiple comma-separated IDs as `?ids=userId1,userId2`, or repeat the parameter as `?ids=userId1&ids=userId2`.',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              users: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      name: z.string().exactOptional(),
                      username: z.string().exactOptional(),
                      status: z.string().exactOptional(),
                      utcOffset: z.int().exactOptional(),
                      statusText: z
                        .string()
                        .exactOptional()
                        .openapi({ description: "The user's status message." }),
                      statusSource: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            "The claim that set the user's current status. One of `internal`, `manual`, or `external` (priority order: `internal` > `manual` > `external`). Omitted when the user has no recorded status source.",
                        }),
                      statusExpiresAt: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            "Date as an ISO 8601 string indicating when the user's current status expires. Omitted when the status has no expiration.",
                        }),
                      avatarETag: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              full: z.boolean().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                users: [
                  {
                    _id: 'rocket.cat',
                    name: 'Rocket.Cat',
                    username: 'rocket.cat',
                    status: 'online',
                    utcOffset: 0,
                    statusText: 'In a call',
                    statusSource: 'internal',
                    avatarETag: '5BB9B5ny5DkKdrwkq',
                  },
                  {
                    _id: 'rocketchat.internal.admin.test',
                    name: 'RocketChat Internal Admin Test',
                    username: 'rocketchat.internal.admin.test',
                    status: 'online',
                    utcOffset: -2,
                    statusText: 'Focus time',
                    statusSource: 'manual',
                    statusExpiresAt: '2026-06-22T18:00:00.000Z',
                    avatarETag: 'iEbEm4bTT327NJjXt',
                  },
                ],
                full: true,
                success: true,
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1UsersDeleteRoute = createRoute({
  method: 'post',
  path: '/api/v1/users.delete',
  tags: ['Users'],
  summary: 'Delete User',
  description:
    'Permanently deletes an existing user from your workspace. Permission required: `delete-user`\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|3.7.0            | Added `confirmRelinquish` to the payload.       |\n|0.35.0            | Added       |',
  operationId: 'post-api-v1-users.delete',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              userId: z
                .string()
                .openapi({
                  example: 'BsNr28znDkG8aeo7W',
                  description:
                    'The `userId` of the user. Alternatively, you can use the `username` property and value.',
                }),
              confirmRelinquish: z
                .boolean()
                .default(false)
                .exactOptional()
                .openapi({
                  description:
                    'Deletes the user, even if they are the last owner of a room. By default, it is set to `false`.',
                }),
            })
            .openapi({ required: ['userId'] }),
          examples: {
            Example: { value: { userId: 'BsNr28znDkG8aeo7W', confirmRelinquish: true } },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              deletedRooms: z
                .array(z.looseObject({}))
                .exactOptional()
                .openapi({
                  description: 'The rooms deleted as part of the user deletion process.',
                }),
            })
            .openapi({ required: [] }),
          examples: { Example: { value: { success: true, deletedRooms: [] } } },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            Example: {
              value: {
                success: false,
                error:
                  'The required "userId" or "username" param was not provided [error-user-param-not-provided]',
                errorType: 'error-user-param-not-provided',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: z
            .object({ success: z.boolean().exactOptional(), error: z.string().exactOptional() })
            .openapi({ required: [] }),
          examples: { 'Permission Error': { value: { success: false, error: 'forbidden' } } },
        },
      },
    },
  },
})

export const postApiV1UsersDeleteOwnAccountRoute = createRoute({
  method: 'post',
  path: '/api/v1/users.deleteOwnAccount',
  tags: ['Users'],
  summary: 'Delete Own Account',
  description:
    'Deletes your own user account. Requires the `Allow Users to Delete Own Account` setting enabled. Access this setting from **Manage** > **Workspace** > **Settings** > **Accounts**.\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|3.7.0            | Added `confirmRelinquish` to the payload.       |\n|0.67.0            | Added       |',
  operationId: 'post-api-v1-users.deleteOwnAccount',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              password: z
                .string()
                .openapi({
                  description: 'The password of user (encrypted in SHA256).',
                  example: '8f0e2f76e22b43e2855189877e7dc1e1e7d98c226c95db247cd1d547928334a9',
                }),
              confirmRelinquish: z
                .boolean()
                .default(false)
                .exactOptional()
                .openapi({
                  description: 'Deletes own account even if user is the last owner of a room.',
                }),
            })
            .openapi({ required: ['password'] }),
          examples: {
            'Example 1': {
              value: {
                password: '8f0e2f76e22b43e2855189877e7dc1e1e7d98c226c95db247cd1d547928334a9',
                confirmRelinquish: false,
              },
            },
          },
        },
      },
    },
  },
  responses: {
    200: TrueSuccessResponse,
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({ success: z.boolean().exactOptional(), error: z.string().exactOptional() })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: { success: false, error: 'Body parameter "password" is required.' },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1UsersCreateTokenRoute = createRoute({
  method: 'post',
  path: '/api/v1/users.createToken',
  tags: ['Users'],
  summary: 'Create Users Token',
  description:
    'As a workspace admin, you can create temporary authentication tokens for users. This is the same type of session authentication token a user gets via <a href="https://developer.rocket.chat/apidocs/login-with-username-and-password" target="_blank">login</a> and expires the same way.\n* To use this endpoint, you must set a secret with the `CREATE_TOKENS_FOR_USERS_SECRET` <a href="https://docs.rocket.chat/docs/deployment-environment-variables" target="_blank">environment variable</a> in your deployment configuration. This secret will be used to authorize all requests made to this endpoint.\n* For SaaS workspaces, <a href="https://desk.rocket.chat/portal/en/signin" target="_blank">contact</a> support to set this variable.\n* Permission required: `user-generate-access-token`. This permission is required only when you generate a token for another user; it is not required when you generate a token for your own account.\n* The maximum number of login tokens per user is 50. See this <a href=\'https://github.com/RocketChat/Rocket.Chat/pull/32216\' target=\'_blank\'>GitHub PR</a> for details.\n  \n### Changelog\n  | Version      | Description |\n  | ---------------- | ------------|\n  |9.0.0            | Returns `403` with `errorType: error-forbidden` instead of `400` when the request is refused.       |\n  |8.7.0             | Enforced the `user-generate-access-token` permission when generating a token for another user.|\n  |8.0.0             | Added `CREATE_TOKENS_FOR_USERS_SECRET` <a href="https://docs.rocket.chat/docs/deployment-environment-variables" target="_blank">environment variable</a> to define a shared secret that will be used to authorize this endpoint.|\n  |2.1.0            | Added ENV VAR to be able to use this endpoint (process.env.CREATE_TOKENS_FOR_USERS).       |\n  |0.56.0            | Added       |',
  operationId: 'post-api-v1-users.createToken',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              userId: z
                .string()
                .openapi({
                  description: 'The ID of the user you want to generate a token for.',
                  example: 'BsNr28znDkG8aeo7W',
                }),
              secret: z
                .string()
                .openapi({
                  description:
                    'The secret defined in the `CREATE_TOKENS_FOR_USERS_SECRET` <a href="https://docs.rocket.chat/docs/deployment-environment-variables" target="_blank">environment variable</a>. Without the valid secret, you can\'t access this endpoint.',
                  example: 'pass123',
                }),
            })
            .openapi({ required: ['userId', 'secret'] }),
          examples: {
            'Create token for a user': {
              value: { userId: 'BsNr28znDkG8aeo7W', secret: 'pass123' },
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .object({
                  userId: z.string().exactOptional(),
                  authToken: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Token created': {
              value: {
                data: {
                  userId: 'BsNr28znDkG8aeo7W',
                  authToken: '2jdk99wuSjXPO201XlAks9sjDjAhSJmskAKW301mSuj9Sk',
                },
                success: true,
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Invalid user': {
              value: {
                success: false,
                error:
                  'The required "userId" or "username" param was not provided [error-user-param-not-provided]',
                errorType: 'error-user-param-not-provided',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Invalid secret': {
              value: {
                success: false,
                error: 'Not authorized [error-not-authorized]',
                errorType: 'error-forbidden',
              },
            },
            'Missing permission': {
              value: {
                success: false,
                error: 'Not authorized [error-not-authorized]',
                errorType: 'error-forbidden',
              },
            },
          },
        },
      },
    },
  },
})

export const getApiV1UsersGetPreferencesRoute = createRoute({
  method: 'get',
  path: '/api/v1/users.getPreferences',
  tags: ['Users'],
  summary: "Get User's Preferences",
  description: 'Gets all the preferences of the authenticated user in the workspace.',
  operationId: 'get-api-v1-users.getPreferences',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              preferences: z
                .object({
                  newRoomNotification: z.string().exactOptional(),
                  newMessageNotification: z.string().exactOptional(),
                  muteFocusedConversations: z.boolean().exactOptional(),
                  useEmojis: z.boolean().exactOptional(),
                  convertAsciiEmoji: z.boolean().exactOptional(),
                  saveMobileBandwidth: z.boolean().exactOptional(),
                  collapseMediaByDefault: z.boolean().exactOptional(),
                  autoImageLoad: z.boolean().exactOptional(),
                  emailNotificationMode: z.string().exactOptional(),
                  roomsListExhibitionMode: z.string().exactOptional(),
                  unreadAlert: z.boolean().exactOptional(),
                  notificationsSoundVolume: z.int().exactOptional(),
                  desktopNotifications: z.string().exactOptional(),
                  mobileNotifications: z.string().exactOptional(),
                  enableAutoAway: z.boolean().exactOptional(),
                  highlights: z.array(z.looseObject({})).exactOptional(),
                  desktopNotificationDuration: z.int().exactOptional(),
                  viewMode: z.int().exactOptional(),
                  hideUsernames: z.boolean().exactOptional(),
                  hideRoles: z.boolean().exactOptional(),
                  hideAvatars: z.boolean().exactOptional(),
                  hideFlexTab: z.boolean().exactOptional(),
                  sendOnEnter: z.string().exactOptional(),
                  roomCounterSidebar: z.boolean().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                preferences: {
                  newRoomNotification: 'door',
                  newMessageNotification: 'chime',
                  muteFocusedConversations: true,
                  useEmojis: true,
                  convertAsciiEmoji: true,
                  saveMobileBandwidth: true,
                  collapseMediaByDefault: false,
                  autoImageLoad: true,
                  emailNotificationMode: 'all',
                  roomsListExhibitionMode: 'category',
                  unreadAlert: true,
                  notificationsSoundVolume: 100,
                  desktopNotifications: 'default',
                  mobileNotifications: 'default',
                  enableAutoAway: true,
                  highlights: [],
                  desktopNotificationDuration: 0,
                  viewMode: 0,
                  hideUsernames: false,
                  hideRoles: false,
                  hideAvatars: false,
                  hideFlexTab: false,
                  sendOnEnter: 'normal',
                  roomCounterSidebar: false,
                },
                success: true,
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1UsersSetPreferencesRoute = createRoute({
  method: 'post',
  path: '/api/v1/users.setPreferences',
  tags: ['Users'],
  summary: 'Set User Preferences',
  description:
    "Set preferences for your account. If you want to edit another user's preferences, you need the permission `edit-other-user-info`.\n\nUse `statusVisibilityDenied` to specify the usernames of people who cannot see your presence and status message. Send an empty array to clear the list. Status hiding takes effect only when the Premium **User status hiding** setting (`Accounts_StatusVisibility_Enabled`) is enabled. You can change only your own list; if `userId` identifies another user, this preference is ignored.\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|8.9.0            | Added the `sidebarCategories` preference. |\n|8.8.0            | Added the `statusVisibilityDenied` preference. |\n|8.6.0            | Added `utcOffset` property.       |\n|2.3.0            | Added `desktopNotificationRequireInteraction` property.       |",
  operationId: 'post-api-v1-users.setPreferences',
  request: {
    headers: z.object({ 'X-User-Id': UserIdParamsSchema, 'X-Auth-Token': AuthTokenParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              userId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The user ID whose preferences you want to change. If an ID is not provided, the preferences will be set for the user who is sending the request.',
                }),
              data: z
                .object({
                  language: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The preferred language for the user.',
                      example: 'en',
                    }),
                  newRoomNotification: z
                    .string()
                    .default('door')
                    .exactOptional()
                    .openapi({
                      example: 'chime',
                      description:
                        'Set the sound for new room notifications. The notification sounds are customizable, you can check the preferences in your workspace account for the list of options available.',
                    }),
                  newMessageNotification: z
                    .string()
                    .default('chime')
                    .exactOptional()
                    .openapi({
                      example: 'chime',
                      description:
                        'New message notification sound. The notification sounds are customizable, you can check the preferences in your workspace account for the list of options available.',
                    }),
                  muteFocusedConversations: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'When set to true, open and active rooms will not create notification sounds.',
                    }),
                  clockMode: z
                    .int()
                    .exactOptional()
                    .openapi({
                      description:
                        'The valid display formats for the clock. You can enter the values 0, 1, or 2.\n* `0`: System default\n* `1`: 12-hour clock\n* `2`: 24-hour clock',
                    }),
                  useEmojis: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'A boolean value that indicates whether the user has enabled the option to use emojis.',
                    }),
                  convertAsciiEmoji: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'A boolean value that indicates whether the user has enabled the option to convert ASCII emojis.',
                    }),
                  saveMobileBandwidth: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'A boolean value that indicates whether the user has enabled the option to save mobile bandwidth.',
                    }),
                  collapseMediaByDefault: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'A boolean value that indicates whether the user has enabled the option to collapse media by default.',
                    }),
                  autoImageLoad: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'A boolean value indicates whether the user has enabled the option to load images automatically.',
                    }),
                  emailNotificationMode: z
                    .string()
                    .exactOptional()
                    .openapi({
                      example: 'mentions',
                      description:
                        'The preferred mode for email notifications. The options are:\n  * `all`: Get desktop notifications for all messages.\n  * `mentions`: Get the notifications only for mentions.\n  * `nothing`: Get no desktop notifications.',
                    }),
                  unreadAlert: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'A boolean value indicates whether the user has enabled the option.',
                    }),
                  notificationsSoundVolume: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'The sound volume for notifications.' }),
                  desktopNotifications: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The type of desktop notifications.\n* `all`: Get desktop notifications for all messages.\n* `mentions`: Get the notifications only for mentions.\n* `nothing`: Get no desktop notifications.',
                      example: 'mentions',
                    }),
                  pushNotifications: z
                    .string()
                    .exactOptional()
                    .openapi({
                      example: 'mentions',
                      description:
                        'The type of push notifications.\n* `all`: Get push notifications for all messages.\n* `mentions`: Get the notifications only for mentions.\n* `nothing`: Get no push notifications.',
                    }),
                  enableAutoAway: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'A boolean value that indicates whether the user has enabled the option to update the status as away after a certain amount of idle time.',
                    }),
                  highlights: z
                    .array(z.string().openapi({ example: '["deploy", "docker"]' }))
                    .exactOptional()
                    .openapi({
                      description:
                        'The message highlights section. You will be notified when someone mentions a word or phrase that you add here. Highlight words are not case-sensitive.',
                    }),
                  messageViewMode: z
                    .int()
                    .exactOptional()
                    .openapi({
                      description:
                        'The preferred view mode for the messages i. The available options are:\n  * `0` - Normal\n  * `1` - Cozy\n  * `2` - Compact',
                    }),
                  hideUsernames: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'A boolean value that indicates whether the user has enabled the option to hide usernames.',
                    }),
                  hideRoles: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'A boolean value that indicates whether the user has enabled the option to hide roles.',
                    }),
                  displayAvatars: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'A boolean value that indicates whether the user has enabled the option to display user avatars.',
                    }),
                  hideFlexTab: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'A boolean value that indicates whether the user has enabled the option to automatically close the right sidebar in rooms when you click outside them.',
                    }),
                  sendOnEnter: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'Set how you want the **Enter** key to behave when sending messages.\n\n* `normal` - Send messages with the **Enter** key.\n* `alternative` - Send messages with **Enter** + **Ctrl/Alt/Shift/Cmd**.\n* `desktop` - Send messages with **Enter** only on the desktop.',
                    }),
                  idleTimeLimit: z
                    .int()
                    .exactOptional()
                    .openapi({
                      description:
                        'The time limit that is to be considered as idle time. After this time, the user status changes to `away`.',
                      example: 300,
                    }),
                  sidebarShowFavorites: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'A boolean value that indicates whether the user has enabled the option to show favorites on the sidebar.',
                    }),
                  sidebarShowUnread: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'A boolean value that indicates whether the user has enabled the option to show unread messages in the sidebar.',
                    }),
                  statusVisibilityDenied: z
                    .array(z.string())
                    .exactOptional()
                    .openapi({
                      description:
                        'The usernames of users who cannot see your presence and status message. Send an empty array to clear the list.',
                    }),
                  sidebarSortby: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'To sort the messages in the sidebar alphabetically or by activity. The values can be:\n  * `activity`\n  * `alphabetical`',
                    }),
                  sidebarViewMode: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The view mode of the sidebar. The values can be:\n  * `extended`\n  * `medium`\n  * `condensed`',
                    }),
                  sidebarDisplayAvatar: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'A boolean value that indicates whether the user has enabled the option to display avatars in the sidebar.',
                    }),
                  sidebarGroupByType: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'A boolean value that indicates whether the user has enabled the option to show the grouped values in the sidebar.',
                    }),
                  sidebarCategories: z
                    .array(
                      z
                        .strictObject({
                          _id: z
                            .string()
                            .openapi({
                              description:
                                'The category ID. For system groups, this is the group key, for example `Favorites`, `Channels`, `Direct_Messages`, `Discussions`, or `Teams`.',
                            }),
                          name: z
                            .string()
                            .min(1)
                            .max(30)
                            .openapi({ description: 'The category name.' }),
                          default: z
                            .boolean()
                            .exactOptional()
                            .openapi({
                              description:
                                'Whether the entry is a system group rather than a custom category.',
                            }),
                          showUnreads: z
                            .boolean()
                            .exactOptional()
                            .openapi({
                              description: 'Whether to show unread rooms in the category.',
                            }),
                          keepUnreadsOnTop: z
                            .boolean()
                            .exactOptional()
                            .openapi({
                              description:
                                'Whether to keep unread rooms at the top of the category.',
                            }),
                        })
                        .openapi({ required: ['_id', 'name'] }),
                    )
                    .exactOptional()
                    .openapi({
                      description:
                        'The full, ordered list of sidebar categories for the user. The array replaces the stored list, so include every category you want to keep. Each entry is either a system group (such as `Favorites` or `Channels`) marked with `default: true`, or a custom category created by the user.\n\nCustom category names are trimmed and must contain 1 to 30 characters, and `_id` values must be unique in the array. Otherwise, the request fails with `error-invalid-param`. Custom categories are available in Commercial, Government, and Defense plans.',
                      example: [
                        { _id: 'Favorites', name: 'Favorites', default: true },
                        {
                          _id: 'qT7bXk2mZ9wLpR4sD',
                          name: 'Project Apollo',
                          showUnreads: true,
                          keepUnreadsOnTop: false,
                        },
                        { _id: 'Channels', name: 'Channels', default: true },
                      ],
                    }),
                  dontAskAgainList: z
                    .array(
                      z
                        .object({
                          action: z.string().exactOptional(),
                          label: z.string().exactOptional(),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional()
                    .openapi({
                      description:
                        'This field stores all the "warnings" a user opted not to be displayed again. An example where this works is when hiding a room.\n"dontAskAgainList\\":[{\\"action\\":\\"hideRoom\\",\\"label\\":\\"Hide\\"}]"',
                    }),
                  notifyCalendarEvents: z
                    .boolean()
                    .default(false)
                    .exactOptional()
                    .openapi({
                      description:
                        'If you are using Outlook Calendar in your workspace, you can enable or disable calendar event notifications using this parameter.',
                    }),
                  themeAppearence: z
                    .string()
                    .default('auto')
                    .exactOptional()
                    .openapi({
                      example: 'light',
                      description:
                        'Set your preferrred workspace theme. The options are:\r\n* `light`\r\n* `dark`\r\n* `auto`\r\n* `high-contrast`',
                    }),
                  masterVolume: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'Control the volume for all sounds coming from your workspace.',
                    }),
                  alsoSendThreadToChannel: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'When replying to a thread, select how your replies should be sent to the room:\r\n* `never`: Thread replies are not sent to the channel.\r\n* `always`: Thread replies are sent to the channel.\r\n* `default`: Defaults to the workspace settings set by the admin.',
                    }),
                  desktopNotificationRequireInteraction: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'When set to true, notifications will remain in the notification panel until they are visited or closed.',
                    }),
                  showThreadsInMainChannel: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        "When set to true, all replies under a thread will also be displayed directly in the main room. When disabled, they're displayed based on the sender's choice.",
                    }),
                  fontSize: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'Set the font size. The options are:\r\n* `small`\r\n* `medium`\r\n* `large`',
                    }),
                  receiveLoginDetectionEmail: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'Set this option to true to get an email notification whenever a login is made to your account.',
                    }),
                  omnichannelTranscriptPDF: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'Set to true to always export the transcript as PDF at the end of Omnichannel conversations.',
                    }),
                  omnichannelTranscriptEmail: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'Set to true to always send the transcript to contacts at the end of conversations.',
                    }),
                  omnichannelHideConversationAfterClosing: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'Set to true to redirect agents to the home page after closing a conversation.',
                    }),
                  enableMobileRinging: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'If you are using the Rocket.Chat Voice feature, you can set this parameter to true for mobile call notifications.',
                    }),
                  utcOffset: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description:
                        "The user's UTC offset in hours. Used to localize times such as notification schedules.",
                      example: -3,
                    }),
                })
                .openapi({
                  description: 'The object with the following preference details.',
                  required: [],
                }),
            })
            .openapi({ required: ['data'] }),
          examples: {
            Example: {
              value: {
                userId: 'rbAXPnMktTFbNpwtJ',
                data: {
                  language: 'en',
                  newRoomNotification: 'door',
                  newMessageNotification: 'chime',
                  muteFocusedConversations: true,
                  clockMode: 0,
                  useEmojis: true,
                  convertAsciiEmoji: true,
                  saveMobileBandwidth: true,
                  collapseMediaByDefault: true,
                  autoImageLoad: true,
                  emailNotificationMode: 'mentions',
                  unreadAlert: true,
                  notificationsSoundVolume: 0,
                  desktopNotifications: 'mentions',
                  pushNotifications: 'mentions',
                  enableAutoAway: true,
                  highlights: ['["deploy", "docker"]'],
                  messageViewMode: 0,
                  hideUsernames: true,
                  hideRoles: true,
                  displayAvatars: true,
                  hideFlexTab: true,
                  sendOnEnter: 'string',
                  idleTimeLimit: 300,
                  sidebarShowFavorites: true,
                  sidebarShowUnread: true,
                  statusVisibilityDenied: ['bob', 'rocket.cat'],
                  sidebarSortby: 'string',
                  sidebarViewMode: 'string',
                  sidebarDisplayAvatar: true,
                  sidebarGroupByType: true,
                  sidebarCategories: [
                    { _id: 'Favorites', name: 'Favorites', default: true },
                    {
                      _id: 'qT7bXk2mZ9wLpR4sD',
                      name: 'Project Apollo',
                      showUnreads: true,
                      keepUnreadsOnTop: false,
                    },
                    { _id: 'Channels', name: 'Channels', default: true },
                  ],
                  dontAskAgainList: [{}],
                  notifyCalendarEvents: false,
                  themeAppearence: 'auto',
                },
              },
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              user: z
                .object({
                  _id: z.string().exactOptional(),
                  settings: z
                    .object({
                      preferences: z
                        .object({
                          enableAutoAway: z.boolean().exactOptional(),
                          idleTimeLimit: z.int().exactOptional(),
                          desktopNotificationRequireInteraction: z.boolean().exactOptional(),
                          desktopNotifications: z.string().exactOptional(),
                          pushNotifications: z.string().exactOptional(),
                          unreadAlert: z.boolean().exactOptional(),
                          useEmojis: z.boolean().exactOptional(),
                          convertAsciiEmoji: z.boolean().exactOptional(),
                          autoImageLoad: z.boolean().exactOptional(),
                          saveMobileBandwidth: z.boolean().exactOptional(),
                          collapseMediaByDefault: z.boolean().exactOptional(),
                          hideUsernames: z.boolean().exactOptional(),
                          hideRoles: z.boolean().exactOptional(),
                          hideFlexTab: z.boolean().exactOptional(),
                          displayAvatars: z.boolean().exactOptional(),
                          sidebarGroupByType: z.boolean().exactOptional(),
                          sidebarCategories: z
                            .array(
                              z
                                .object({
                                  _id: z.string().exactOptional(),
                                  name: z.string().exactOptional(),
                                  default: z.boolean().exactOptional(),
                                  showUnreads: z.boolean().exactOptional(),
                                  keepUnreadsOnTop: z.boolean().exactOptional(),
                                })
                                .openapi({ required: [] }),
                            )
                            .exactOptional()
                            .openapi({
                              description:
                                'The sidebar categories saved for the user, including system groups and custom categories, in display order.',
                            }),
                          sidebarViewMode: z.string().exactOptional(),
                          sidebarDisplayAvatar: z.boolean().exactOptional(),
                          sidebarShowUnread: z.boolean().exactOptional(),
                          sidebarSortby: z.string().exactOptional(),
                          statusVisibilityDenied: z
                            .array(z.string())
                            .exactOptional()
                            .openapi({
                              description:
                                "The usernames of users who cannot see the authenticated user's presence and status message. Returned only to the authenticated user when the feature is enabled and the list is not empty.",
                            }),
                          showMessageInMainThread: z.boolean().exactOptional(),
                          sidebarShowFavorites: z.boolean().exactOptional(),
                          sendOnEnter: z.string().exactOptional(),
                          messageViewMode: z.int().exactOptional(),
                          emailNotificationMode: z.string().exactOptional(),
                          newRoomNotification: z.string().exactOptional(),
                          newMessageNotification: z.string().exactOptional(),
                          muteFocusedConversations: z.boolean().exactOptional(),
                          notificationsSoundVolume: z.int().exactOptional(),
                          enableMessageParserEarlyAdoption: z.boolean().exactOptional(),
                          mobileNotifications: z.string().exactOptional(),
                          desktopNotificationDuration: z.int().exactOptional(),
                          dontAskAgainList: z.array(z.looseObject({})).exactOptional(),
                          highlights: z.array(z.looseObject({})).exactOptional(),
                          language: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                user: {
                  _id: 'rbAXPnMktTFbNpwtJ',
                  settings: {
                    preferences: { statusVisibilityDenied: ['bob', 'rocket.cat'], language: 'en' },
                  },
                },
                success: true,
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Invalid Parameter': {
              value: {
                success: false,
                error: "must have required property 'data' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1UsersForgotPasswordRoute = createRoute({
  method: 'post',
  path: '/api/v1/users.forgotPassword',
  tags: ['Users'],
  summary: 'Forgot Password',
  description:
    'Send an email to reset your password. Ensure that you have completed the configuration of the email; otherwise, your users will not receive the mail normally. Access this from **Manage** > **Workspace** > **Settings** > **Email**.\n\nTo use this endpoint, the `PasswordReset` setting must be enabled in **Settings** > **Accounts** > **Registration** > **Password Reset**.\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|0.64.0            | Added       |',
  operationId: 'post-api-v1-users.forgotPassword',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              email: z
                .string()
                .openapi({
                  description: 'The email to send password reset link.',
                  example: 'email@rocket.cat',
                }),
            })
            .openapi({ required: ['email'] }),
          examples: { 'Example 1': { value: { email: 'email@rocket.cat' } } },
        },
      },
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z.object({ status: z.string().exactOptional() }).openapi({ required: [] }),
          examples: { 'Success Example': { value: { status: 'success' } } },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({ success: z.boolean().exactOptional(), error: z.string().exactOptional() })
            .openapi({ required: [] }),
          examples: {
            'Example 1': { value: { success: false, error: "The 'email' param is required" } },
          },
        },
      },
    },
  },
})

export const getApiV1UsersGetUsernameSuggestionRoute = createRoute({
  method: 'get',
  path: '/api/v1/users.getUsernameSuggestion',
  tags: ['Users'],
  summary: 'Get Username Suggestion',
  description:
    'Get a username suggestion for the authenticated user.\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|0.65.0            | Added       |',
  operationId: 'get-api-v1-users.getUsernameSuggestion',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({ result: z.string().exactOptional(), success: z.boolean().exactOptional() })
            .openapi({ required: [] }),
          examples: { 'Example 1': { value: { result: 'rocket.mic', success: true } } },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const getApiV1UsersGetAvatarSuggestionRoute = createRoute({
  method: 'get',
  path: '/api/v1/users.getAvatarSuggestion',
  tags: ['Users'],
  summary: 'Get Avatar Suggestion',
  description:
    'Use this endpoint to get avatar suggestions for the user from their connected OAuth services. The response is empty if no suggestions are found.\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n|9.0.0            | Removed Gravatar suggestions.       |',
  operationId: 'get-api-v1-users.getAvatarSuggestion',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              suggestions: z
                .object({
                  google: z
                    .object({
                      service: z.string().exactOptional(),
                      url: z.string().exactOptional(),
                      blob: z.string().exactOptional(),
                      contentType: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                suggestions: {
                  google: {
                    service: 'google',
                    url: 'https://lh3.googleusercontent.com/a/example',
                    blob: 'data:image/png;base64,...',
                    contentType: 'image/png',
                  },
                },
                success: true,
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const getApiV1UsersCheckUsernameAvailabilityRoute = createRoute({
  method: 'get',
  path: '/api/v1/users.checkUsernameAvailability',
  tags: ['Users'],
  summary: 'Check Username Availability',
  description: 'Check if the username is available or used by another user',
  operationId: 'get-api-v1-users.checkUsernameAvailability',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      username: z
        .string()
        .openapi({
          param: {
            name: 'username',
            in: 'query',
            required: true,
            description: 'The username to check for availability',
            schema: { type: 'string', example: 'johnDoe' },
          },
          example: 'johnDoe',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({ result: z.boolean().exactOptional(), success: z.boolean().exactOptional() })
            .openapi({ required: [] }),
          examples: {
            'Example 1': { value: { result: true, success: true } },
            'Example 2': { value: { result: false, success: true } },
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
              details: z
                .object({ method: z.string().exactOptional(), field: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                success: false,
                error: "must have required property 'username' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
            'Example 2': {
              value: {
                success: false,
                error: "system is blocked and can't be used! [error-blocked-username]",
                errorType: 'error-blocked-username',
                details: { method: 'checkUsernameAvailability', field: 'system' },
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1UsersGeneratePersonalAccessTokenRoute = createRoute({
  method: 'post',
  path: '/api/v1/users.generatePersonalAccessToken',
  tags: ['Users'],
  summary: 'Generate Personal Access Token',
  description:
    'Permission required: `create-personal-access-tokens`. \n\n* This endpoint requires <a href="https://developer.rocket.chat/apidocs/introduction-to-two-factor-authentication" target="_blank">two-factor authentication</a>.\n\n* Note that the generated access tokens are irrecoverable, so storing them safely is essential. If a token is lost or forgotten, it can be regenerated or deleted.\n* When making calls to the API that mandate authentication, include the generated token in the `X-Auth-Token` header and your user ID in the `X-User-Id` header to authenticate the requests.\nVisit the <a href="https://docs.rocket.chat/docs/manage-personal-access-tokens" target="_blank"> Personal Access Token user guide</a> for more details.\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|9.0.0            | Returns `403` with `errorType: error-forbidden` instead of `400` when the request is refused.       |\n|3.1.0            | Added `bypassTwoFactor` param       |\n|0.69.0            | Added       |',
  operationId: 'post-api-v1-users.generatePersonalAccessToken',
  request: {
    headers: z.object({
      'X-Auth-Token': AuthTokenParamsSchema,
      'X-User-Id': UserIdParamsSchema,
      'x-2fa-code': X_2faCodeParamsSchema,
      'x-2fa-method': X_2faMethodParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              tokenName: z.string().openapi({ description: 'The name of the token.' }),
              bypassTwoFactor: z
                .boolean()
                .default(false)
                .exactOptional()
                .openapi({
                  description: 'If 2FA requirement should be ignored when using this token.',
                }),
            })
            .openapi({ required: ['tokenName'] }),
          examples: {
            'Example 1': { value: { tokenName: 'mypersonaltoken', bypassTwoFactor: false } },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({ token: z.string().exactOptional(), success: z.boolean().exactOptional() })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: { token: '2jdk99wuSjXPO201XlAks9sjDjAhSJmskAKW301mSuj9Sk', success: true },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
              details: z
                .object({
                  method: z.string().exactOptional(),
                  codeGenerated: z.boolean().exactOptional(),
                  availableMethods: z.array(z.looseObject({})).exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                success: false,
                error: 'TOTP Required [totp-required]',
                errorType: 'totp-required',
                details: { method: 'password', codeGenerated: false, availableMethods: [] },
              },
            },
            'Example 2': { value: { success: false, error: "The 'tokenName' param is required" } },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 3': {
              value: {
                success: false,
                error: 'Not Authorized [not-authorized]',
                errorType: 'error-forbidden',
              },
            },
          },
        },
      },
    },
  },
})

export const postApiV1UsersRegeneratePersonalAccessTokenRoute = createRoute({
  method: 'post',
  path: '/api/v1/users.regeneratePersonalAccessToken',
  tags: ['Users'],
  summary: 'Regenerate Personal Access Token',
  description:
    'Permission required: `create-personal-access-tokens`.\nThis endpoint requires 2FA.\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|9.0.0            | Returns `403` with `errorType: error-forbidden` instead of `400` when the request is refused.       |\n|0.69.0            | Added       |',
  operationId: 'post-api-v1-users.regeneratePersonalAccessToken',
  request: {
    headers: z.object({
      'X-Auth-Token': AuthTokenParamsSchema,
      'X-User-Id': UserIdParamsSchema,
      'x-2fa-code': X_2faCodeParamsSchema,
      'x-2fa-method': X_2faMethodParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ tokenName: z.string().openapi({ description: 'The name of the token.' }) })
            .openapi({ required: ['tokenName'] }),
          examples: { 'Example 1': { value: { tokenName: 'mypersonaltoken' } } },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({ token: z.string().exactOptional(), success: z.boolean().exactOptional() })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: { token: '2jdk99wuSjXPO201XlAks9sjDjAhSJmskAKW301mSuj9Sk', success: true },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
              details: z
                .object({
                  method: z.string().exactOptional(),
                  codeGenerated: z.boolean().exactOptional(),
                  availableMethods: z.array(z.looseObject({})).exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                success: false,
                error: 'TOTP Required [totp-required]',
                errorType: 'totp-required',
                details: { method: 'password', codeGenerated: false, availableMethods: [] },
              },
            },
            'Example 2': { value: { success: false, error: "The 'tokenName' param is required" } },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 3': {
              value: {
                success: false,
                error: 'Not Authorized [not-authorized]',
                errorType: 'error-forbidden',
              },
            },
          },
        },
      },
    },
  },
})

export const getApiV1UsersGetPersonalAccessTokensRoute = createRoute({
  method: 'get',
  path: '/api/v1/users.getPersonalAccessTokens',
  tags: ['Users'],
  summary: 'Get Personal Access Tokens',
  description:
    'Permission required: `create-personal-access-tokens`\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|9.0.0            | Returns `403` with `errorType: error-forbidden` instead of `400` when the request is refused.       |\n|0.69.0            | Added       |',
  operationId: 'get-api-v1-users.getPersonalAccessTokens',
  request: {
    headers: z.object({ 'X-User-Id': UserIdParamsSchema, 'X-Auth-Token': AuthTokenParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              tokens: z
                .array(
                  z
                    .object({
                      name: z.string().exactOptional(),
                      createdAt: z.string().exactOptional(),
                      lastTokenPart: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                tokens: [
                  {
                    name: 'myToken',
                    createdAt: '2018-08-01T17:17:48.068Z',
                    lastTokenPart: 'R8Agh3',
                  },
                ],
                success: true,
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                success: false,
                error: 'User does not have the permissions required for this action',
                errorType: 'error-forbidden',
              },
            },
          },
        },
      },
    },
  },
})

export const postApiV1UsersRemovePersonalAccessTokenRoute = createRoute({
  method: 'post',
  path: '/api/v1/users.removePersonalAccessToken',
  tags: ['Users'],
  summary: 'Remove Personal Access Token',
  description:
    'This endpoint requires 2FA and the `create-personal-access-tokens` permission.\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|0.69.0            | Added       |',
  operationId: 'post-api-v1-users.removePersonalAccessToken',
  request: {
    headers: z.object({
      'X-Auth-Token': AuthTokenParamsSchema,
      'X-User-Id': UserIdParamsSchema,
      'x-2fa-code': X_2faCodeParamsSchema,
      'x-2fa-method': X_2faMethodParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ tokenName: z.string().openapi({ description: 'The name of the token.' }) })
            .openapi({ required: ['tokenName'] }),
          examples: { 'Example 1': { value: { tokenName: 'mytoken' } } },
        },
      },
    },
  },
  responses: {
    200: TrueSuccessResponse,
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
              details: z
                .object({
                  method: z.string().exactOptional(),
                  codeGenerated: z.boolean().exactOptional(),
                  availableMethods: z.array(z.looseObject({})).exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                success: false,
                error: 'TOTP Required [totp-required]',
                errorType: 'totp-required',
                details: { method: 'password', codeGenerated: false, availableMethods: [] },
              },
            },
            'Example 2': { value: { success: false, error: "The 'tokenName' param is required" } },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const getApiV1UsersRequestDataDownloadRoute = createRoute({
  method: 'get',
  path: '/api/v1/users.requestDataDownload',
  tags: ['Users'],
  summary: 'Request Data Download',
  description:
    "Request download of your personal data using this endpoint. The <a href='https://docs.rocket.chat/v1/docs/user-data-download' target='_blank'>User Data Download</a> feature must be configured in the workspace by the admin. The exported file is available in the configured directory.\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|1.2.0            | Added as `users.requestDataDownload`       |",
  operationId: 'get-api-v1-users.requestDataDownload',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      fullExport: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'boolean', default: false },
            in: 'query',
            name: 'fullExport',
            description: 'Whether you want a full export or not. By default, the value is false.',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              requested: z.boolean().exactOptional(),
              exportOperation: z
                .object({
                  _id: z.string().exactOptional(),
                  createdAt: z.string().exactOptional(),
                  userId: z.string().exactOptional(),
                  roomList: z
                    .array(
                      z
                        .object({
                          roomId: z.string().exactOptional(),
                          roomName: z.string().exactOptional(),
                          userId: z.string().nullable().exactOptional(),
                          exportedCount: z.int().exactOptional(),
                          status: z.string().exactOptional(),
                          targetFile: z.string().exactOptional(),
                          type: z.string().exactOptional(),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                  status: z.string().exactOptional(),
                  exportPath: z.string().exactOptional(),
                  assetsPath: z.string().exactOptional(),
                  fileList: z.array(z.looseObject({})).exactOptional(),
                  generatedFile: z.string().exactOptional(),
                  fullExport: z.boolean().exactOptional(),
                  _updatedAt: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                requested: false,
                exportOperation: {
                  _id: 'uDSuaW7vGd9B7j8qD',
                  createdAt: '2019-06-07T23:02:13.359Z',
                  userId: 'hjwGZafNqExtFNmN7',
                  roomList: [
                    {
                      roomId: 'GENERAL',
                      roomName: 'general',
                      userId: null,
                      exportedCount: 8,
                      status: 'completed',
                      targetFile: 'general.html',
                      type: 'c',
                    },
                  ],
                  status: 'uploading',
                  exportPath: '/tmp/userData/hjwGZafNqExtFNmN7/partial',
                  assetsPath: '/tmp/userData/hjwGZafNqExtFNmN7/partial/assets',
                  fileList: [],
                  generatedFile: '/tmp/zipFiles/hjwGZafNqExtFNmN7.zip',
                  fullExport: false,
                  _updatedAt: '2019-06-07T23:15:00.326Z',
                },
                success: true,
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1UsersLogoutOtherClientsRoute = createRoute({
  method: 'post',
  path: '/api/v1/users.logoutOtherClients',
  tags: ['Users'],
  summary: 'Logout Other Clients',
  description:
    'Logs out of user sessions in other clients while keeping the current session active. The response the current token and its expiration date. Requires the `LoginExpiration` settings enabled in **Accounts** > **Login Expiration in Days** which defines how long a login token remains valid before expiration.\n',
  operationId: 'post-api-v1-users.logoutOtherClients',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              token: z.string().exactOptional(),
              tokenExpires: z.string().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                token: 'SnS70r0VkngGFrSbxVK-pdwFMEzhefcjQgdnXaPeAaq',
                tokenExpires: '2021-12-27T14:33:09.851Z',
                success: true,
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const getApiV1UsersAutocompleteRoute = createRoute({
  method: 'get',
  path: '/api/v1/users.autocomplete',
  tags: ['Users'],
  summary: 'Autocomplete User',
  description: 'List the users whose names match a given pattern.',
  operationId: 'get-api-v1-users.autocomplete',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      selector: z
        .looseObject({})
        .openapi({
          param: {
            schema: { type: 'object' },
            example: {
              exceptions: ['john.doe'],
              conditions: { status: 'offline' },
              term: 'user',
              $or: [{ type: 'user' }, { roles: ['bot'] }],
            },
            in: 'query',
            name: 'selector',
            required: true,
            description: 'Filter the response with the parameters.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              items: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      username: z.string().exactOptional(),
                      status: z.string().exactOptional(),
                      name: z.string().exactOptional(),
                      nickname: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                items: [
                  {
                    _id: '6esQ6cpqSQYvoLTvC',
                    username: 'Aaron.altamirano',
                    status: 'offline',
                    name: 'Aaron Altamirano ',
                    nickname: 'aaron.altamirano@rocket.chat',
                  },
                  {
                    _id: 'AySWYsyzToxy3239z',
                    username: 'Balazs.Nemethi',
                    status: 'offline',
                    name: 'Balázs Némethi',
                  },
                  {
                    _id: 'gxcJTYapi5mPxuAme',
                    username: 'Bruno.Solis',
                    status: 'offline',
                    name: 'Bruno Solis',
                    avatarETag: 'ZAHMxLQ6bW426Knwm',
                  },
                  {
                    _id: 'kvqbntLso8y2dEx7C',
                    username: 'Ivan.Belousov',
                    status: 'offline',
                    name: 'Ivan',
                  },
                  {
                    _id: 'AkFjhgJFHAhNK3e6o',
                    status: 'offline',
                    name: 'Karina Monarkh',
                    username: 'Karina',
                  },
                  {
                    _id: 'M3ajjGeyg8SfKXopd',
                    username: 'Rucks_guest2',
                    status: 'offline',
                    name: 'Rucks_guest2',
                    nickname: 'anonymous3',
                  },
                ],
                success: true,
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                success: false,
                error: "must have required property 'selector' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1UsersRemoveOtherTokensRoute = createRoute({
  method: 'post',
  path: '/api/v1/users.removeOtherTokens',
  tags: ['Users'],
  summary: 'Remove Other Tokens',
  description:
    "Remove user's login tokens. This endpoint is primarily used when a user changes their password and they need to log in to the workspace again on other devices.\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|3.1.0            | Added       |",
  operationId: 'post-api-v1-users.removeOtherTokens',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
  },
  responses: { 200: TrueSuccessResponse, 401: AuthorizationErrorResponse },
})

export const postApiV1UsersResetE2EKeyRoute = createRoute({
  method: 'post',
  path: '/api/v1/users.resetE2EKey',
  tags: ['Users'],
  summary: 'Reset Users E2E Key',
  description:
    '<a href="https://docs.rocket.chat/docs/manage-your-account-settings#endtoend-encryption" target="_blank">Reset the E2E key</a> for your account or another user in the workspace.\n* To reset other users\' E2EE key, you need the `edit-other-user-e2ee` permission.\n* This endpoint requires 2FA, if 2FA is enabled and configured on your workspace.\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|9.0.0            | Returns `403` with `errorType: error-forbidden` instead of `400` when the request is refused.       |\n|3.6.0            | Added       |',
  operationId: 'post-api-v1-users.resetE2EKey',
  request: {
    headers: z.object({
      'X-Auth-Token': AuthTokenParamsSchema,
      'X-User-Id': UserIdParamsSchema,
      'x-2fa-code': X_2faCodeParamsSchema,
      'x-2fa-method': X_2faMethodParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              userId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "The `userId` of the user whose e2e key you want to reset. You can also use the `username` parameter. If you don't enter a value, the sender's E2E value is reset.",
                }),
            })
            .openapi({ required: [] }),
          examples: { 'Example 1': { value: { userId: 'GonjPyg3gB3Z9ur9s' } } },
        },
      },
    },
  },
  responses: {
    200: TrueSuccessResponse,
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
              details: z
                .object({
                  method: z.string().exactOptional(),
                  codeGenerated: z.boolean().exactOptional(),
                  availableMethods: z.array(z.looseObject({})).exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                success: false,
                error: 'TOTP Required [totp-required]',
                errorType: 'totp-required',
                details: { method: 'password', codeGenerated: false, availableMethods: [] },
              },
            },
            'Example 3': {
              value: {
                success: false,
                error:
                  'The required "userId" or "username" param provided does not match any users [error-invalid-user]',
                errorType: 'error-invalid-user',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 2': {
              value: {
                success: false,
                error: 'Not allowed [error-not-allowed]',
                errorType: 'error-forbidden',
              },
            },
          },
        },
      },
    },
  },
})

export const postApiV1UsersResetTOTPRoute = createRoute({
  method: 'post',
  path: '/api/v1/users.resetTOTP',
  tags: ['Users'],
  summary: 'Reset Users TOTP',
  description:
    'Reset 2FA via TOTP for a user in the workspace. Make sure that the `Enable Two Factor Authentication` setting is enabled under **Manage** > **Workspace** > **Settings** > **Accounts** > **Two Factor Authentication**.\n* Permission required: `edit-other-user-totp`.\n* It requires two-factor authentication, if 2FA is enabled and configured in your workspace.\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|9.0.0            | Returns `403` with `errorType: error-forbidden` instead of `400` when the request is refused.       |\n|3.6.0            | Added       |',
  operationId: 'post-api-v1-users.resetTOTP',
  request: {
    headers: z.object({
      'X-Auth-Token': AuthTokenParamsSchema,
      'X-User-Id': UserIdParamsSchema,
      'x-2fa-code': X_2faCodeParamsSchema,
      'x-2fa-method': X_2faMethodParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              userId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "The `userId` of the user whose TOTP you want to reset. You can also use the username. If you do not enter a value, the sender's TOTP is reset.",
                }),
            })
            .openapi({ required: [] }),
          examples: { 'Example 1': { value: { userId: 'GonjPyg3gB3Z9ur9s' } } },
        },
      },
    },
  },
  responses: {
    200: TrueSuccessResponse,
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
              details: z
                .object({
                  method: z.string().exactOptional(),
                  codeGenerated: z.boolean().exactOptional(),
                  availableMethods: z.array(z.looseObject({})).exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                success: false,
                error: 'TOTP Required [totp-required]',
                errorType: 'totp-required',
                details: { method: 'password', codeGenerated: false, availableMethods: [] },
              },
            },
            'Example 3': {
              value: {
                success: false,
                error:
                  'The required "userId" or "username" param provided does not match any users [error-invalid-user]',
                errorType: 'error-invalid-user',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 2': {
              value: {
                success: false,
                error: 'Not allowed [error-not-allowed]',
                errorType: 'error-forbidden',
              },
            },
          },
        },
      },
    },
  },
})

export const getApiV1UsersListTeamsRoute = createRoute({
  method: 'get',
  path: '/api/v1/users.listTeams',
  tags: ['Users'],
  summary: "List User's Teams",
  description:
    'Get the list of teams that a specific user is a member of. The teams returned by the endpoint depend on your permissions. To view all teams, you need the `view-all-teams` permission.',
  operationId: 'get-api-v1-users.listTeams',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            in: 'query',
            description: 'The `userId` of the user.',
            required: true,
            schema: { type: 'string' },
            example: 'rbAXPnMktTFbNpwtJ',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              teams: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      name: z.string().exactOptional(),
                      type: z.int().exactOptional(),
                      createdAt: z.string().exactOptional(),
                      createdBy: z
                        .object({
                          _id: z.string().exactOptional(),
                          username: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      _updatedAt: z.string().exactOptional(),
                      roomId: z.string().exactOptional(),
                      isOwner: z.boolean().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                teams: [
                  {
                    _id: '612b8ae982d286c3',
                    name: 'documentation-team',
                    type: 0,
                    createdAt: '2021-08-29T13:26:01.750Z',
                    createdBy: { _id: 'JxemcN9PDCdfzJe', username: 'renato.b' },
                    _updatedAt: '2021-08-29T13:26:01.762Z',
                    roomId: 'GwktYAajqw4RiWiBK',
                    isOwner: true,
                  },
                ],
                success: true,
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                success: false,
                error: "must have required property 'userId' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1ModerationReportUserRoute = createRoute({
  method: 'post',
  path: '/api/v1/moderation.reportUser',
  tags: ['Users'],
  summary: 'Report User',
  description:
    'Report a user for offensive messages in the workspace.\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|6.4.0            | Added       |',
  operationId: 'post-api-v1-moderation.reportUser',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              userId: z
                .string()
                .openapi({
                  description: 'The ID of the user to be reported.',
                  example: 'ByehQjC44FwMeiLbX',
                }),
              description: z
                .string()
                .openapi({ description: 'The reason for reporting the user.', example: 'test' }),
            })
            .openapi({ required: ['userId', 'description'] }),
          examples: {
            'Example 1': { value: { userId: 'ByehQjC44FwMeiLbX', description: 'test' } },
          },
        },
      },
    },
  },
  responses: {
    200: TrueSuccessResponse,
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                success: false,
                error: "must have required property 'userId' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1UsersLogoutRoute = createRoute({
  method: 'post',
  path: '/api/v1/users.logout',
  tags: ['Users'],
  summary: 'Logout User',
  description:
    "Log out of your account. You can also log out of another user's session. You will need the `logout-other-user` permission.",
  operationId: 'post-api-v1-users.logout',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              userId: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Enter the user ID to be logged out.',
                  example: 'BsNr28znDkG8aeo7W',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({ message: z.string().exactOptional(), success: z.boolean().exactOptional() })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: { message: 'User JxemcN9PDCdfzJeZr has been logged out!', success: true },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1LdapSyncNowRoute = createRoute({
  method: 'post',
  path: '/api/v1/ldap.syncNow',
  tags: ['LDAP'],
  summary: 'LDAP Sync',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/premium.svg" alt="Premium tag" style="display: block; margin: auto;"></div>\n\nSyncs your <a href="https://docs.rocket.chat/use-rocket.chat/authentication/ldap" target="_blank">LDAP data</a> based on the <a href="https://docs.rocket.chat/use-rocket.chat/authentication/ldap/ldap-data-sync-settings" target="_blank">data sync configurations</a>. This endpoint requires 2FA.\n\nMake sure LDAP is enabled before using this endpoint.\n\nPermission required: `sync-auth-services-users`.\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|9.0.0            | Moved to premium plans. Added the `LDAP_Background_Sync_disabled` and `LDAP_Sync_failed` errors. |\n|5.2.0            | Include `syncAvatars`       |\n|4.0.0            | Added       |',
  operationId: 'post-api-v1-ldap.syncNow',
  request: {
    headers: z.object({
      'X-Auth-Token': AuthTokenParamsSchema,
      'X-User-Id': UserIdParamsSchema,
      'x-2fa-code': X_2faCodeParamsSchema,
      'x-2fa-method': X_2faMethodParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({ message: z.string().exactOptional(), success: z.boolean().exactOptional() })
            .openapi({ required: [] }),
          examples: {
            'Success Example': { value: { message: 'Sync_in_progress', success: true } },
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
              details: z
                .object({
                  method: z.string().exactOptional(),
                  codeGenerated: z.boolean().exactOptional(),
                  availableMethods: z.array(z.string()).exactOptional(),
                  error: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The error that stopped the sync. Returned with `LDAP_Sync_failed`.',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            '2FA Required': {
              summary: '2FA code missing',
              description:
                'The request has no valid `x-2fa-code` and `x-2fa-method` headers. `details.method` shows the 2FA method to use.',
              value: {
                success: false,
                error: 'TOTP Required [totp-required]',
                errorType: 'totp-required',
                details: { method: 'totp', codeGenerated: false, availableMethods: ['totp'] },
              },
            },
            'LDAP Disabled': {
              summary: 'LDAP is disabled',
              description: 'LDAP is not enabled in the workspace (`LDAP_Enable` is off).',
              value: { success: false, error: 'LDAP_disabled' },
            },
            'Not Authorized': {
              summary: 'Missing permission',
              description: "The user doesn't have the `sync-auth-services-users` permission.",
              value: { success: false, error: 'error-not-authorized' },
            },
            'Background Sync Disabled': {
              summary: 'Background sync is disabled',
              description:
                'None of the background sync settings is enabled (`LDAP_Background_Sync`, `LDAP_Background_Sync_Avatars`, or `LDAP_Background_Sync_ABAC_Attributes` with ABAC enabled).',
              value: { success: false, error: 'LDAP_Background_Sync_disabled' },
            },
            'License Required': {
              summary: 'Premium license required',
              description:
                "The workspace doesn't have a premium license with the `ldap-enterprise` module.",
              value: {
                success: false,
                error: 'This is an enterprise feature [error-action-not-allowed]',
                errorType: 'error-action-not-allowed',
              },
            },
            'Sync Failed': {
              summary: 'Sync could not run',
              description:
                'The sync could not run, for example because the LDAP server is unreachable. `details.error` contains the cause, for example `Timeout`.',
              value: { success: false, error: 'LDAP_Sync_failed', details: { error: 'Timeout' } },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1LdapTestConnectionRoute = createRoute({
  method: 'post',
  path: '/api/v1/ldap.testConnection',
  tags: ['LDAP'],
  summary: 'Test LDAP Connection',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/premium.svg" alt="Premium tag" style="display: block; margin: auto;"></div>\n\nTest if Rocket.Chat can connect to the specified LDAP server using the port and host provided in the Rocket.Chat settings.\nMake sure LDAP is enabled before using this endpoint.\n\nPermission required: `test-admin-options`.\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n| 9.0.0   | Moved to premium plans. |\n| 9.0.0   | Added the `LDAP_Bind_failed` and `LDAP_Connection_failed_reason` errors. Removed the `Connection_failed` error. |',
  operationId: 'post-api-v1-ldap.testConnection',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({ message: z.string().exactOptional(), success: z.boolean().exactOptional() })
            .openapi({ required: [] }),
          examples: {
            'Success Example': { value: { message: 'LDAP_Connection_successful', success: true } },
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
              details: z
                .object({
                  error: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: "The LDAP server's error. Returned with `LDAP_Bind_failed`.",
                    }),
                  reason: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The connection error. Returned with `LDAP_Connection_failed_reason`.',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            'Bind Failed': {
              summary: 'LDAP bind failed',
              description:
                "Rocket.Chat reached the LDAP server, but the server rejected the bind with the configured `LDAP_Authentication_UserDN` and `LDAP_Authentication_Password`. `details.error` contains the LDAP server's error, for example `Invalid Credentials`.",
              value: {
                success: false,
                error: 'LDAP_Bind_failed',
                details: { error: 'Invalid Credentials' },
              },
            },
            'Connection Failed': {
              summary: "Can't connect to the LDAP server",
              description:
                "Rocket.Chat couldn't reach the LDAP server at the configured `LDAP_Host` and `LDAP_Port`. `details.reason` contains the connection error, for example `Timeout`, `connectRefused`, or `getaddrinfo ENOTFOUND`.",
              value: {
                success: false,
                error: 'LDAP_Connection_failed_reason',
                errorType: 'error-ldap-connection-failed',
                details: { reason: 'Timeout' },
              },
            },
            'License Required': {
              summary: 'Premium license required',
              description:
                "The workspace doesn't have a premium license with the `ldap-enterprise` module.",
              value: {
                success: false,
                error: 'This is an enterprise feature [error-action-not-allowed]',
                errorType: 'error-action-not-allowed',
              },
            },
            'LDAP Disabled': {
              summary: 'LDAP is disabled',
              description: 'LDAP is not enabled in the workspace (`LDAP_Enable` is off).',
              value: { success: false, error: 'LDAP_disabled' },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: z
            .object({ success: z.boolean().exactOptional(), error: z.string().exactOptional() })
            .openapi({ required: [] }),
          examples: {
            'Permission Error': {
              summary: 'Missing permission',
              description: "The user doesn't have the `test-admin-options` permission.",
              value: {
                success: false,
                error:
                  'User does not have the permissions required for this action [error-unauthorized]',
              },
            },
          },
        },
      },
    },
  },
})

export const postApiV1LdapTestSearchRoute = createRoute({
  method: 'post',
  path: '/api/v1/ldap.testSearch',
  tags: ['LDAP'],
  summary: 'Test LDAP User Search',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/premium.svg" alt="Premium tag" style="display: block; margin: auto;"></div>\n\nTest if a given username can be found in the LDAP server using the authentication and filter <a href=\'https://docs.rocket.chat/docs/configure-ldap-connection\' target=\'_blank\'>settings</a> provided to Rocket.Chat.\nMake sure LDAP is enabled in **Settings** > **LDAP** > **Enable** before using this endpoint.\n\nPermission required: `test-admin-options`.\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n| 9.0.0   | Moved to premium plans. Requires a license with the `ldap-enterprise` module. |\n| 9.0.0   | Added the `LDAP_Bind_failed`, `LDAP_User_not_found`, and `LDAP_Multiple_users_found` errors. |',
  operationId: 'post-api-v1-ldap.testSearch',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              username: z
                .string()
                .openapi({ description: 'The username that you want to search.', example: 'bob' }),
            })
            .openapi({ required: ['username'] }),
          examples: { 'Example 1': { value: { username: 'bob' } } },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({ message: z.string().exactOptional(), success: z.boolean().exactOptional() })
            .openapi({ required: [] }),
          examples: { 'Success Example': { value: { message: 'LDAP_User_Found', success: true } } },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
              details: z
                .object({
                  error: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: "The LDAP server's error. Returned with `LDAP_Bind_failed`.",
                    }),
                  total: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The number of matching users. Returned with `LDAP_Multiple_users_found`.',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            'Missing Username': {
              summary: 'Username missing',
              description: "The request body doesn't include `username`.",
              value: {
                success: false,
                error: "must have required property 'username'",
                errorType: 'error-invalid-params',
              },
            },
            'Bind Failed': {
              summary: 'LDAP bind failed',
              description:
                "Rocket.Chat couldn't bind to the LDAP server with the authentication user DN and password. `details.error` contains the LDAP server's error.",
              value: {
                success: false,
                error: 'LDAP_Bind_failed',
                details: { error: 'Invalid Credentials' },
              },
            },
            'User Not Found': {
              summary: 'User not found',
              description:
                'No LDAP user matches the username. Wildcard characters in `username` are not expanded, so a search for `*` also returns this error.',
              value: { success: false, error: 'LDAP_User_not_found' },
            },
            'Multiple Users Found': {
              summary: 'More than one user found',
              description:
                'More than one LDAP user matches the username. `details.total` contains the number of matches.',
              value: {
                success: false,
                error: 'LDAP_Multiple_users_found',
                details: { total: '2' },
              },
            },
            'License Required': {
              summary: 'Premium license required',
              description:
                "The workspace doesn't have a premium license with the `ldap-enterprise` module.",
              value: {
                success: false,
                error: 'This is an enterprise feature [error-action-not-allowed]',
                errorType: 'error-action-not-allowed',
              },
            },
            'Search Failed': {
              summary: 'Search failed',
              description:
                "The search failed for another reason, for example the LDAP server is unreachable, the base DN doesn't exist, the search filter is invalid, or `username` is empty.",
              value: { success: false, error: 'LDAP_search_failed' },
            },
            'LDAP Disabled': {
              summary: 'LDAP is disabled',
              description: 'LDAP is not enabled in the workspace (`LDAP_Enable` is off).',
              value: { success: false, error: 'LDAP_disabled' },
            },
          },
        },
      },
      headers: z.object({}),
    },
    401: AuthorizationErrorResponse,
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: z
            .object({ success: z.boolean().exactOptional(), error: z.string().exactOptional() })
            .openapi({ required: [] }),
          examples: {
            'Permission Error': {
              summary: 'Missing permission',
              description: "The user doesn't have the `test-admin-options` permission.",
              value: {
                success: false,
                error:
                  'User does not have the permissions required for this action [error-unauthorized]',
              },
            },
          },
        },
      },
    },
  },
})

export const getApiV1AvatarSubjectRoute = createRoute({
  method: 'get',
  path: '/api/v1/avatar/{subject}',
  tags: ['Users'],
  summary: 'Get Avatars',
  description:
    "Note:\n  * This is a RESTful endpoint that sits separately from the REST API in the server codebase and behaves slightly differently.\n  * The `rc_uid` and `rc_token` can alternately be provided as cookies (already present in the web interface), but not as auth headers.\n  * When requesting the avatar of a user, if they have a custom avatar set, this will override the user's choices of format or size.\n  * If no uploaded avatar exists for a user, a default one will be generated for them based on the initial of their username in a randomly colored square.\n  * If `UI_Use_Name_Avatar` is set and the user has a real name set, the generated avatar will be based on their actual name instead of the username.\n  * If no format is requested, or the format requested isn't supported, the format returned will be SVG.",
  operationId: 'get-api-v1-avatar-subject',
  request: {
    params: z.object({
      subject: z
        .string()
        .openapi({
          param: {
            schema: { type: 'string' },
            example: 'alice, @general',
            name: 'subject',
            in: 'path',
            required: true,
            description:
              "Name of the user or channel.  Channels are always preceded by an `@` symbol. Rooms that are DMs are always represented by the other participant's user avatar.",
          },
        }),
    }),
    query: z.object({
      format: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'string' },
            example: 'png',
            in: 'query',
            name: 'format',
            description:
              'Format of the image requested.  The values can be one of: jpg, jpeg, png.',
            required: false,
          },
        }),
      size: z
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
            schema: { type: 'integer' },
            example: 50,
            in: 'query',
            name: 'size',
            description: 'Width and height of the image. Default: 200',
            required: false,
          },
        }),
      rc_uid: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'string' },
            example: 'aobEdbYhXfu5hkeqG',
            in: 'query',
            name: 'rc_uid',
            description:
              'User ID for authenticating is only required if `Accounts_AvatarBlockUnauthenticatedAccess` is enabled.',
            required: false,
          },
        }),
      rc_token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'string' },
            example: '9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq',
            in: 'query',
            name: 'rc_token',
            description:
              'User auth token for authenticating is only required if `Accounts_AvatarBlockUnauthenticatedAccess` is enabled.',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'image/svg+xml': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
  },
})

export const postApiV1UsersSendWelcomeEmailRoute = createRoute({
  method: 'post',
  path: '/api/v1/users.sendWelcomeEmail',
  tags: ['Users'],
  summary: 'Send Welcome Email to User',
  description:
    "Ensure that you have configured the <a href='https://docs.rocket.chat/docs/email' target='_blank'>email settings</a> in your workspace to send emails. \n\nPermission required: `send-mail`\n\n### Changelog\n| Version      | Description |\n| ------------ | ------------|\n|6.8.0         | Added       |",
  operationId: 'get-api-v1-users.sendWelcomeEmail',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              email: z
                .string()
                .openapi({
                  description:
                    "The user's email address to which you want to send the welcome email.",
                }),
            })
            .openapi({ required: ['email'] }),
          examples: { 'Example 1': { value: { email: 'test@email.com' } } },
        },
      },
    },
  },
  responses: {
    200: TrueSuccessResponse,
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
              details: z
                .object({ method: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            'SMPT not configured': {
              value: {
                success: false,
                error: 'SMTP is not configured [error-email-send-failed]',
                errorType: 'error-email-send-failed',
                details: { method: 'sendWelcomeEmail' },
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1SendInvitationEmailRoute = createRoute({
  method: 'post',
  path: '/api/v1/sendInvitationEmail',
  tags: ['Users'],
  summary: 'Send Invitation Email',
  description: 'Send workspace invitation emails using this endpoint.',
  operationId: 'post-api-v1-sendInvitationEmail',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              emails: z
                .array(z.string().openapi({ example: 'example@example.com' }))
                .openapi({
                  description: 'Enter the list of emails to which you want to send the invitation.',
                }),
            })
            .openapi({ required: ['emails'] }),
          examples: { 'Example 1': { value: { emails: ['example@example.com'] } } },
        },
      },
    },
  },
  responses: {
    200: TrueSuccessResponse,
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                success: false,
                error: "must have required property 'emails' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1UsersSendConfirmationEmailRoute = createRoute({
  method: 'post',
  path: '/api/v1/users.sendConfirmationEmail',
  tags: ['Users'],
  summary: 'Send Email Verification',
  description:
    "Send an email to verify a user's email address. The user receives the email and they must click the confirmation button to confirm their email address. Rate limit applies: One request can be sent every 60000ms. This endpoint does not require authentication. An unverified user can call it from the login screen to resend their own verification email.\n\n### Changelog\n | Version    | Description                            |\n | ---------- | -------------------------------------- |\n | 8.6.0 | Authentication is no longer required.  |",
  operationId: 'post-api-v1-users.sendConfirmationEmail',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              email: z
                .string()
                .openapi({
                  description: 'Enter the email address that needs to be verified.',
                  example: 'example@example.com',
                }),
            })
            .openapi({ required: ['email'] }),
          examples: { Example: { value: { email: 'example@example.com' } } },
        },
      },
    },
  },
  responses: {
    200: TrueSuccessResponse,
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Missing parameter': {
              value: {
                success: false,
                error: "must have required property 'email' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
          },
        },
      },
    },
  },
})

export const postApiV1UsersVerifyEmailRoute = createRoute({
  method: 'post',
  path: '/api/v1/users.verifyEmail',
  tags: ['Users'],
  summary: 'Verify User Email',
  description:
    "Verifies a user's email address using the token embedded in the verification sent to their email.\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|9.0.0            | Removed the `anonymous` role swap on verification.       |\n|8.7.0            | Added       |",
  operationId: 'post-api-v1-users.verifyEmail',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              token: z
                .string()
                .openapi({
                  description: 'The email verification token the user received by email.',
                  example: 'hf5Wf4Kj9R3mR7cQ2xkPd',
                }),
            })
            .openapi({ required: ['token'] }),
          examples: { Example: { value: { token: 'hf5Wf4Kj9R3mR7cQ2xkPd' } } },
        },
      },
    },
  },
  responses: {
    200: TrueSuccessResponse,
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Missing token': {
              value: {
                success: false,
                error: "must have required property 'token' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
            'Verification link expired': {
              value: { success: false, error: 'Verify email link expired' },
            },
          },
        },
      },
    },
  },
})

export const getApiV1UsersListByStatusRoute = createRoute({
  method: 'get',
  path: '/api/v1/users.listByStatus',
  tags: ['Users'],
  summary: 'List Users by Status',
  description:
    "Returns users filtered by activation status, whether they have logged in, user type, role, search term, or inactive reason.\n\nWhen the Premium **User status hiding** feature is enabled, users who have hidden their status from the caller remain in the response but appear as `offline`, and their detailed status fields are omitted.\n\n**Permissions required**:\n- `view-d-room`: View direct messages.\n- `view-outside-room`: View users outside the caller's rooms when `Apply_permission_view-outside-room` is enabled under **Settings** > **General** > **REST API**.\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|8.8.0            | Added status visibility filtering. |\n|6.8.0            | Added       |",
  operationId: 'get-api-v1-users.listByStatus',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      offset: OffsetParamsSchema,
      sort: SortParamsSchema,
      count: CountParamsSchema,
      status: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'status',
            in: 'query',
            description:
              'Filter users based on their activation status. It can either  be `active` or `deactivated`',
            schema: { type: 'string', example: 'active' },
            required: false,
          },
          example: 'active',
        }),
      hasLoggedIn: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'hasLoggedIn',
            in: 'query',
            description: 'Filter the users who have logged into their accounts for the first time.',
            schema: { type: 'boolean', example: true },
            required: false,
          },
          example: true,
        }),
      type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'type',
            in: 'query',
            description:
              "Filter the type of users to be returned. For example, 'bot', 'user', 'app', etc.",
            schema: { type: 'string', example: 'user' },
            required: false,
          },
          example: 'user',
        }),
      'roles[]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'roles[]',
            in: 'query',
            description: 'Filter the users returned based on a list of roles.',
            schema: { type: 'string', example: 'bot' },
            required: false,
          },
          example: 'bot',
        }),
      searchTerm: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'searchTerm',
            in: 'query',
            description: 'Filter the list of users returned based on a search term',
            schema: { type: 'string', example: 'test' },
            required: false,
          },
          example: 'test',
        }),
      'inactiveReason[]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'string', example: 'deactivated' },
            in: 'query',
            name: 'inactiveReason[]',
            description:
              'Filter the users based on the reason for inactive status. The options are: `idle_too_long`, `deactivated`, and `pending_approval`.',
            required: false,
          },
          example: 'deactivated',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              users: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      username: z.string().exactOptional(),
                      emails: z
                        .array(
                          z
                            .object({
                              address: z.string().exactOptional(),
                              verified: z.boolean().exactOptional(),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional(),
                      type: z.string().exactOptional(),
                      roles: z.array(z.string()).exactOptional(),
                      status: z.string().exactOptional(),
                      active: z.boolean().exactOptional(),
                      name: z.string().exactOptional(),
                      lastLogin: z.string().exactOptional(),
                      avatarETag: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              count: z.int().exactOptional(),
              offset: z.int().exactOptional(),
              total: z.int().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            Success: {
              value: {
                users: [
                  {
                    _id: 'W7MRNgkYLXKKAGNvW',
                    username: 'agent1',
                    emails: [{ address: 'agent1@agent.com', verified: false }],
                    type: 'user',
                    roles: ['user', 'livechat-agent'],
                    status: 'offline',
                    active: true,
                    name: 'Agent 1',
                    lastLogin: '2024-04-24T17:47:50.485Z',
                  },
                  {
                    _id: 'Tf44Q5AaYDehtJLzA',
                    username: 'agent2',
                    emails: [{ address: 'agent2@agent.com', verified: false }],
                    type: 'user',
                    roles: ['user', 'livechat-agent'],
                    status: 'offline',
                    active: true,
                    name: 'Agent 2',
                    lastLogin: '2024-04-29T16:38:56.809Z',
                  },
                  {
                    _id: 'JwATAtGzrzHYHCXFy',
                    username: 'agent3',
                    emails: [{ address: 'agent3@agent.com', verified: false }],
                    type: 'user',
                    roles: ['user', 'livechat-agent'],
                    status: 'online',
                    active: true,
                    name: 'Agent3',
                    lastLogin: '2024-04-30T16:59:21.879Z',
                  },
                  {
                    _id: 'u6C62WdHKNk5X8Rzr',
                    username: 'guy',
                    emails: [{ address: 'guy@guy.com', verified: false }],
                    type: 'user',
                    roles: ['user'],
                    status: 'offline',
                    active: true,
                    name: 'guy',
                  },
                  {
                    _id: 'rocket.cat',
                    name: 'Rocket.Cat',
                    username: 'rocket.cat',
                    status: 'online',
                    active: true,
                    type: 'bot',
                    roles: ['bot'],
                    avatarETag: 'MEhPLkenJqs3jTJP5',
                  },
                ],
                count: 5,
                offset: 0,
                total: 5,
                success: true,
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1SamlParseMetadataRoute = createRoute({
  method: 'post',
  path: '/api/v1/saml.parseMetadata',
  tags: ['SAML'],
  summary: 'Parse SAML IdP Metadata',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/premium.svg" alt="Premium tag" style="display: block; margin: auto;"></div>\n\nFetches and parses a SAML identity provider (IdP) metadata document from a URL. It returns the IdP certificate, sign-in URL, sign-out URL, and identifier format when those values are available in the metadata.\n\nThe **Import IdP metadata** button at the top of **Manage** → **Workspace** → **Settings** → **SAML** uses this endpoint to prefill the corresponding SAML settings. The imported values can be reviewed and edited before they are saved. This endpoint does not save or change any workspace settings.\n\nThe metadata request is subject to SSRF protection and the workspace\'s SSRF allowlist. It has a 20-second timeout and a 1 MB response-size limit.\n\n**Permission required**:\n- `test-admin-options`\n\nFrom Rocket.Chat 9.0.0, SAML is available on Starter workspaces and on all premium plans (Commercial, Government, and Defense). It is not available on Community workspaces, where this endpoint returns `error-action-not-allowed`. See <a href="https://docs.rocket.chat/docs/our-plans" target="_blank">Our Plans</a> for details.\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|9.0.0            | Added premium plan availability details. The `403` response returns `errorType: error-forbidden`.       |\n|8.8.0            | Added       |',
  operationId: 'post-api-v1-saml.parseMetadata',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              url: z
                .string()
                .min(1)
                .openapi({
                  description: 'The URL of the SAML IdP metadata document.',
                  example: 'https://idp.example.com/metadata',
                }),
            })
            .openapi({ required: ['url'] }),
          examples: { Example: { value: { url: 'https://idp.example.com/metadata' } } },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The metadata was parsed successfully.',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              entryPoint: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The IdP URL where Rocket.Chat sends SAML sign-in requests.',
                }),
              idpSLORedirectURL: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The IdP URL where Rocket.Chat sends SAML sign-out requests.',
                }),
              cert: z
                .string()
                .exactOptional()
                .openapi({ description: 'The IdP signing certificate in PEM format.' }),
              identifierFormat: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The first SAML NameID format found in the metadata. The SAML settings page applies this value when the Enterprise-only Identifier Format setting is available.',
                }),
              warnings: z
                .array(z.string())
                .openapi({
                  description: 'Warnings about missing or multiple usable values in the metadata.',
                }),
              success: z.literal(true),
            })
            .openapi({ required: ['warnings', 'success'] }),
          examples: {
            Success: {
              value: {
                entryPoint: 'https://idp.example.com/sso/saml',
                idpSLORedirectURL: 'https://idp.example.com/slo/saml',
                cert: '-----BEGIN CERTIFICATE-----\nMIIDdzCCAl+gAwIBAgIEXAMPLEONLY\n-----END CERTIFICATE-----',
                identifierFormat: 'urn:oasis:names:tc:SAML:2.0:nameid-format:persistent',
                warnings: [],
                success: true,
              },
            },
          },
        },
      },
    },
    400: {
      description:
        'The request is invalid, the metadata cannot be fetched or parsed, or the URL is blocked.',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.literal(false),
              error: z.string(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: ['success', 'error'] }),
          examples: {
            'URL blocked': { value: { success: false, error: 'SAML_Metadata_url_blocked' } },
            'Fetch failed': { value: { success: false, error: 'SAML_Metadata_fetch_failed' } },
            'Metadata too large': { value: { success: false, error: 'SAML_Metadata_too_large' } },
            'Invalid metadata': { value: { success: false, error: 'SAML_Metadata_invalid' } },
            'Not available on Community workspaces': {
              value: {
                success: false,
                error: 'This is an enterprise feature [error-action-not-allowed]',
                errorType: 'error-action-not-allowed',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Permission Error': {
              value: {
                success: false,
                error: 'User does not have the permissions required for this action',
                errorType: 'error-forbidden',
              },
            },
          },
        },
      },
    },
  },
})
