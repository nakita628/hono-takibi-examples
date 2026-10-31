import { createRoute, z } from '@hono/zod-openapi'

const SimpleSuccessSchema = z
  .object({ success: z.boolean().exactOptional().openapi({ example: true }) })
  .openapi({ required: [] })
  .openapi('SimpleSuccess')

const SimpleErrorSchema = z
  .object({ error: z.string().exactOptional().openapi({ example: 'Something went wrong' }) })
  .openapi({ required: [] })
  .openapi('SimpleError')

const ShareLinkEntrySchema = z
  .object({
    folder: z.string().exactOptional().openapi({ example: 'root' }),
    file: z.string().exactOptional().openapi({ example: 'invoice.pdf' }),
    expires: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 1735689600 }),
    password: z.string().nullable().exactOptional().openapi({ example: '***' }),
    token: z.string().exactOptional().openapi({ example: '0123456789abcdef0123456789abcdef' }),
    sourceId: z.string().exactOptional().openapi({ example: 'local' }),
    sourceName: z.string().exactOptional().openapi({ example: 'Local' }),
  })
  .openapi({ required: [] })
  .openapi('ShareLinkEntry')

const ShareLinksMapSchema = z.record(z.string(), ShareLinkEntrySchema).openapi('ShareLinksMap')

const ShareFolderLinkEntrySchema = z
  .object({
    folder: z.string().exactOptional().openapi({ example: 'shared/reports' }),
    expires: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', example: 1735689600 }),
    password: z.string().nullable().exactOptional().openapi({ example: '***' }),
    allowUpload: z.int().exactOptional().openapi({ example: 1 }),
    token: z.string().exactOptional().openapi({ example: '0123456789abcdef0123456789abcdef' }),
    sourceId: z.string().exactOptional().openapi({ example: 'local' }),
    sourceName: z.string().exactOptional().openapi({ example: 'Local' }),
  })
  .openapi({ required: [] })
  .openapi('ShareFolderLinkEntry')

const ShareFolderLinksMapSchema = z
  .record(z.string(), ShareFolderLinkEntrySchema)
  .openapi('ShareFolderLinksMap')

const LoginOptionsPublicSchema = z
  .object({
    disableFormLogin: z.boolean().exactOptional(),
    disableBasicAuth: z.boolean().exactOptional(),
    disableOIDCLogin: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('LoginOptionsPublic')

const LoginOptionsAdminExtraSchema = z
  .object({
    authBypass: z.boolean().nullable().exactOptional(),
    authHeaderName: z.string().nullable().exactOptional().openapi({ example: 'X-Remote-User' }),
  })
  .openapi({ required: [] })
  .openapi('LoginOptionsAdminExtra')

const OIDCConfigPublicSchema = z
  .object({
    providerUrl: z.string().exactOptional().openapi({ example: 'https://accounts.example.com' }),
    redirectUri: z
      .string()
      .exactOptional()
      .openapi({ example: 'https://your.filerise.app/callback' }),
  })
  .openapi({ required: [] })
  .openapi('OIDCConfigPublic')

const AdminGetConfigPublicSchema = z
  .object({
    header_title: z.string().openapi({ example: 'FileRise' }),
    loginOptions: LoginOptionsPublicSchema,
    globalOtpauthUrl: z.string(),
    enableWebDAV: z.boolean(),
    sharedMaxUploadSize: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    uploads: z
      .strictObject({
        resumableChunkMb: z.float32().min(0.5).max(100).exactOptional().openapi({ example: 1.5 }),
        resumableTtlHours: z.float32().min(0.5).max(168).exactOptional().openapi({ example: 6 }),
      })
      .openapi({ required: [] }),
    oidc: OIDCConfigPublicSchema,
  })
  .openapi({
    required: [
      'header_title',
      'loginOptions',
      'globalOtpauthUrl',
      'enableWebDAV',
      'sharedMaxUploadSize',
      'uploads',
      'oidc',
    ],
  })
  .openapi('AdminGetConfigPublic')

const AdminGetConfigAdminSchema = AdminGetConfigPublicSchema.and(
  z
    .object({
      loginOptions: LoginOptionsPublicSchema.and(LoginOptionsAdminExtraSchema).exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('AdminGetConfigAdmin')

const AdminUpdateConfigRequestSchema = z
  .strictObject({
    header_title: z.string().max(100).exactOptional().openapi({ example: 'FileRise' }),
    loginOptions: z
      .strictObject({
        disableFormLogin: z.boolean().exactOptional().openapi({ example: false }),
        disableBasicAuth: z.boolean().exactOptional().openapi({ example: false }),
        disableOIDCLogin: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'false = OIDC enabled', example: true }),
        authBypass: z.boolean().exactOptional().openapi({ example: false }),
        authHeaderName: z
          .string()
          .regex(/^[A-Za-z0-9\\-]+$/)
          .exactOptional()
          .openapi({ description: 'Letters/numbers/dashes only', example: 'X-Remote-User' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    globalOtpauthUrl: z
      .string()
      .exactOptional()
      .openapi({ example: 'otpauth://totp/{label}?secret={secret}&issuer=FileRise' }),
    enableWebDAV: z.boolean().exactOptional().openapi({ example: false }),
    sharedMaxUploadSize: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(0n),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', minimum: 0, example: 52428800 }),
    uploads: z
      .strictObject({
        resumableChunkMb: z.float32().min(0.5).max(100).exactOptional().openapi({ example: 1.5 }),
        resumableTtlHours: z.float32().min(0.5).max(168).exactOptional().openapi({ example: 6 }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    oidc: z
      .strictObject({
        providerUrl: z.url().exactOptional().openapi({ example: 'https://issuer.example.com' }),
        clientId: z.string().exactOptional().openapi({ example: 'my-client-id' }),
        clientSecret: z.string().exactOptional().openapi({ writeOnly: true, example: '***' }),
        redirectUri: z
          .url()
          .exactOptional()
          .openapi({ example: 'https://app.example.com/auth/callback' }),
        groupClaim: z.string().nullable().exactOptional().openapi({ example: 'groups' }),
        extraScopes: z.string().nullable().exactOptional().openapi({ example: 'groups' }),
      })
      .exactOptional()
      .openapi({
        description:
          'When disableOIDCLogin=false (OIDC enabled), providerUrl, redirectUri, and clientId are required.',
        required: [],
      }),
  })
  .openapi({ required: [] })
  .openapi('AdminUpdateConfigRequest')

const UnauthorizedResponse = {
  description: 'Unauthorized (no session)',
  content: {
    'application/json': {
      schema: z
        .object({ error: z.string().exactOptional().openapi({ example: 'Unauthorized' }) })
        .openapi({ required: [] }),
    },
  },
}

const ForbiddenResponse = {
  description: 'Forbidden (not enough privileges)',
  content: {
    'application/json': {
      schema: z
        .object({ error: z.string().exactOptional().openapi({ example: 'Invalid CSRF token.' }) })
        .openapi({ required: [] }),
    },
  },
}

const MoveFilesRequestRequestBody = {
  content: {
    'application/json': {
      schema: z
        .object({
          source: z.string().openapi({ example: 'inbox' }),
          destination: z.string().openapi({ example: 'archive' }),
          files: z.array(z.string()),
        })
        .openapi({ required: ['source', 'destination', 'files'] }),
    },
  },
  required: true,
}

const CookieAuthSecurityScheme = {
  type: 'apiKey',
  description: 'Session cookie used for authenticated endpoints',
  name: 'PHPSESSID',
  in: 'cookie',
}

const CsrfHeaderSecurityScheme = {
  type: 'apiKey',
  description: 'CSRF token header required for state-changing requests',
  name: 'X-CSRF-Token',
  in: 'header',
}

export const getApiAdminAclGetGrantsPhpRoute = createRoute({
  method: 'get',
  path: '/api/admin/acl/getGrants.php',
  tags: ['Admin'],
  summary: 'Get ACL grants for a user',
  description: 'Returns explicit and inherited folder grants for a user.',
  operationId: 'adminGetAclGrants',
  request: {
    query: z.object({
      user: z
        .string()
        .openapi({
          param: {
            name: 'user',
            in: 'query',
            required: true,
            schema: { type: 'string' },
            example: 'johndoe',
          },
        }),
      sourceId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'sourceId',
            in: 'query',
            required: false,
            schema: { type: 'string' },
            example: 'local',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Grants map',
      content: {
        'application/json': {
          schema: z.object({ grants: z.object({}).exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: { description: 'Invalid user' },
    401: { description: 'Unauthorized' },
    500: { description: 'Server error' },
  },
  security: [{ cookieAuth: [] }],
})

export const postApiAdminAclSaveGrantsPhpRoute = createRoute({
  method: 'post',
  path: '/api/admin/acl/saveGrants.php',
  tags: ['Admin'],
  summary: 'Save ACL grants',
  description: 'Saves per-folder ACL grants for one user or a batch of users.',
  operationId: 'adminSaveAclGrants',
  request: {
    headers: z.object({
      'X-CSRF-Token': z
        .string()
        .openapi({
          param: { name: 'X-CSRF-Token', in: 'header', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                user: z.string().openapi({ example: 'johndoe' }),
                sourceId: z.string().exactOptional().openapi({ example: 'local' }),
                grants: z.object({}).openapi({ description: 'Map of folder -> capabilities' }),
              })
              .openapi({ required: ['user', 'grants'] }),
            z
              .object({
                sourceId: z.string().exactOptional().openapi({ example: 'local' }),
                changes: z.array(
                  z
                    .object({
                      user: z.string().openapi({ example: 'johndoe' }),
                      grants: z.object({}),
                    })
                    .openapi({ required: ['user', 'grants'] }),
                ),
              })
              .openapi({ required: ['changes'] }),
          ]),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Save result (model-defined JSON)' },
    400: { description: 'Invalid input' },
    401: { description: 'Unauthorized' },
    403: { description: 'Invalid CSRF token' },
    500: { description: 'Server error' },
  },
  security: [{ cookieAuth: [] }],
})

export const postApiAdminAddUserPhpRoute = createRoute({
  method: 'post',
  path: '/api/admin/addUser.php',
  tags: ['Users'],
  summary: 'Add a new user',
  description:
    'Adds a new user to the system. In setup mode (setup=1 with no users), auth/CSRF is not required and the new user is automatically made admin.',
  operationId: 'addUser',
  request: {
    query: z.object({
      setup: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'setup',
            in: 'query',
            description: 'Use setup=1 to enable first-run bootstrap',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'X-CSRF-Token': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'X-CSRF-Token',
            in: 'header',
            description: 'Required outside setup mode',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              username: z.string().openapi({ example: 'johndoe' }),
              password: z.string().openapi({ example: 'securepassword' }),
              isAdmin: z.boolean().exactOptional().openapi({ example: true }),
            })
            .openapi({ required: ['username', 'password'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'User added successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.string().exactOptional().openapi({ example: 'User added successfully' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    405: { description: 'Method not allowed' },
  },
  security: [{ cookieAuth: [] }],
})

export const postApiAdminChangeUserPasswordPhpRoute = createRoute({
  method: 'post',
  path: '/api/admin/changeUserPassword.php',
  tags: ['Admin'],
  summary: 'Admin reset user password',
  description: "Resets a user's password (admin only).",
  operationId: 'adminChangeUserPassword',
  request: {
    headers: z.object({
      'X-CSRF-Token': z
        .string()
        .openapi({
          param: { name: 'X-CSRF-Token', in: 'header', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              username: z.string().openapi({ example: 'johndoe' }),
              newPassword: z.string().openapi({ example: 'newpass123' }),
            })
            .openapi({ required: ['username', 'newPassword'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Password updated' },
    400: { description: 'Invalid input' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    405: { description: 'Method not allowed' },
    422: { description: 'Validation error' },
  },
  security: [{ cookieAuth: [] }],
})

export const postApiAdminClamavTestPhpRoute = createRoute({
  method: 'post',
  path: '/api/admin/clamavTest.php',
  tags: ['Admin'],
  summary: 'Run ClamAV connectivity test',
  description: 'Runs a test scan of a temporary file and returns engine info.',
  operationId: 'adminClamavTest',
  responses: {
    200: {
      description: 'Test result',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              command: z.string().exactOptional(),
              engine: z.string().nullable().exactOptional(),
              details: z.string().exactOptional(),
              error: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    405: { description: 'Method not allowed' },
    500: { description: 'Server error' },
  },
  security: [{ cookieAuth: [] }],
})

export const postApiAdminDiskUsageDeleteSnapshotPhpRoute = createRoute({
  method: 'post',
  path: '/api/admin/diskUsageDeleteSnapshot.php',
  tags: ['Admin'],
  summary: 'Delete disk usage snapshot',
  description: 'Deletes the cached disk usage snapshot file.',
  operationId: 'adminDiskUsageDeleteSnapshot',
  request: {
    headers: z.object({
      'X-CSRF-Token': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'X-CSRF-Token',
            in: 'header',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ sourceId: z.string().exactOptional().openapi({ example: 'local' }) })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'Snapshot deleted' },
    400: { description: 'CSRF mismatch' },
    403: { description: 'Forbidden' },
    500: { description: 'Server error' },
  },
  security: [{ cookieAuth: [] }],
})

export const getApiAdminDiskUsageSummaryPhpRoute = createRoute({
  method: 'get',
  path: '/api/admin/diskUsageSummary.php',
  tags: ['Admin'],
  summary: 'Get disk usage snapshot summary',
  description: 'Returns snapshot summary and optional scan log tail.',
  operationId: 'adminDiskUsageSummary',
  request: {
    query: z.object({
      topFolders: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'topFolders',
            in: 'query',
            required: false,
            schema: { type: 'integer', minimum: 1 },
            example: 5,
          },
        }),
      topFiles: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'topFiles',
            in: 'query',
            required: false,
            schema: { type: 'integer', minimum: 0 },
            example: 0,
          },
        }),
      sourceId: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'sourceId', in: 'query', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'Summary payload' },
    401: { description: 'Unauthorized' },
    404: { description: 'Snapshot not found' },
    500: { description: 'Server error' },
  },
  security: [{ cookieAuth: [] }],
})

export const postApiAdminDiskUsageTriggerScanPhpRoute = createRoute({
  method: 'post',
  path: '/api/admin/diskUsageTriggerScan.php',
  tags: ['Admin'],
  summary: 'Trigger disk usage scan',
  description: 'Starts a background disk usage scan to build a new snapshot.',
  operationId: 'adminDiskUsageTriggerScan',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ sourceId: z.string().exactOptional().openapi({ example: 'local' }) })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'Scan started' },
    403: { description: 'Forbidden' },
    500: { description: 'Server error' },
  },
  security: [{ cookieAuth: [] }],
})

export const postApiAdminDownloadProBundlePhpRoute = createRoute({
  method: 'post',
  path: '/api/admin/downloadProBundle.php',
  tags: ['Admin'],
  summary: 'Download and install latest Pro bundle',
  description: 'Downloads the latest FileRise Pro bundle from filerise.net and installs it.',
  operationId: 'adminDownloadProBundle',
  request: {
    headers: z.object({
      'X-CSRF-Token': z
        .string()
        .openapi({
          param: { name: 'X-CSRF-Token', in: 'header', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'Install result' },
    400: { description: 'Invalid input' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    405: { description: 'Method not allowed' },
    413: { description: 'Bundle too large' },
    500: { description: 'Server error' },
    502: { description: 'Remote download failed' },
  },
  security: [{ cookieAuth: [] }],
})

export const getApiAdminGetConfigPhpRoute = createRoute({
  method: 'get',
  path: '/api/admin/getConfig.php',
  tags: ['Admin'],
  summary: 'Get UI configuration',
  description:
    'Returns a public subset for everyone; authenticated admins receive additional loginOptions fields.',
  operationId: 'getAdminConfig',
  responses: {
    200: {
      description: 'Configuration loaded',
      content: {
        'application/json': {
          schema: z.xor([AdminGetConfigPublicSchema, AdminGetConfigAdminSchema]),
        },
      },
    },
    500: { description: 'Server error' },
  },
})

export const getApiAdminGetUsersPhpRoute = createRoute({
  method: 'get',
  path: '/api/admin/getUsers.php',
  tags: ['Users'],
  summary: 'Retrieve a list of users',
  description: 'Returns a JSON array of users. Only available to authenticated admin users.',
  operationId: 'getUsers',
  responses: {
    200: {
      description: 'Successful response with an array of users',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                username: z.string().exactOptional().openapi({ example: 'johndoe' }),
                role: z.string().exactOptional().openapi({ example: 'admin' }),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
    401: { description: 'Unauthorized: the user is not authenticated or is not an admin' },
  },
  security: [{ cookieAuth: [] }],
})

export const postApiAdminInstallProBundlePhpRoute = createRoute({
  method: 'post',
  path: '/api/admin/installProBundle.php',
  tags: ['Admin'],
  summary: 'Install Pro bundle',
  description: 'Uploads and installs a FileRise Pro bundle zip.',
  operationId: 'adminInstallProBundle',
  request: {
    headers: z.object({
      'X-CSRF-Token': z
        .string()
        .openapi({
          param: { name: 'X-CSRF-Token', in: 'header', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({ bundle: z.file().openapi({ type: 'string', format: 'binary' }) })
            .openapi({ required: ['bundle'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Install result' },
    400: { description: 'Invalid input' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    405: { description: 'Method not allowed' },
    413: { description: 'Bundle too large' },
    500: { description: 'Server error' },
  },
  security: [{ cookieAuth: [] }],
})

export const getApiAdminOidcDebugInfoPhpRoute = createRoute({
  method: 'get',
  path: '/api/admin/oidcDebugInfo.php',
  tags: ['Admin'],
  summary: 'Get OIDC debug info',
  description: 'Returns OIDC diagnostics for admins.',
  operationId: 'adminOidcDebugInfo',
  responses: {
    200: { description: 'Debug info' },
    403: { description: 'Forbidden' },
    500: { description: 'Server error' },
  },
  security: [{ cookieAuth: [] }],
})

export const postApiAdminOidcTestPhpRoute = createRoute({
  method: 'post',
  path: '/api/admin/oidcTest.php',
  tags: ['Admin'],
  summary: 'Test OIDC discovery',
  description: 'Fetches the discovery document for a provider URL.',
  operationId: 'adminOidcTest',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              providerUrl: z
                .string()
                .exactOptional()
                .openapi({ example: 'https://issuer.example.com' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: { 200: { description: 'Discovery result' }, 500: { description: 'Server error' } },
})

export const getApiAdminReadMetadataPhpRoute = createRoute({
  method: 'get',
  path: '/api/admin/readMetadata.php',
  tags: ['Admin'],
  summary: 'Read share metadata JSON',
  description: 'Admin-only: returns the cleaned metadata for file or folder share links.',
  operationId: 'readMetadata',
  request: {
    query: z.object({
      file: z
        .enum(['share_links.json', 'share_folder_links.json'])
        .openapi({
          param: {
            name: 'file',
            in: 'query',
            description: 'Which metadata file to read',
            required: true,
            schema: { type: 'string', enum: ['share_links.json', 'share_folder_links.json'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.xor([ShareLinksMapSchema, ShareFolderLinksMapSchema]) },
      },
    },
    400: { description: 'Missing or invalid file param' },
    403: { description: 'Forbidden (admin only)' },
    500: { description: 'Corrupted JSON' },
  },
  security: [{ cookieAuth: [] }],
})

export const deleteApiAdminRemoveUserPhpRoute = createRoute({
  method: 'delete',
  path: '/api/admin/removeUser.php',
  tags: ['Users'],
  summary: 'Remove a user',
  description:
    'Removes the specified user from the system. Cannot remove the currently logged-in user. Accepts DELETE or POST.',
  operationId: 'removeUser',
  request: {
    headers: z.object({
      'X-CSRF-Token': z
        .string()
        .openapi({
          param: { name: 'X-CSRF-Token', in: 'header', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ username: z.string().openapi({ example: 'johndoe' }) })
            .openapi({ required: ['username'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'User removed successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.string().exactOptional().openapi({ example: 'User removed successfully' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Invalid CSRF token' },
    405: { description: 'Method not allowed' },
  },
  security: [{ cookieAuth: [] }],
})

export const postApiAdminResumableCleanupPhpRoute = createRoute({
  method: 'post',
  path: '/api/admin/resumableCleanup.php',
  tags: ['Admin'],
  summary: 'Run resumable upload cleanup sweep',
  description: 'Deletes expired resumable upload temp folders using the configured TTL.',
  operationId: 'adminResumableCleanup',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              all: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Sweep all sources when supported', example: true }),
              purgeAll: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Remove all resumable temp folders, ignoring TTL',
                  example: true,
                }),
              sourceId: z
                .string()
                .exactOptional()
                .openapi({ description: 'Optional source id to sweep', example: 'local' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Cleanup results',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional().openapi({ example: true }),
              checked: z.int().exactOptional().openapi({ example: 12 }),
              removed: z.int().exactOptional().openapi({ example: 3 }),
              remaining: z.int().exactOptional().openapi({ example: 2 }),
              sources: z.int().exactOptional().openapi({ example: 1 }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: 'Bad request' },
    403: { description: 'Forbidden' },
    405: { description: 'Method not allowed' },
    500: { description: 'Server error' },
  },
  security: [{ cookieAuth: [], CsrfHeader: [] }],
})

export const postApiAdminSetEncryptionKeyPhpRoute = createRoute({
  method: 'post',
  path: '/api/admin/setEncryptionKey.php',
  tags: ['Admin'],
  summary: 'Configure encryption master key',
  description: 'Generates or clears the encryption master key file.',
  operationId: 'adminSetEncryptionKey',
  request: {
    headers: z.object({
      'X-CSRF-Token': z
        .string()
        .openapi({
          param: { name: 'X-CSRF-Token', in: 'header', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              action: z.enum(['generate', 'clear']),
              force: z.boolean().exactOptional().openapi({ example: false }),
            })
            .openapi({ required: ['action'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Operation result' },
    400: { description: 'Invalid input' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    409: { description: 'Conflict' },
    500: { description: 'Server error' },
  },
  security: [{ cookieAuth: [] }],
})

export const postApiAdminSetLicensePhpRoute = createRoute({
  method: 'post',
  path: '/api/admin/setLicense.php',
  tags: ['Admin'],
  summary: 'Set Pro license key',
  description: 'Stores the FileRise Pro license key.',
  operationId: 'adminSetLicense',
  request: {
    headers: z.object({
      'X-CSRF-Token': z
        .string()
        .openapi({
          param: { name: 'X-CSRF-Token', in: 'header', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ license: z.string().openapi({ example: 'FRPRO-XXXX-XXXX' }) })
            .openapi({ required: ['license'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'License stored' },
    400: { description: 'Invalid input' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    500: { description: 'Server error' },
  },
  security: [{ cookieAuth: [] }],
})

export const putApiAdminUpdateConfigPhpRoute = createRoute({
  method: 'put',
  path: '/api/admin/updateConfig.php',
  tags: ['Admin'],
  summary: 'Update admin configuration',
  description:
    'Merges the provided settings into the on-disk configuration and persists them. Requires an authenticated admin session and a valid CSRF token. When OIDC is enabled (disableOIDCLogin=false), `providerUrl`, `redirectUri`, and `clientId` are required and must be HTTPS (HTTP allowed only for localhost).',
  operationId: 'updateAdminConfig',
  request: {
    body: {
      content: { 'application/json': { schema: AdminUpdateConfigRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Configuration updated',
      content: { 'application/json': { schema: SimpleSuccessSchema } },
    },
    400: {
      description:
        'Validation error (e.g., bad authHeaderName, missing OIDC fields when enabled, or negative upload limit)',
      content: { 'application/json': { schema: SimpleErrorSchema } },
    },
    403: {
      description: 'Unauthorized access or invalid CSRF token',
      content: { 'application/json': { schema: SimpleErrorSchema } },
    },
    500: {
      description: 'Server error while loading or saving configuration',
      content: { 'application/json': { schema: SimpleErrorSchema } },
    },
  },
  security: [{ cookieAuth: [], CsrfHeader: [] }],
})

export const putApiAdminUpdateUserPermissionsPhpRoute = createRoute({
  method: 'put',
  path: '/api/admin/updateUserPermissions.php',
  tags: ['Users'],
  summary: 'Update user permissions',
  description:
    'Updates permissions for users. Only available to authenticated admin users. Accepts PUT or POST.',
  operationId: 'updateUserPermissions',
  request: {
    headers: z.object({
      'X-CSRF-Token': z
        .string()
        .openapi({
          param: { name: 'X-CSRF-Token', in: 'header', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              permissions: z.array(
                z
                  .object({
                    username: z.string().exactOptional().openapi({ example: 'johndoe' }),
                    folderOnly: z.boolean().exactOptional().openapi({ example: true }),
                    readOnly: z.boolean().exactOptional().openapi({ example: false }),
                    disableUpload: z.boolean().exactOptional().openapi({ example: false }),
                  })
                  .openapi({ required: [] }),
              ),
            })
            .openapi({ required: ['permissions'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'User permissions updated successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z
                .string()
                .exactOptional()
                .openapi({ example: 'User permissions updated successfully.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Invalid CSRF token' },
    405: { description: 'Method not allowed' },
  },
  security: [{ cookieAuth: [] }],
})

export const getApiAdminVirusLogPhpRoute = createRoute({
  method: 'get',
  path: '/api/admin/virusLog.php',
  tags: ['Admin'],
  summary: 'Fetch virus detections log',
  description: 'Returns virus detections as JSON or CSV (Pro only).',
  operationId: 'adminVirusLog',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            schema: { type: 'integer', minimum: 1 },
            example: 200,
          },
        }),
      format: z
        .enum(['json', 'csv'])
        .exactOptional()
        .openapi({
          param: {
            name: 'format',
            in: 'query',
            required: false,
            schema: { type: 'string', enum: ['json', 'csv'] },
            example: 'json',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Log entries or CSV' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden or Pro required' },
    500: { description: 'Server error' },
  },
  security: [{ cookieAuth: [] }],
})

export const postApiAuthAuthPhpRoute = createRoute({
  method: 'post',
  path: '/api/auth/auth.php',
  tags: ['Auth'],
  summary: 'Authenticate user',
  description:
    'Handles user authentication via OIDC or form-based credentials. For OIDC flows, processes callbacks; otherwise, performs standard authentication with optional TOTP verification.',
  operationId: 'authUser',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              username: z.string().openapi({ example: 'johndoe' }),
              password: z.string().openapi({ example: 'secretpassword' }),
              remember_me: z.boolean().exactOptional().openapi({ example: true }),
              totp_code: z.string().exactOptional().openapi({ example: '123456' }),
            })
            .openapi({ required: ['username', 'password'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Login successful; returns user info and status',
      content: {
        'application/json': {
          schema: z
            .object({
              status: z.string().exactOptional().openapi({ example: 'ok' }),
              success: z.string().exactOptional().openapi({ example: 'Login successful' }),
              username: z.string().exactOptional().openapi({ example: 'johndoe' }),
              isAdmin: z.boolean().exactOptional().openapi({ example: true }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: 'Bad Request (e.g., missing credentials)' },
    401: { description: 'Unauthorized (e.g., invalid credentials, too many attempts)' },
    429: { description: 'Too many failed login attempts' },
  },
})

export const getApiAuthCheckAuthPhpRoute = createRoute({
  method: 'get',
  path: '/api/auth/checkAuth.php',
  tags: ['Auth'],
  summary: 'Check authentication status',
  operationId: 'checkAuth',
  responses: {
    200: {
      description: 'Authenticated status or setup flag',
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                authenticated: z.boolean().exactOptional().openapi({ example: true }),
                isAdmin: z.boolean().exactOptional().openapi({ example: true }),
                totp_enabled: z.boolean().exactOptional().openapi({ example: false }),
                username: z.string().exactOptional().openapi({ example: 'johndoe' }),
                folderOnly: z.boolean().exactOptional().openapi({ example: false }),
              })
              .openapi({ required: [] }),
            z
              .object({ setup: z.boolean().exactOptional().openapi({ example: true }) })
              .openapi({ required: [] }),
          ]),
        },
      },
    },
  },
})

export const getApiAuthLoginBasicPhpRoute = createRoute({
  method: 'get',
  path: '/api/auth/login_basic.php',
  tags: ['Auth'],
  summary: 'Authenticate using HTTP Basic Authentication',
  description:
    'Performs HTTP Basic authentication. If credentials are missing, sends a 401 response prompting for Basic auth. On valid credentials, optionally handles TOTP verification and finalizes session login.',
  operationId: 'loginBasic',
  responses: {
    200: {
      description: 'Login successful; redirects to index.html',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.string().exactOptional().openapi({ example: 'Login successful' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: { description: 'Unauthorized due to missing credentials or invalid credentials.' },
    429: { description: 'Too many failed login attempts.' },
  },
})

export const postApiAuthLogoutPhpRoute = createRoute({
  method: 'post',
  path: '/api/auth/logout.php',
  tags: ['Auth'],
  summary: 'Logout user',
  description:
    'Clears the session, removes persistent login tokens, and redirects the user to the login page.',
  operationId: 'logoutUser',
  request: {
    headers: z.object({
      'X-CSRF-Token': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'X-CSRF-Token',
            in: 'header',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    302: { description: 'Redirects to the login page with a logout flag.' },
    401: { description: 'Unauthorized' },
  },
  security: [{ cookieAuth: [] }],
})

export const getApiAuthTokenPhpRoute = createRoute({
  method: 'get',
  path: '/api/auth/token.php',
  tags: ['Auth'],
  summary: 'Retrieve CSRF token and share URL',
  description: 'Returns the current CSRF token along with the configured share URL.',
  operationId: 'getToken',
  responses: {
    200: {
      description: 'CSRF token and share URL',
      content: {
        'application/json': {
          schema: z
            .object({
              csrf_token: z.string().exactOptional().openapi({ example: '0123456789abcdef...' }),
              share_url: z
                .string()
                .exactOptional()
                .openapi({ example: 'https://yourdomain.com/share.php' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postApiFileCopyFilesPhpRoute = createRoute({
  method: 'post',
  path: '/api/file/copyFiles.php',
  tags: ['Files'],
  summary: 'Copy files between folders',
  description:
    'Requires read access on source and write access on destination. Enforces folder scope and ownership.',
  operationId: 'copyFiles',
  request: {
    headers: z.object({
      'X-CSRF-Token': z
        .string()
        .openapi({
          param: {
            name: 'X-CSRF-Token',
            in: 'header',
            description: 'CSRF token from the current session',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              source: z.string().openapi({ example: 'root' }),
              destination: z.string().openapi({ example: 'userA/projects' }),
              files: z.array(z.string()).openapi({ example: ['report.pdf', 'notes.txt'] }),
            })
            .openapi({ required: ['source', 'destination', 'files'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Copy result (model-defined)' },
    400: { description: 'Invalid request or folder name' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    500: { description: 'Internal error' },
  },
  security: [{ cookieAuth: [] }],
})

export const postApiFileCreateFilePhpRoute = createRoute({
  method: 'post',
  path: '/api/file/createFile.php',
  tags: ['Files'],
  summary: 'Create an empty file',
  description: 'Requires write access on the target folder. Enforces folder-only scope.',
  operationId: 'createFile',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              folder: z.string().openapi({ example: 'root' }),
              name: z.string().openapi({ example: 'new.txt' }),
            })
            .openapi({ required: ['folder', 'name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Creation result (model-defined)' },
    400: { description: 'Invalid input' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    500: { description: 'Internal error' },
  },
  security: [{ cookieAuth: [] }],
})

export const postApiFileCreateShareLinkPhpRoute = createRoute({
  method: 'post',
  path: '/api/file/createShareLink.php',
  tags: ['Shares'],
  summary: 'Create a share link for a file',
  description:
    'Requires share permission on the folder. Non-admins must own the file unless bypassOwnership.',
  operationId: 'createShareLink',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              folder: z.string().openapi({ example: 'root' }),
              file: z.string().openapi({ example: 'invoice.pdf' }),
              expirationValue: z.int().exactOptional().openapi({ example: 60 }),
              expirationUnit: z
                .enum(['seconds', 'minutes', 'hours', 'days'])
                .exactOptional()
                .openapi({ example: 'minutes' }),
              password: z.string().exactOptional().openapi({ example: '' }),
            })
            .openapi({ required: ['folder', 'file'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Share link created',
      content: {
        'application/json': {
          schema: z
            .object({
              token: z.string().exactOptional().openapi({ example: 'abc123' }),
              url: z
                .string()
                .exactOptional()
                .openapi({ example: '/api/file/share.php?token=abc123' }),
              expires: z.int().exactOptional().openapi({ example: 1700000000 }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: 'Invalid input' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    500: { description: 'Internal error' },
  },
  security: [{ cookieAuth: [] }],
})

export const postApiFileDeleteFilesPhpRoute = createRoute({
  method: 'post',
  path: '/api/file/deleteFiles.php',
  tags: ['Files'],
  summary: 'Delete files to Trash',
  description: 'Requires write access on the folder and (for non-admins) ownership of the files.',
  operationId: 'deleteFiles',
  request: {
    headers: z.object({
      'X-CSRF-Token': z
        .string()
        .openapi({
          param: { name: 'X-CSRF-Token', in: 'header', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              folder: z.string().openapi({ example: 'root' }),
              files: z.array(z.string()).openapi({ example: ['old.docx', 'draft.md'] }),
            })
            .openapi({ required: ['folder', 'files'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Delete result (model-defined)' },
    400: { description: 'Invalid input' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    500: { description: 'Internal error' },
  },
  security: [{ cookieAuth: [] }],
})

export const postApiFileDeleteShareLinkPhpRoute = createRoute({
  method: 'post',
  path: '/api/file/deleteShareLink.php',
  tags: ['Shares'],
  summary: 'Delete a share link by token',
  description:
    'Deletes a share token. Requires an authenticated admin session and a valid CSRF token.',
  operationId: 'deleteShareLink',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({ token: z.string().openapi({ example: 'abc123' }) })
            .openapi({ required: ['token'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Deletion result (success or not found)' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
  },
  security: [{ cookieAuth: [] }],
})

export const postApiFileDeleteTrashFilesPhpRoute = createRoute({
  method: 'post',
  path: '/api/file/deleteTrashFiles.php',
  tags: ['Trash'],
  summary: 'Permanently delete Trash items (admin only)',
  operationId: 'deleteTrashFiles',
  request: {
    headers: z.object({
      'X-CSRF-Token': z
        .string()
        .openapi({
          param: { name: 'X-CSRF-Token', in: 'header', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({ deleteAll: z.boolean().openapi({ example: true }) })
              .openapi({ required: ['deleteAll'] }),
            z
              .object({
                files: z.array(z.string()).openapi({ example: ['trash/abc', 'trash/def'] }),
              })
              .openapi({ required: ['files'] }),
          ]),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Deletion result (model-defined)' },
    401: { description: 'Unauthorized' },
    403: { description: 'Admin only' },
    500: { description: 'Internal error' },
  },
  security: [{ cookieAuth: [] }],
})

export const getApiFileDownloadPhpRoute = createRoute({
  method: 'get',
  path: '/api/file/download.php',
  tags: ['Files'],
  summary: 'Download a file',
  description:
    'Requires view access (or own-only with ownership). Streams the file with appropriate Content-Type.',
  operationId: 'downloadFile',
  request: {
    query: z.object({
      folder: z
        .string()
        .openapi({
          param: {
            name: 'folder',
            in: 'query',
            required: true,
            schema: { type: 'string' },
            example: 'root',
          },
        }),
      file: z
        .string()
        .openapi({
          param: {
            name: 'file',
            in: 'query',
            required: true,
            schema: { type: 'string' },
            example: 'photo.jpg',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Binary file',
      content: {
        'application/octet-stream': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
      },
    },
    400: { description: 'Invalid folder/file' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not found' },
  },
  security: [{ cookieAuth: [] }],
})

export const postApiFileDownloadZipPhpRoute = createRoute({
  method: 'post',
  path: '/api/file/downloadZip.php',
  tags: ['Files'],
  summary: 'Queue an archive download',
  description:
    'Queues a background archive build. Requires view access (or own-only with ownership). May be gated by account flag.',
  operationId: 'downloadZip',
  request: {
    headers: z.object({
      'X-CSRF-Token': z
        .string()
        .openapi({
          param: { name: 'X-CSRF-Token', in: 'header', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              folder: z.string().openapi({ example: 'root' }),
              files: z.array(z.string()).openapi({ example: ['a.jpg', 'b.png'] }),
              format: z
                .enum(['zip', '7z'])
                .exactOptional()
                .openapi({ description: 'Archive format', example: 'zip' }),
            })
            .openapi({ required: ['folder', 'files'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Archive job queued',
      content: {
        'application/json': {
          schema: z
            .object({
              ok: z.boolean().exactOptional().openapi({ example: true }),
              token: z.string().exactOptional(),
              statusUrl: z.string().exactOptional(),
              downloadUrl: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: 'Invalid input' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    500: { description: 'Internal error' },
  },
  security: [{ cookieAuth: [] }],
})

export const getApiFileDownloadZipFilePhpRoute = createRoute({
  method: 'get',
  path: '/api/file/downloadZipFile.php',
  tags: ['Files'],
  summary: 'Download a finished archive by token',
  description: 'Streams the archive once; token is one-shot.',
  operationId: 'downloadZipFile',
  request: {
    query: z.object({
      k: z
        .string()
        .openapi({
          param: {
            name: 'k',
            in: 'query',
            description: 'Job token',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            description: 'Suggested filename',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Archive stream' },
    401: { description: 'Unauthorized' },
    404: { description: 'Not found' },
  },
  security: [{ cookieAuth: [] }],
})

export const postApiFileExtractZipPhpRoute = createRoute({
  method: 'post',
  path: '/api/file/extractZip.php',
  tags: ['Files'],
  summary: 'Extract archive file(s) into a folder',
  description:
    'Supports ZIP/7Z and RAR extraction via server tools. Requires write access on the target folder.',
  operationId: 'extractZip',
  request: {
    headers: z.object({
      'X-CSRF-Token': z
        .string()
        .openapi({
          param: { name: 'X-CSRF-Token', in: 'header', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              folder: z.string().openapi({ example: 'root' }),
              files: z.array(z.string()).openapi({ example: ['archive.zip', 'archive.7z'] }),
            })
            .openapi({ required: ['folder', 'files'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Extraction result (model-defined)' },
    400: { description: 'Invalid input' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    500: { description: 'Internal error' },
  },
  security: [{ cookieAuth: [] }],
})

export const getApiFileGetFileListPhpRoute = createRoute({
  method: 'get',
  path: '/api/file/getFileList.php',
  tags: ['Files'],
  summary: 'List files in a folder',
  description: 'Requires view access (full) or read_own (own-only results).',
  operationId: 'getFileList',
  request: {
    query: z.object({
      folder: z
        .string()
        .openapi({
          param: {
            name: 'folder',
            in: 'query',
            required: true,
            schema: { type: 'string' },
            example: 'root',
          },
        }),
      sourceId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'sourceId',
            in: 'query',
            required: false,
            schema: { type: 'string' },
            example: 'local',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Listing result (model-defined JSON)' },
    400: { description: 'Invalid folder' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    500: { description: 'Internal error' },
  },
  security: [{ cookieAuth: [] }],
})

export const getApiFileGetFileTagPhpRoute = createRoute({
  method: 'get',
  path: '/api/file/getFileTag.php',
  tags: ['Tags'],
  summary: 'Get global file tags',
  description: 'Returns tag metadata for the authenticated session.',
  operationId: 'getFileTag',
  request: {
    query: z.object({
      sourceId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'sourceId',
            in: 'query',
            description: 'Optional source id (Pro sources).',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Tags map (model-defined JSON)' } },
})

export const getApiFileGetShareLinksPhpRoute = createRoute({
  method: 'get',
  path: '/api/file/getShareLinks.php',
  tags: ['Shares'],
  summary: 'Get (raw) share links file',
  description: 'Returns the full share links JSON. Requires an authenticated admin session.',
  operationId: 'getShareLinks',
  responses: {
    200: { description: 'Share links (model-defined JSON)' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
  },
  security: [{ cookieAuth: [] }],
})

export const getApiFileGetTrashItemsPhpRoute = createRoute({
  method: 'get',
  path: '/api/file/getTrashItems.php',
  tags: ['Trash'],
  summary: 'List items in Trash (admin only)',
  operationId: 'getTrashItems',
  responses: {
    200: { description: 'Trash contents (model-defined JSON)' },
    401: { description: 'Unauthorized' },
    403: { description: 'Admin only' },
    500: { description: 'Internal error' },
  },
  security: [{ cookieAuth: [] }],
})

export const postApiFileMoveFilesPhpRoute = createRoute({
  method: 'post',
  path: '/api/file/moveFiles.php',
  tags: ['Files'],
  operationId: 'moveFiles',
  request: { body: MoveFilesRequestRequestBody },
  responses: {
    200: { description: 'Moved' },
    400: { description: 'Bad Request' },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
  },
  security: [{ cookieAuth: [] }],
})

export const putApiFileRenameFilePhpRoute = createRoute({
  method: 'put',
  path: '/api/file/renameFile.php',
  tags: ['Files'],
  summary: 'Rename a file',
  description: 'Requires write access; non-admins must own the file.',
  operationId: 'renameFile',
  request: {
    headers: z.object({
      'X-CSRF-Token': z
        .string()
        .openapi({
          param: { name: 'X-CSRF-Token', in: 'header', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              folder: z.string().openapi({ example: 'root' }),
              oldName: z.string().openapi({ example: 'old.pdf' }),
              newName: z.string().openapi({ example: 'new.pdf' }),
            })
            .openapi({ required: ['folder', 'oldName', 'newName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Rename result (model-defined)' },
    400: { description: 'Invalid input' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    500: { description: 'Internal error' },
  },
  security: [{ cookieAuth: [] }],
})

export const postApiFileRestoreFilesPhpRoute = createRoute({
  method: 'post',
  path: '/api/file/restoreFiles.php',
  tags: ['Trash'],
  summary: 'Restore files from Trash (admin only)',
  operationId: 'restoreFiles',
  request: {
    headers: z.object({
      'X-CSRF-Token': z
        .string()
        .openapi({
          param: { name: 'X-CSRF-Token', in: 'header', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ files: z.array(z.string()).openapi({ example: ['trash/12345.json'] }) })
            .openapi({ required: ['files'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Restore result (model-defined)' },
    401: { description: 'Unauthorized' },
    403: { description: 'Admin only' },
    500: { description: 'Internal error' },
  },
  security: [{ cookieAuth: [] }],
})

export const putApiFileSaveFilePhpRoute = createRoute({
  method: 'put',
  path: '/api/file/saveFile.php',
  tags: ['Files'],
  summary: 'Create or overwrite a file’s content',
  description:
    'Requires write access. Overwrite enforces ownership for non-admins. Certain executable extensions are denied.',
  operationId: 'saveFile',
  request: {
    headers: z.object({
      'X-CSRF-Token': z
        .string()
        .openapi({
          param: { name: 'X-CSRF-Token', in: 'header', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              folder: z.string().openapi({ example: 'root' }),
              fileName: z.string().openapi({ example: 'readme.txt' }),
              content: z.string().openapi({ example: 'Hello world' }),
            })
            .openapi({ required: ['folder', 'fileName', 'content'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Save result (model-defined)' },
    400: { description: 'Invalid input or disallowed extension' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    500: { description: 'Internal error' },
  },
  security: [{ cookieAuth: [] }],
})

export const postApiFileSaveFileTagPhpRoute = createRoute({
  method: 'post',
  path: '/api/file/saveFileTag.php',
  tags: ['Tags'],
  summary: 'Save tags for a file (or delete one)',
  description: 'Requires write access and (for non-admins) ownership when modifying.',
  operationId: 'saveFileTag',
  request: {
    headers: z.object({
      'X-CSRF-Token': z
        .string()
        .openapi({
          param: { name: 'X-CSRF-Token', in: 'header', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              folder: z.string().openapi({ example: 'root' }),
              file: z.string().openapi({ example: 'doc.md' }),
              sourceId: z.string().exactOptional().openapi({ example: 'local' }),
              tags: z
                .array(
                  z
                    .object({
                      name: z.string().exactOptional().openapi({ example: 'work' }),
                      color: z.string().exactOptional().openapi({ example: '#ff0000' }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({
                  example: [
                    { name: 'work', color: '#ff0000' },
                    { name: 'urgent', color: '#00ff00' },
                  ],
                }),
              deleteGlobal: z.boolean().exactOptional().openapi({ example: false }),
              tagToDelete: z.string().nullable().exactOptional().openapi({ example: null }),
            })
            .openapi({ required: ['folder', 'file'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Save result (model-defined)' },
    400: { description: 'Invalid input' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    500: { description: 'Internal error' },
  },
  security: [{ cookieAuth: [] }],
})

export const getApiFileSharePhpRoute = createRoute({
  method: 'get',
  path: '/api/file/share.php',
  tags: ['Shares'],
  summary: 'Download a shared file',
  description:
    'Returns a shared file stream. If a password is required, an HTML prompt is returned.',
  operationId: 'shareFileDownload',
  request: {
    query: z.object({
      token: z
        .string()
        .openapi({
          param: {
            name: 'token',
            in: 'query',
            description: 'Share token',
            required: true,
            schema: { type: 'string' },
          },
        }),
      pass: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'pass',
            in: 'query',
            description: 'Share password',
            required: false,
            schema: { type: 'string' },
          },
        }),
      view: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([z.literal(0), z.literal(1)]),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'view',
            in: 'query',
            description: 'Render share landing page when set to 1',
            required: false,
            schema: { type: 'integer', enum: [0, 1] },
          },
        }),
      inline: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([z.literal(0), z.literal(1)]),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'inline',
            in: 'query',
            description: 'Allow inline rendering for safe types',
            required: false,
            schema: { type: 'integer', enum: [0, 1] },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'File stream or password prompt', content: {} },
    400: { description: 'Missing/invalid token' },
    403: { description: 'Forbidden or expired' },
    404: { description: 'Not found' },
  },
})

export const getApiFileSnippetPhpRoute = createRoute({
  method: 'get',
  path: '/api/file/snippet.php',
  tags: ['Files'],
  summary: 'Get a small text snippet from a file for hover previews',
  description:
    'Returns a short UTF-8 text snippet from supported file types (txt, md, csv, code, DOCX, XLSX, PPTX, etc.) for use in quick previews.',
  operationId: 'getFileSnippet',
  request: {
    query: z.object({
      folder: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'folder',
            in: 'query',
            description: 'Logical folder path (e.g. root, clients/acme)',
            required: false,
            schema: { type: 'string' },
          },
        }),
      file: z
        .string()
        .openapi({
          param: {
            name: 'file',
            in: 'query',
            description: 'File name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Snippet JSON',
      content: {
        'application/json': {
          schema: z
            .object({ snippet: z.string().exactOptional(), truncated: z.boolean().exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: 'Missing/invalid input' },
    403: { description: 'Forbidden' },
    404: { description: 'File not found' },
    500: { description: 'Internal error' },
  },
  security: [{ cookieAuth: [] }],
})

export const getApiFileThumbnailPhpRoute = createRoute({
  method: 'get',
  path: '/api/file/thumbnail.php',
  tags: ['Files'],
  summary: 'Get a video thumbnail image',
  description: 'Returns a cached JPEG thumbnail for supported video files.',
  operationId: 'getVideoThumbnail',
  request: {
    query: z.object({
      folder: z
        .string()
        .openapi({
          param: {
            name: 'folder',
            in: 'query',
            required: true,
            schema: { type: 'string' },
            example: 'root',
          },
        }),
      file: z
        .string()
        .openapi({
          param: {
            name: 'file',
            in: 'query',
            required: true,
            schema: { type: 'string' },
            example: 'clip.mp4',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Thumbnail image',
      content: { 'image/jpeg': { schema: z.file().openapi({ type: 'string', format: 'binary' }) } },
    },
    400: { description: 'Invalid folder/file' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not found' },
  },
  security: [{ cookieAuth: [] }],
})

export const getApiFileZipStatusPhpRoute = createRoute({
  method: 'get',
  path: '/api/file/zipStatus.php',
  tags: ['Files'],
  summary: 'Check status of a background archive build',
  description: "Returns status for the authenticated user's token.",
  operationId: 'zipStatus',
  request: {
    query: z.object({
      k: z
        .string()
        .openapi({
          param: {
            name: 'k',
            in: 'query',
            description: 'Job token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Status payload' },
    401: { description: 'Unauthorized' },
    404: { description: 'Not found' },
  },
  security: [{ cookieAuth: [] }],
})

export const getApiFolderCapabilitiesPhpRoute = createRoute({
  method: 'get',
  path: '/api/folder/capabilities.php',
  tags: ['Folders'],
  summary: 'Get folder capabilities',
  description: 'Returns effective permissions and capability flags for a folder.',
  operationId: 'getFolderCapabilities',
  request: {
    query: z.object({
      folder: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'folder',
            in: 'query',
            required: false,
            schema: { type: 'string' },
            example: 'root',
          },
        }),
      sourceId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'sourceId',
            in: 'query',
            required: false,
            schema: { type: 'string' },
            example: 'local',
          },
        }),
    }),
  },
  responses: { 200: { description: 'Capabilities payload' }, 401: { description: 'Unauthorized' } },
  security: [{ cookieAuth: [] }],
})

export const postApiFolderCreateFolderPhpRoute = createRoute({
  method: 'post',
  path: '/api/folder/createFolder.php',
  tags: ['Folders'],
  summary: 'Create a new folder',
  description:
    'Requires authentication, CSRF token, and write access to the parent folder. Seeds ACL owner.',
  operationId: 'createFolder',
  request: {
    headers: z.object({
      'X-CSRF-Token': z
        .string()
        .openapi({
          param: {
            name: 'X-CSRF-Token',
            in: 'header',
            description: 'CSRF token from the current session',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              folderName: z.string().openapi({ example: 'reports' }),
              parent: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Parent folder (default root)', example: 'root' }),
            })
            .openapi({ required: ['folderName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Creation result (model-defined JSON)' },
    400: { description: 'Invalid input' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    405: { description: 'Method not allowed' },
  },
  security: [{ cookieAuth: [] }],
})

export const postApiFolderCreateShareFolderLinkPhpRoute = createRoute({
  method: 'post',
  path: '/api/folder/createShareFolderLink.php',
  tags: ['Shared Folders'],
  summary: 'Create a share link for a folder',
  description:
    'Requires authentication, CSRF token, and share permission. Non-admins must own the folder (unless bypass) and cannot share root.',
  operationId: 'createShareFolderLink',
  request: {
    headers: z.object({
      'X-CSRF-Token': z
        .string()
        .openapi({
          param: { name: 'X-CSRF-Token', in: 'header', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              folder: z.string().openapi({ example: 'team/reports' }),
              expirationValue: z.int().exactOptional().openapi({ example: 60 }),
              expirationUnit: z
                .enum(['seconds', 'minutes', 'hours', 'days'])
                .exactOptional()
                .openapi({ example: 'minutes' }),
              password: z.string().exactOptional().openapi({ example: '' }),
              allowUpload: z
                .union([z.literal(0), z.literal(1)])
                .exactOptional()
                .openapi({ example: 0 }),
              allowSubfolders: z
                .union([z.literal(0), z.literal(1)])
                .exactOptional()
                .openapi({ example: 0 }),
            })
            .openapi({ required: ['folder'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Share folder link created',
      content: {
        'application/json': {
          schema: z
            .object({
              token: z.string().exactOptional().openapi({ example: 'sf_abc123' }),
              link: z
                .string()
                .exactOptional()
                .openapi({ example: '/api/folder/shareFolder.php?token=sf_abc123' }),
              expires: z.int().exactOptional().openapi({ example: 1700000000 }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: 'Invalid input' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
  },
  security: [{ cookieAuth: [] }],
})

export const postApiFolderDeleteFolderPhpRoute = createRoute({
  method: 'post',
  path: '/api/folder/deleteFolder.php',
  tags: ['Folders'],
  summary: 'Delete a folder',
  description:
    'Requires authentication, CSRF token, write scope, and (for non-admins) folder ownership.',
  operationId: 'deleteFolder',
  request: {
    headers: z.object({
      'X-CSRF-Token': z
        .string()
        .openapi({
          param: { name: 'X-CSRF-Token', in: 'header', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              folder: z.string().openapi({ example: 'userA/reports' }),
              sourceId: z.string().exactOptional().openapi({ example: 'local' }),
            })
            .openapi({ required: ['folder'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Deletion result (model-defined JSON)' },
    400: { description: 'Invalid input' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    405: { description: 'Method not allowed' },
  },
  security: [{ cookieAuth: [] }],
})

export const postApiFolderDeleteShareFolderLinkPhpRoute = createRoute({
  method: 'post',
  path: '/api/folder/deleteShareFolderLink.php',
  tags: ['Shared Folders', 'Admin'],
  summary: 'Delete a shared-folder link by token (admin only)',
  description: 'Requires authentication, CSRF token, and admin privileges.',
  operationId: 'deleteShareFolderLink',
  request: {
    headers: z.object({
      'X-CSRF-Token': z
        .string()
        .openapi({
          param: { name: 'X-CSRF-Token', in: 'header', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ token: z.string().openapi({ example: 'sf_abc123' }) })
            .openapi({ required: ['token'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Deleted' },
    400: { description: 'No token provided' },
    401: { description: 'Unauthorized' },
    403: { description: 'Admin only' },
    404: { description: 'Not found' },
  },
  security: [{ cookieAuth: [] }],
})

export const getApiFolderDownloadSharedFilePhpRoute = createRoute({
  method: 'get',
  path: '/api/folder/downloadSharedFile.php',
  tags: ['Shared Folders'],
  summary: 'Download a file from a shared folder (by token)',
  description: 'Public endpoint; validates token and file name, then streams the file.',
  operationId: 'downloadSharedFile',
  request: {
    query: z.object({
      token: z
        .string()
        .openapi({
          param: { name: 'token', in: 'query', required: true, schema: { type: 'string' } },
        }),
      pass: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'pass', in: 'query', required: false, schema: { type: 'string' } },
        }),
      file: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'file',
            in: 'query',
            required: false,
            schema: { type: 'string' },
            example: 'report.pdf',
          },
        }),
      path: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'path',
            in: 'query',
            required: false,
            schema: { type: 'string' },
            example: 'subfolder/report.pdf',
          },
        }),
      inline: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([z.literal(0), z.literal(1)]),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'inline',
            in: 'query',
            description: 'Allow inline rendering for safe types',
            required: false,
            schema: { type: 'integer', enum: [0, 1] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Binary file',
      content: {
        'application/octet-stream': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
      },
    },
    400: { description: 'Invalid input' },
    403: { description: 'Password required' },
    404: { description: 'Not found' },
  },
})

export const getApiFolderDownloadSharedFolderPhpRoute = createRoute({
  method: 'get',
  path: '/api/folder/downloadSharedFolder.php',
  tags: ['Shared Folders'],
  summary: 'Download a shared folder as a ZIP',
  description: 'Public endpoint; validates token/path and streams a ZIP archive.',
  operationId: 'downloadSharedFolder',
  request: {
    query: z.object({
      token: z
        .string()
        .openapi({
          param: { name: 'token', in: 'query', required: true, schema: { type: 'string' } },
        }),
      pass: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'pass', in: 'query', required: false, schema: { type: 'string' } },
        }),
      path: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'path',
            in: 'query',
            description: 'Subfolder path within the shared folder',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'ZIP archive',
      content: {
        'application/zip': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
    400: { description: 'Invalid input' },
    403: { description: 'Password required' },
    404: { description: 'Not found' },
  },
})

export const postApiFolderEncryptionJobStartPhpRoute = createRoute({
  method: 'post',
  path: '/api/folder/encryptionJobStart.php',
  tags: ['Folders'],
  summary: 'Start folder encryption/decryption job',
  description: 'Queues an encryption or decryption job for a folder.',
  operationId: 'startFolderEncryptionJob',
  request: {
    headers: z.object({
      'X-CSRF-Token': z
        .string()
        .openapi({
          param: { name: 'X-CSRF-Token', in: 'header', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              folder: z.string().openapi({ example: 'team/reports' }),
              mode: z.enum(['encrypt', 'decrypt']),
              totalFiles: z.int().exactOptional().openapi({ example: 0 }),
              totalBytes: z.int().exactOptional().openapi({ example: 0 }),
            })
            .openapi({ required: ['folder', 'mode'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Job started' },
    400: { description: 'Invalid input' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    405: { description: 'Method not allowed' },
    409: { description: 'Conflict' },
    500: { description: 'Server error' },
  },
  security: [{ cookieAuth: [] }],
})

export const getApiFolderEncryptionJobStatusPhpRoute = createRoute({
  method: 'get',
  path: '/api/folder/encryptionJobStatus.php',
  tags: ['Folders'],
  summary: 'Get folder encryption job status',
  operationId: 'getFolderEncryptionJobStatus',
  request: {
    query: z.object({
      jobId: z
        .string()
        .openapi({
          param: {
            name: 'jobId',
            in: 'query',
            description: 'Job id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Job status' },
    400: { description: 'Invalid job id' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Job not found' },
    500: { description: 'Server error' },
  },
  security: [{ cookieAuth: [] }],
})

export const postApiFolderEncryptionJobTickPhpRoute = createRoute({
  method: 'post',
  path: '/api/folder/encryptionJobTick.php',
  tags: ['Folders'],
  summary: 'Process encryption job tick',
  description: 'Processes a small batch for an active encryption/decryption job.',
  operationId: 'tickFolderEncryptionJob',
  request: {
    headers: z.object({
      'X-CSRF-Token': z
        .string()
        .openapi({
          param: { name: 'X-CSRF-Token', in: 'header', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              jobId: z.string().openapi({ example: 'a1b2c3d4e5f6' }),
              maxFiles: z.int().exactOptional().openapi({ example: 2 }),
            })
            .openapi({ required: ['jobId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Tick result' },
    400: { description: 'Invalid input' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Job not found' },
    405: { description: 'Method not allowed' },
    500: { description: 'Server error' },
  },
  security: [{ cookieAuth: [] }],
})

export const getApiFolderEncryptionPlanPhpRoute = createRoute({
  method: 'get',
  path: '/api/folder/encryptionPlan.php',
  tags: ['Folders'],
  summary: 'Plan folder encryption/decryption',
  description: 'Scans a folder to estimate file/byte counts for encryption jobs.',
  operationId: 'planFolderEncryption',
  request: {
    query: z.object({
      folder: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'folder',
            in: 'query',
            required: false,
            schema: { type: 'string' },
            example: 'root',
          },
        }),
      mode: z
        .enum(['encrypt', 'decrypt'])
        .exactOptional()
        .openapi({
          param: {
            name: 'mode',
            in: 'query',
            required: false,
            schema: { type: 'string', enum: ['encrypt', 'decrypt'] },
            example: 'encrypt',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Plan result' },
    400: { description: 'Invalid input' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    409: { description: 'Conflict' },
    500: { description: 'Server error' },
  },
  security: [{ cookieAuth: [] }],
})

export const getApiFolderGetFolderColorsPhpRoute = createRoute({
  method: 'get',
  path: '/api/folder/getFolderColors.php',
  tags: ['Folders'],
  summary: 'Get folder color map',
  operationId: 'getFolderColors',
  responses: {
    200: { description: 'Folder color map' },
    401: { description: 'Unauthorized' },
    500: { description: 'Server error' },
  },
  security: [{ cookieAuth: [] }],
})

export const getApiFolderGetFolderEncryptionPhpRoute = createRoute({
  method: 'get',
  path: '/api/folder/getFolderEncryption.php',
  tags: ['Folders'],
  summary: 'Get folder encryption capabilities',
  operationId: 'getFolderEncryption',
  request: {
    query: z.object({
      folder: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'folder',
            in: 'query',
            required: false,
            schema: { type: 'string' },
            example: 'root',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Encryption capability payload' },
    401: { description: 'Unauthorized' },
  },
  security: [{ cookieAuth: [] }],
})

export const getApiFolderGetFolderListPhpRoute = createRoute({
  method: 'get',
  path: '/api/folder/getFolderList.php',
  tags: ['Folders'],
  summary: 'List folders (optionally under a parent)',
  description:
    'Requires authentication. Non-admins see folders for which they have full view or own-only access.',
  operationId: 'getFolderList',
  request: {
    query: z.object({
      folder: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'folder',
            in: 'query',
            description:
              "Parent folder to include and descend (default all); use 'root' for top-level",
            required: false,
            schema: { type: 'string' },
            example: 'root',
          },
        }),
      sourceId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'sourceId',
            in: 'query',
            description: 'Optional source id (admin can target disabled sources)',
            required: false,
            schema: { type: 'string' },
            example: 'local',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of folders',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                folder: z.string().exactOptional().openapi({ example: 'team/reports' }),
                fileCount: z.int().exactOptional().openapi({ example: 12 }),
                metadataFile: z.string().exactOptional().openapi({ example: '/path/to/meta.json' }),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
    400: { description: 'Invalid folder' },
    401: { description: 'Unauthorized' },
  },
  security: [{ cookieAuth: [] }],
})

export const getApiFolderGetShareFolderLinksPhpRoute = createRoute({
  method: 'get',
  path: '/api/folder/getShareFolderLinks.php',
  tags: ['Shared Folders', 'Admin'],
  summary: 'List active shared-folder links (admin only)',
  description: 'Returns all non-expired shared-folder links. Admin-only.',
  operationId: 'getShareFolderLinks',
  responses: {
    200: { description: 'Active share-folder links (model-defined JSON)' },
    401: { description: 'Unauthorized' },
    403: { description: 'Admin only' },
  },
  security: [{ cookieAuth: [] }],
})

export const getApiFolderIsEmptyPhpRoute = createRoute({
  method: 'get',
  path: '/api/folder/isEmpty.php',
  tags: ['Folders'],
  summary: 'Check if folder is empty',
  description: 'ACL-aware check used for folder tree icons.',
  operationId: 'folderIsEmpty',
  request: {
    query: z.object({
      folder: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'folder',
            in: 'query',
            required: false,
            schema: { type: 'string' },
            example: 'root',
          },
        }),
      sourceId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'sourceId',
            in: 'query',
            required: false,
            schema: { type: 'string' },
            example: 'local',
          },
        }),
      deep: z
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
            name: 'deep',
            in: 'query',
            description: 'When 1, return recursive totals.',
            required: false,
            schema: { type: 'integer' },
            example: 1,
          },
        }),
      depth: z
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
            name: 'depth',
            in: 'query',
            description: 'Max recursive depth when deep=1 (0 = unlimited).',
            required: false,
            schema: { type: 'integer' },
            example: 2,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Stats payload' }, 401: { description: 'Unauthorized' } },
  security: [{ cookieAuth: [] }],
})

export const getApiFolderListChildrenPhpRoute = createRoute({
  method: 'get',
  path: '/api/folder/listChildren.php',
  tags: ['Folders'],
  summary: 'List folder children',
  description: 'Returns a paged list of child folders for tree navigation.',
  operationId: 'listFolderChildren',
  request: {
    query: z.object({
      folder: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'folder',
            in: 'query',
            required: false,
            schema: { type: 'string' },
            example: 'root',
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(2000),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            schema: { type: 'integer', maximum: 2000, minimum: 1 },
            example: 500,
          },
        }),
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'cursor', in: 'query', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'Child list payload' }, 401: { description: 'Unauthorized' } },
  security: [{ cookieAuth: [] }],
})

export const postApiFolderMoveFolderPhpRoute = createRoute({
  method: 'post',
  path: '/api/folder/moveFolder.php',
  tags: ['Folders'],
  summary: 'Move or copy a folder',
  description: 'Moves (default) or copies a folder into a destination folder.',
  operationId: 'moveFolder',
  request: {
    headers: z.object({
      'X-CSRF-Token': z
        .string()
        .openapi({
          param: { name: 'X-CSRF-Token', in: 'header', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              source: z.string().openapi({ example: 'team/q1' }),
              destination: z.string().openapi({ example: 'archive' }),
              mode: z.string().exactOptional().openapi({ example: 'move' }),
              sourceId: z.string().exactOptional().openapi({ example: 'local' }),
              destSourceId: z.string().exactOptional().openapi({ example: 's3-main' }),
            })
            .openapi({ required: ['source', 'destination'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Move result (model-defined JSON)' },
    400: { description: 'Invalid input' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    405: { description: 'Method not allowed' },
    500: { description: 'Server error' },
  },
  security: [{ cookieAuth: [] }],
})

export const postApiFolderRenameFolderPhpRoute = createRoute({
  method: 'post',
  path: '/api/folder/renameFolder.php',
  tags: ['Folders'],
  summary: 'Rename or move a folder',
  description:
    'Requires authentication, CSRF token, scope checks on old and new paths, and (for non-admins) ownership of the source folder.',
  operationId: 'renameFolder',
  request: {
    headers: z.object({
      'X-CSRF-Token': z
        .string()
        .openapi({
          param: { name: 'X-CSRF-Token', in: 'header', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              oldFolder: z.string().openapi({ example: 'team/q1' }),
              newFolder: z.string().openapi({ example: 'team/quarter-1' }),
            })
            .openapi({ required: ['oldFolder', 'newFolder'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Rename result (model-defined JSON)' },
    400: { description: 'Invalid input' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    405: { description: 'Method not allowed' },
  },
  security: [{ cookieAuth: [] }],
})

export const postApiFolderSaveFolderColorPhpRoute = createRoute({
  method: 'post',
  path: '/api/folder/saveFolderColor.php',
  tags: ['Folders'],
  summary: 'Save folder color',
  description: 'Sets or clears a custom folder color.',
  operationId: 'saveFolderColor',
  request: {
    headers: z.object({
      'X-CSRF-Token': z
        .string()
        .openapi({
          param: { name: 'X-CSRF-Token', in: 'header', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              folder: z.string().openapi({ example: 'team/reports' }),
              color: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Empty string clears', example: '#ff9900' }),
            })
            .openapi({ required: ['folder'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Save result' },
    400: { description: 'Invalid input' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    405: { description: 'Method not allowed' },
    500: { description: 'Server error' },
  },
  security: [{ cookieAuth: [] }],
})

export const postApiFolderSetFolderEncryptionPhpRoute = createRoute({
  method: 'post',
  path: '/api/folder/setFolderEncryption.php',
  tags: ['Folders'],
  summary: 'Set folder encryption state',
  description: 'Enables or disables folder encryption (v1 compatibility).',
  operationId: 'setFolderEncryption',
  request: {
    headers: z.object({
      'X-CSRF-Token': z
        .string()
        .openapi({
          param: { name: 'X-CSRF-Token', in: 'header', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              folder: z.string().openapi({ example: 'team/reports' }),
              encrypted: z.boolean().openapi({ example: true }),
            })
            .openapi({ required: ['folder', 'encrypted'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Update result' },
    400: { description: 'Invalid input' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Folder not found' },
    409: { description: 'Conflict' },
    500: { description: 'Server error' },
  },
  security: [{ cookieAuth: [] }],
})

export const getApiFolderShareFolderPhpRoute = createRoute({
  method: 'get',
  path: '/api/folder/shareFolder.php',
  tags: ['Shared Folders'],
  summary: 'Open a shared folder by token (HTML UI)',
  description:
    'If the share is password-protected and no password is supplied, an HTML password form is returned. Otherwise renders an HTML listing with optional upload form.',
  operationId: 'shareFolder',
  request: {
    query: z.object({
      token: z
        .string()
        .openapi({
          param: { name: 'token', in: 'query', required: true, schema: { type: 'string' } },
        }),
      pass: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'pass', in: 'query', required: false, schema: { type: 'string' } },
        }),
      path: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'path',
            in: 'query',
            description: 'Subfolder path within the shared folder',
            required: false,
            schema: { type: 'string' },
          },
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            required: false,
            schema: { type: 'integer', minimum: 1 },
            example: 1,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'HTML page (password form or folder listing)', content: {} },
    400: { description: 'Missing/invalid token' },
    403: { description: 'Forbidden or wrong password' },
  },
})

export const postApiFolderUploadToSharedFolderPhpRoute = createRoute({
  method: 'post',
  path: '/api/folder/uploadToSharedFolder.php',
  tags: ['Shared Folders'],
  summary: 'Upload a file into a shared folder (by token)',
  description:
    'Public form-upload endpoint. Only allowed when the share link has uploads enabled. On success responds with a redirect to the share page.',
  operationId: 'uploadToSharedFolder',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              token: z.string().openapi({ description: 'Share token' }),
              pass: z
                .string()
                .exactOptional()
                .openapi({ description: 'Share password (if required)' }),
              path: z
                .string()
                .exactOptional()
                .openapi({ description: 'Optional subfolder path within the shared folder' }),
              fileToUpload: z
                .file()
                .openapi({ type: 'string', format: 'binary', description: 'File to upload' }),
            })
            .openapi({ required: ['token', 'fileToUpload'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    302: { description: 'Redirect to /api/folder/shareFolder.php?token=...' },
    400: { description: 'Upload error or invalid input' },
    405: { description: 'Method not allowed' },
  },
})

export const getApiMediaGetProgressPhpRoute = createRoute({
  method: 'get',
  path: '/api/media/getProgress.php',
  tags: ['Media'],
  summary: 'Get media playback progress',
  operationId: 'getMediaProgress',
  request: {
    query: z.object({
      folder: z
        .string()
        .openapi({
          param: {
            name: 'folder',
            in: 'query',
            required: true,
            schema: { type: 'string' },
            example: 'root',
          },
        }),
      file: z
        .string()
        .openapi({
          param: {
            name: 'file',
            in: 'query',
            required: true,
            schema: { type: 'string' },
            example: 'video.mp4',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Progress state' },
    400: { description: 'Invalid input' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    500: { description: 'Server error' },
  },
  security: [{ cookieAuth: [] }],
})

export const getApiMediaGetViewedMapPhpRoute = createRoute({
  method: 'get',
  path: '/api/media/getViewedMap.php',
  tags: ['Media'],
  summary: 'Get viewed media map',
  operationId: 'getViewedMediaMap',
  request: {
    query: z.object({
      folder: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'folder',
            in: 'query',
            required: false,
            schema: { type: 'string' },
            example: 'root',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Viewed map' },
    400: { description: 'Invalid input' },
    401: { description: 'Unauthorized' },
    500: { description: 'Server error' },
  },
  security: [{ cookieAuth: [] }],
})

export const postApiMediaUpdateProgressPhpRoute = createRoute({
  method: 'post',
  path: '/api/media/updateProgress.php',
  tags: ['Media'],
  summary: 'Update media playback progress',
  operationId: 'updateMediaProgress',
  request: {
    headers: z.object({
      'X-CSRF-Token': z
        .string()
        .openapi({
          param: { name: 'X-CSRF-Token', in: 'header', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              folder: z.string().openapi({ example: 'root' }),
              file: z.string().openapi({ example: 'video.mp4' }),
              seconds: z.float32().exactOptional().openapi({ example: 42.5 }),
              duration: z.float32().nullable().exactOptional().openapi({ example: 3600 }),
              completed: z.boolean().nullable().exactOptional(),
              clear: z.boolean().exactOptional().openapi({ example: false }),
            })
            .openapi({ required: ['folder', 'file'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Update result' },
    400: { description: 'Invalid input' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    500: { description: 'Server error' },
  },
  security: [{ cookieAuth: [] }],
})

export const postApiOnlyofficeCallbackPhpRoute = createRoute({
  method: 'post',
  path: '/api/onlyoffice/callback.php',
  tags: ['ONLYOFFICE'],
  summary: 'ONLYOFFICE save callback',
  request: {
    query: z.object({
      sourceId: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'sourceId', in: 'query', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'OK / error JSON' } },
})

export const getApiOnlyofficeConfigPhpRoute = createRoute({
  method: 'get',
  path: '/api/onlyoffice/config.php',
  tags: ['ONLYOFFICE'],
  summary: 'Get editor config for a file (signed URLs, callback)',
  request: {
    query: z.object({
      folder: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'folder', in: 'query', schema: { type: 'string' }, required: false },
        }),
      file: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'file', in: 'query', schema: { type: 'string' }, required: false },
        }),
      sourceId: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'sourceId', in: 'query', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'Editor config' },
    403: { description: 'Forbidden' },
    404: { description: 'Disabled / Not found' },
  },
})

export const getApiOnlyofficeSignedDownloadPhpRoute = createRoute({
  method: 'get',
  path: '/api/onlyoffice/signed-download.php',
  tags: ['ONLYOFFICE'],
  summary: 'Serve a signed file blob to ONLYOFFICE',
  request: {
    query: z.object({
      tok: z
        .string()
        .openapi({
          param: { name: 'tok', in: 'query', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'File stream' },
    403: { description: 'Signature/expiry invalid' },
  },
})

export const getApiOnlyofficeStatusPhpRoute = createRoute({
  method: 'get',
  path: '/api/onlyoffice/status.php',
  tags: ['ONLYOFFICE'],
  summary: 'ONLYOFFICE availability & supported extensions',
  responses: { 200: { description: 'Status JSON' } },
})

export const getApiProAuditExportCsvPhpRoute = createRoute({
  method: 'get',
  path: '/api/pro/audit/exportCsv.php',
  tags: ['Pro'],
  summary: 'Export audit log as CSV',
  description: 'Exports audit log entries as CSV.',
  operationId: 'proAuditExportCsv',
  request: {
    query: z.object({
      folder: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'folder',
            in: 'query',
            required: false,
            schema: { type: 'string' },
            example: 'team',
          },
        }),
      user: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'user', in: 'query', required: false, schema: { type: 'string' } },
        }),
      action: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'action', in: 'query', required: false, schema: { type: 'string' } },
        }),
      source: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'source', in: 'query', required: false, schema: { type: 'string' } },
        }),
      storage: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'storage', in: 'query', required: false, schema: { type: 'string' } },
        }),
      from: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'from',
            in: 'query',
            description: 'ISO timestamp or epoch',
            required: false,
            schema: { type: 'string' },
          },
        }),
      to: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'to', in: 'query', required: false, schema: { type: 'string' } },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(5000),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            schema: { type: 'integer', maximum: 5000, minimum: 1 },
            example: 1000,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'CSV stream', content: {} },
    400: { description: 'Invalid input' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden or Pro required' },
    500: { description: 'Server error' },
  },
  security: [{ cookieAuth: [] }],
})

export const getApiProAuditListPhpRoute = createRoute({
  method: 'get',
  path: '/api/pro/audit/list.php',
  tags: ['Pro'],
  summary: 'List audit log entries',
  description: 'Returns audit log entries for admins, or for a specific folder when non-admin.',
  operationId: 'proAuditList',
  request: {
    query: z.object({
      folder: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'folder',
            in: 'query',
            required: false,
            schema: { type: 'string' },
            example: 'team',
          },
        }),
      user: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'user', in: 'query', required: false, schema: { type: 'string' } },
        }),
      action: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'action', in: 'query', required: false, schema: { type: 'string' } },
        }),
      source: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'source', in: 'query', required: false, schema: { type: 'string' } },
        }),
      storage: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'storage', in: 'query', required: false, schema: { type: 'string' } },
        }),
      from: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'from',
            in: 'query',
            description: 'ISO timestamp or epoch',
            required: false,
            schema: { type: 'string' },
          },
        }),
      to: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'to', in: 'query', required: false, schema: { type: 'string' } },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(500),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            schema: { type: 'integer', maximum: 500, minimum: 1 },
            example: 200,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Audit list payload' },
    400: { description: 'Invalid input' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden or Pro required' },
  },
  security: [{ cookieAuth: [] }],
})

export const getApiProDiskUsageChildrenPhpRoute = createRoute({
  method: 'get',
  path: '/api/pro/diskUsageChildren.php',
  tags: ['Pro'],
  summary: 'Get disk usage children',
  description: 'Returns per-folder usage children for the storage explorer (Pro).',
  operationId: 'proDiskUsageChildren',
  request: {
    query: z.object({
      folder: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'folder',
            in: 'query',
            required: false,
            schema: { type: 'string' },
            example: 'root',
          },
        }),
      sourceId: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'sourceId', in: 'query', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'Children payload' },
    403: { description: 'Forbidden or Pro required' },
    404: { description: 'Snapshot not found' },
    500: { description: 'Server error' },
  },
  security: [{ cookieAuth: [] }],
})

export const postApiProDiskUsageDeleteFilePermanentPhpRoute = createRoute({
  method: 'post',
  path: '/api/pro/diskUsageDeleteFilePermanent.php',
  tags: ['Pro'],
  summary: 'Permanently delete a file',
  description: 'Deletes a single file from storage explorer (Pro, admin).',
  operationId: 'proDiskUsageDeleteFilePermanent',
  request: {
    headers: z.object({
      'X-CSRF-Token': z
        .string()
        .openapi({
          param: { name: 'X-CSRF-Token', in: 'header', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              folder: z.string().exactOptional().openapi({ example: 'root' }),
              name: z.string().openapi({ example: 'large.zip' }),
              sourceId: z.string().exactOptional().openapi({ example: 'local' }),
            })
            .openapi({ required: ['name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Delete result' },
    400: { description: 'Invalid input' },
    403: { description: 'Forbidden or Pro required' },
    405: { description: 'Method not allowed' },
    500: { description: 'Server error' },
  },
  security: [{ cookieAuth: [] }],
})

export const postApiProDiskUsageDeleteFolderRecursivePhpRoute = createRoute({
  method: 'post',
  path: '/api/pro/diskUsageDeleteFolderRecursive.php',
  tags: ['Pro'],
  summary: 'Permanently delete a folder',
  description: 'Recursively deletes a folder from storage explorer (Pro, admin).',
  operationId: 'proDiskUsageDeleteFolderRecursive',
  request: {
    headers: z.object({
      'X-CSRF-Token': z
        .string()
        .openapi({
          param: { name: 'X-CSRF-Token', in: 'header', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              folder: z.string().openapi({ example: 'team/archive' }),
              sourceId: z.string().exactOptional().openapi({ example: 'local' }),
            })
            .openapi({ required: ['folder'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Delete result' },
    400: { description: 'Invalid input' },
    403: { description: 'Forbidden or Pro required' },
    405: { description: 'Method not allowed' },
    500: { description: 'Server error' },
  },
  security: [{ cookieAuth: [] }],
})

export const getApiProDiskUsageTopFilesPhpRoute = createRoute({
  method: 'get',
  path: '/api/pro/diskUsageTopFiles.php',
  tags: ['Pro'],
  summary: 'Get top files by size',
  description: 'Returns the largest files across the instance (Pro).',
  operationId: 'proDiskUsageTopFiles',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            schema: { type: 'integer', minimum: 1 },
            example: 100,
          },
        }),
      sourceId: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'sourceId', in: 'query', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'Top files payload' },
    403: { description: 'Forbidden or Pro required' },
    404: { description: 'Snapshot not found' },
    500: { description: 'Server error' },
  },
  security: [{ cookieAuth: [] }],
})

export const getApiProGroupsListPhpRoute = createRoute({
  method: 'get',
  path: '/api/pro/groups/list.php',
  tags: ['Pro'],
  summary: 'List Pro groups',
  description: 'Returns user groups defined in FileRise Pro.',
  operationId: 'proGroupsList',
  responses: {
    200: { description: 'Groups payload' },
    400: { description: 'Invalid input' },
    403: { description: 'Forbidden or Pro required' },
    500: { description: 'Server error' },
  },
  security: [{ cookieAuth: [] }],
})

export const postApiProGroupsSavePhpRoute = createRoute({
  method: 'post',
  path: '/api/pro/groups/save.php',
  tags: ['Pro'],
  summary: 'Save Pro groups',
  description: 'Saves group definitions in FileRise Pro.',
  operationId: 'proGroupsSave',
  request: {
    headers: z.object({
      'X-CSRF-Token': z
        .string()
        .openapi({
          param: { name: 'X-CSRF-Token', in: 'header', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z.object({ groups: z.object({}) }).openapi({ required: ['groups'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Save result' },
    400: { description: 'Invalid input' },
    403: { description: 'Forbidden or Pro required' },
    405: { description: 'Method not allowed' },
    500: { description: 'Server error' },
  },
  security: [{ cookieAuth: [] }],
})

export const getApiProPortalsGetPhpRoute = createRoute({
  method: 'get',
  path: '/api/pro/portals/get.php',
  tags: ['Pro'],
  summary: 'Get portal by slug',
  description: 'Returns portal metadata (public).',
  operationId: 'proPortalsGet',
  request: {
    query: z.object({
      slug: z
        .string()
        .openapi({
          param: {
            name: 'slug',
            in: 'query',
            required: true,
            schema: { type: 'string' },
            example: 'client-portal',
          },
        }),
    }),
  },
  responses: { 200: { description: 'Portal payload' }, 404: { description: 'Portal not found' } },
})

export const getApiProPortalsListPhpRoute = createRoute({
  method: 'get',
  path: '/api/pro/portals/list.php',
  tags: ['Pro'],
  summary: 'List portals',
  description: 'Returns all portals (admin only, Pro).',
  operationId: 'proPortalsList',
  responses: {
    200: { description: 'Portals payload' },
    400: { description: 'Invalid input' },
    403: { description: 'Forbidden or Pro required' },
    500: { description: 'Server error' },
  },
  security: [{ cookieAuth: [] }],
})

export const getApiProPortalsPublicMetaPhpRoute = createRoute({
  method: 'get',
  path: '/api/pro/portals/publicMeta.php',
  tags: ['Pro'],
  summary: 'Get public portal metadata',
  description: 'Returns the public metadata needed for the portal login page.',
  operationId: 'proPortalsPublicMeta',
  request: {
    query: z.object({
      slug: z
        .string()
        .openapi({
          param: {
            name: 'slug',
            in: 'query',
            required: true,
            schema: { type: 'string' },
            example: 'client-portal',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Public portal payload' },
    400: { description: 'Missing slug' },
    404: { description: 'Portal not found or Pro inactive' },
    410: { description: 'Portal expired' },
    500: { description: 'Server error' },
  },
})

export const postApiProPortalsSavePhpRoute = createRoute({
  method: 'post',
  path: '/api/pro/portals/save.php',
  tags: ['Pro'],
  summary: 'Save portals',
  description: 'Saves portal definitions (admin only, Pro).',
  operationId: 'proPortalsSave',
  request: {
    headers: z.object({
      'X-CSRF-Token': z
        .string()
        .openapi({
          param: { name: 'X-CSRF-Token', in: 'header', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z.object({ portals: z.object({}) }).openapi({ required: ['portals'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Save result' },
    400: { description: 'Invalid input' },
    403: { description: 'Forbidden or Pro required' },
    405: { description: 'Method not allowed' },
    500: { description: 'Server error' },
  },
  security: [{ cookieAuth: [] }],
})

export const getApiProPortalsSubmissionsPhpRoute = createRoute({
  method: 'get',
  path: '/api/pro/portals/submissions.php',
  tags: ['Pro'],
  summary: 'List portal submissions',
  description: 'Returns submissions for a portal (admin only, Pro).',
  operationId: 'proPortalsSubmissions',
  request: {
    query: z.object({
      slug: z
        .string()
        .openapi({
          param: {
            name: 'slug',
            in: 'query',
            required: true,
            schema: { type: 'string' },
            example: 'client-portal',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Submissions payload' },
    400: { description: 'Missing slug' },
    403: { description: 'Forbidden or Pro required' },
    500: { description: 'Server error' },
  },
  security: [{ cookieAuth: [] }],
})

export const postApiProPortalsSubmitFormPhpRoute = createRoute({
  method: 'post',
  path: '/api/pro/portals/submitForm.php',
  tags: ['Pro'],
  summary: 'Submit portal form',
  description: 'Submits a portal form payload (requires auth, Pro).',
  operationId: 'proPortalsSubmitForm',
  request: {
    headers: z.object({
      'X-CSRF-Token': z
        .string()
        .openapi({
          param: { name: 'X-CSRF-Token', in: 'header', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              slug: z.string().openapi({ example: 'client-portal' }),
              form: z
                .object({
                  name: z.string().exactOptional().openapi({ example: 'Jane Doe' }),
                  email: z.string().exactOptional().openapi({ example: 'jane@example.com' }),
                  reference: z.string().exactOptional().openapi({ example: 'PO-123' }),
                  notes: z.string().exactOptional().openapi({ example: 'Please review' }),
                })
                .openapi({ required: [] }),
            })
            .openapi({ required: ['slug', 'form'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Submission saved' },
    400: { description: 'Invalid input' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden or Pro required' },
    405: { description: 'Method not allowed' },
    500: { description: 'Server error' },
  },
  security: [{ cookieAuth: [] }],
})

export const postApiProPortalsUploadLogoPhpRoute = createRoute({
  method: 'post',
  path: '/api/pro/portals/uploadLogo.php',
  tags: ['Pro'],
  summary: 'Upload portal logo',
  description: 'Uploads a portal logo image (admin only, Pro).',
  operationId: 'proPortalsUploadLogo',
  request: {
    headers: z.object({
      'X-CSRF-Token': z
        .string()
        .openapi({
          param: { name: 'X-CSRF-Token', in: 'header', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              portal_logo: z.file().openapi({ type: 'string', format: 'binary' }),
              slug: z.string().exactOptional().openapi({ example: 'client-portal' }),
            })
            .openapi({ required: ['portal_logo'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Upload result' },
    400: { description: 'Invalid input' },
    403: { description: 'Forbidden or Pro required' },
    500: { description: 'Server error' },
  },
  security: [{ cookieAuth: [] }],
})

export const getApiProSearchQueryPhpRoute = createRoute({
  method: 'get',
  path: '/api/pro/search/query.php',
  tags: ['Pro'],
  summary: 'Search files (Pro)',
  description: 'Searches across folders using the Pro search index.',
  operationId: 'proSearchQuery',
  request: {
    query: z.object({
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'q',
            in: 'query',
            description: 'Search query',
            required: false,
            schema: { type: 'string' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            schema: { type: 'integer', minimum: 1 },
            example: 50,
          },
        }),
      sourceId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'sourceId',
            in: 'query',
            description: "Source id or 'all'",
            required: false,
            schema: { type: 'string' },
          },
        }),
      force: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'force',
            in: 'query',
            description: 'Admins only: force refresh',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Search results' },
    400: { description: 'Invalid input' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden or Pro required' },
    503: { description: 'Search disabled' },
  },
  security: [{ cookieAuth: [] }],
})

export const postApiProUploadBrandLogoPhpRoute = createRoute({
  method: 'post',
  path: '/api/pro/uploadBrandLogo.php',
  tags: ['Pro'],
  summary: 'Upload branding logo',
  description: 'Uploads a branding logo image (admin only, Pro).',
  operationId: 'proUploadBrandLogo',
  request: {
    headers: z.object({
      'X-CSRF-Token': z
        .string()
        .openapi({
          param: { name: 'X-CSRF-Token', in: 'header', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({ brand_logo: z.file().openapi({ type: 'string', format: 'binary' }) })
            .openapi({ required: ['brand_logo'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Upload result' },
    400: { description: 'Invalid input' },
    403: { description: 'Forbidden or Pro required' },
    500: { description: 'Server error' },
  },
  security: [{ cookieAuth: [] }],
})

export const postApiProfileChangePasswordPhpRoute = createRoute({
  method: 'post',
  path: '/api/profile/changePassword.php',
  tags: ['Users'],
  summary: 'Change user password',
  description:
    'Allows an authenticated user to change their password by verifying the old password and updating to a new one.',
  operationId: 'changePassword',
  request: {
    headers: z.object({
      'X-CSRF-Token': z
        .string()
        .openapi({
          param: { name: 'X-CSRF-Token', in: 'header', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              oldPassword: z.string().openapi({ example: 'oldpass123' }),
              newPassword: z.string().openapi({ example: 'newpass456' }),
              confirmPassword: z.string().openapi({ example: 'newpass456' }),
            })
            .openapi({ required: ['oldPassword', 'newPassword', 'confirmPassword'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Password updated successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z
                .string()
                .exactOptional()
                .openapi({ example: 'Password updated successfully.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Invalid CSRF token' },
    405: { description: 'Method not allowed' },
  },
  security: [{ cookieAuth: [] }],
})

export const getApiProfileGetCurrentUserPhpRoute = createRoute({
  method: 'get',
  path: '/api/profile/getCurrentUser.php',
  tags: ['Users'],
  operationId: 'getCurrentUser',
  responses: {
    200: {
      description: 'Current user',
      content: {
        'application/json': {
          schema: z
            .object({
              username: z.string().openapi({ example: 'ryan' }),
              isAdmin: z.boolean(),
              totp_enabled: z.boolean(),
              profile_picture: z
                .string()
                .openapi({ example: '/api/public/profilePic.php?file=ryan.png' }),
            })
            .openapi({ required: ['username', 'isAdmin', 'totp_enabled', 'profile_picture'] }),
        },
      },
    },
    401: UnauthorizedResponse,
  },
  security: [{ cookieAuth: [] }],
})

export const getApiProfileGetUserPermissionsPhpRoute = createRoute({
  method: 'get',
  path: '/api/profile/getUserPermissions.php',
  tags: ['Users'],
  summary: 'Retrieve user permissions',
  description:
    'Returns the permissions for the current user, or all permissions if the user is an admin.',
  operationId: 'getUserPermissions',
  responses: {
    200: {
      description: 'Successful response with user permissions',
      content: { 'application/json': { schema: z.object({}) } },
    },
    401: { description: 'Unauthorized' },
  },
  security: [{ cookieAuth: [] }],
})

export const putApiProfileTotpDisablePhpRoute = createRoute({
  method: 'put',
  path: '/api/profile/totp_disable.php',
  tags: ['TOTP'],
  summary: 'Disable TOTP for the authenticated user',
  description:
    'Clears the TOTP secret from the users file for the current user. Accepts PUT or POST.',
  operationId: 'disableTOTP',
  request: {
    headers: z.object({
      'X-CSRF-Token': z
        .string()
        .openapi({
          param: { name: 'X-CSRF-Token', in: 'header', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'TOTP disabled successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional().openapi({ example: true }),
              message: z
                .string()
                .exactOptional()
                .openapi({ example: 'TOTP disabled successfully.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: 'Missing username' },
    403: { description: 'Not authenticated or invalid CSRF token' },
    405: { description: 'Method not allowed' },
    500: { description: 'Failed to disable TOTP' },
  },
  security: [{ cookieAuth: [] }],
})

export const postApiProfileTotpRecoverPhpRoute = createRoute({
  method: 'post',
  path: '/api/profile/totp_recover.php',
  tags: ['TOTP'],
  summary: 'Recover TOTP',
  description: 'Verifies a recovery code to disable TOTP and finalize login.',
  operationId: 'recoverTOTP',
  request: {
    headers: z.object({
      'X-CSRF-Token': z
        .string()
        .openapi({
          param: { name: 'X-CSRF-Token', in: 'header', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ recovery_code: z.string().openapi({ example: 'ABC123DEF456' }) })
            .openapi({ required: ['recovery_code'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Recovery successful',
      content: {
        'application/json': {
          schema: z
            .object({ status: z.string().exactOptional().openapi({ example: 'ok' }) })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: 'Invalid input or recovery code' },
    401: { description: 'Unauthorized' },
    403: { description: 'Invalid CSRF token' },
    405: { description: 'Method not allowed' },
    429: { description: 'Too many attempts' },
  },
  security: [{ cookieAuth: [] }],
})

export const postApiProfileTotpSaveCodePhpRoute = createRoute({
  method: 'post',
  path: '/api/profile/totp_saveCode.php',
  tags: ['TOTP'],
  summary: 'Generate and save a new TOTP recovery code',
  description:
    'Generates a new TOTP recovery code for the authenticated user, stores its hash, and returns the plain text recovery code.',
  operationId: 'totpSaveCode',
  request: {
    headers: z.object({
      'X-CSRF-Token': z
        .string()
        .openapi({
          param: { name: 'X-CSRF-Token', in: 'header', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Recovery code generated successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              status: z.string().exactOptional().openapi({ example: 'ok' }),
              recoveryCode: z.string().exactOptional().openapi({ example: 'ABC123DEF456' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Invalid CSRF token or unauthorized' },
    405: { description: 'Method not allowed' },
    500: { description: 'Server error' },
  },
  security: [{ cookieAuth: [] }],
})

export const getApiProfileTotpSetupPhpRoute = createRoute({
  method: 'get',
  path: '/api/profile/totp_setup.php',
  tags: ['TOTP'],
  summary: 'Set up TOTP and generate a QR code',
  description:
    'Generates (or retrieves) the TOTP secret for the user and builds a QR code image for scanning.',
  operationId: 'setupTOTP',
  request: {
    headers: z.object({
      'X-CSRF-Token': z
        .string()
        .openapi({
          param: { name: 'X-CSRF-Token', in: 'header', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'QR code image for TOTP setup', content: {} },
    400: { description: 'Missing username' },
    403: { description: 'Not authorized or invalid CSRF token' },
    500: { description: 'Server error' },
  },
  security: [{ cookieAuth: [] }],
})

export const postApiProfileTotpVerifyPhpRoute = createRoute({
  method: 'post',
  path: '/api/profile/totp_verify.php',
  tags: ['TOTP'],
  summary: 'Verify TOTP code',
  description:
    'Verifies a TOTP code and completes login for pending users or validates TOTP for setup verification.',
  operationId: 'verifyTOTP',
  request: {
    headers: z.object({
      'X-CSRF-Token': z
        .string()
        .openapi({
          param: { name: 'X-CSRF-Token', in: 'header', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ totp_code: z.string().openapi({ example: '123456' }) })
            .openapi({ required: ['totp_code'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'TOTP successfully verified',
      content: {
        'application/json': {
          schema: z
            .object({
              status: z.string().exactOptional().openapi({ example: 'ok' }),
              message: z.string().exactOptional().openapi({ example: 'Login successful' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: 'Bad Request (e.g., invalid input)' },
    403: { description: 'Not authenticated or invalid CSRF token' },
    429: { description: 'Too many attempts. Try again later.' },
  },
  security: [{ cookieAuth: [] }],
})

export const putApiProfileUpdateUserPanelPhpRoute = createRoute({
  method: 'put',
  path: '/api/profile/updateUserPanel.php',
  tags: ['Users'],
  summary: 'Update user panel settings',
  description:
    'Updates user panel settings. Accessible to authenticated users. Accepts PUT or POST.',
  operationId: 'updateUserPanel',
  request: {
    headers: z.object({
      'X-CSRF-Token': z
        .string()
        .openapi({
          param: { name: 'X-CSRF-Token', in: 'header', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ totp_enabled: z.boolean().openapi({ example: false }) })
            .openapi({ required: ['totp_enabled'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'User panel updated successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z
                .string()
                .exactOptional()
                .openapi({ example: 'User panel updated: TOTP disabled' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Invalid CSRF token' },
    405: { description: 'Method not allowed' },
  },
  security: [{ cookieAuth: [] }],
})

export const postApiProfileUploadPicturePhpRoute = createRoute({
  method: 'post',
  path: '/api/profile/uploadPicture.php',
  tags: ['Users'],
  summary: "Upload or replace the current user's profile picture",
  description:
    'Accepts a single image file (JPEG, PNG, or GIF) up to 2&nbsp;MB. Requires a valid session cookie and CSRF token.',
  operationId: 'uploadProfilePicture',
  request: {
    headers: z.object({
      'X-CSRF-Token': z
        .string()
        .openapi({
          param: {
            name: 'X-CSRF-Token',
            in: 'header',
            description: 'Anti-CSRF token associated with the current session.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              profile_picture: z
                .file()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description: 'JPEG, PNG, or GIF image. Max size: 2 MB.',
                }),
            })
            .openapi({ required: ['profile_picture'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Profile picture updated.',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().openapi({ example: true }),
              url: z
                .string()
                .openapi({ example: '/api/public/profilePic.php?file=alice_9f3c2e1a8bcd.png' }),
            })
            .openapi({ required: ['success', 'url'] }),
        },
      },
    },
    400: { description: 'No file uploaded, invalid file type, or file too large.' },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    500: { description: 'Server error while saving the picture.' },
  },
  security: [{ cookieAuth: [] }],
})

export const getApiPublicSiteConfigPhpRoute = createRoute({
  method: 'get',
  path: '/api/public/siteConfig.php',
  tags: ['Config'],
  summary: 'Get public site configuration',
  description: 'Returns the public site configuration used by the frontend.',
  operationId: 'getSiteConfig',
  responses: { 200: { description: 'Site config payload' }, 500: { description: 'Server error' } },
})

export const postApiUploadCheckExistingPhpRoute = createRoute({
  method: 'post',
  path: '/api/upload/checkExisting.php',
  tags: ['Uploads'],
  summary: 'Check for existing files before upload',
  description: 'Checks whether the provided relative paths already exist in the target folder.',
  operationId: 'checkUploadExisting',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              folder: z.string().openapi({ example: 'root' }),
              sourceId: z.string().exactOptional().openapi({ example: 'local' }),
              files: z.array(
                z
                  .object({
                    path: z.string().openapi({ example: 'team/reports/report.pdf' }),
                    size: z
                      .preprocess(
                        (val) =>
                          typeof val === 'number' && Number.isSafeInteger(val)
                            ? BigInt(val)
                            : typeof val === 'string' && /^-?\d+$/.test(val)
                              ? BigInt(val)
                              : val,
                        z.int64(),
                      )
                      .exactOptional()
                      .openapi({ type: 'integer', format: 'int64', example: 123456 }),
                  })
                  .openapi({ required: ['path'] }),
              ),
            })
            .openapi({ required: ['folder', 'files'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Existing files',
      content: {
        'application/json': {
          schema: z
            .object({
              existing: z
                .array(
                  z
                    .object({
                      path: z.string().exactOptional(),
                      size: z
                        .preprocess(
                          (val) =>
                            typeof val === 'number' && Number.isSafeInteger(val)
                              ? BigInt(val)
                              : typeof val === 'string' && /^-?\d+$/.test(val)
                                ? BigInt(val)
                                : val,
                          z.int64(),
                        )
                        .nullable()
                        .exactOptional()
                        .openapi({ type: ['integer', 'null'], format: 'int64' }),
                      sameSize: z.boolean().nullable().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: 'Invalid input' },
    401: { description: 'Unauthorized' },
    403: { description: 'Invalid CSRF token' },
  },
  security: [{ cookieAuth: [] }],
})

export const postApiUploadRemoveChunksPhpRoute = createRoute({
  method: 'post',
  path: '/api/upload/removeChunks.php',
  tags: ['Uploads'],
  summary: 'Remove temporary chunk directory',
  description:
    'Deletes the temporary directory used for a chunked upload. Requires a valid CSRF token in the form field.',
  operationId: 'removeChunks',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              folder: z.string().openapi({ example: 'resumable_myupload123' }),
              csrf_token: z.string().openapi({ description: 'CSRF token for this session' }),
            })
            .openapi({ required: ['folder', 'csrf_token'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Removal result',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional().openapi({ example: true }),
              message: z.string().exactOptional().openapi({ example: 'Temporary folder removed.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: 'Invalid input' },
    403: { description: 'Invalid CSRF token' },
  },
  security: [{ cookieAuth: [] }],
})

export const postApiUploadUploadPhpRoute = createRoute({
  method: 'post',
  path: '/api/upload/upload.php',
  tags: ['Uploads'],
  summary: 'Upload a file (supports chunked + full uploads)',
  description:
    'Requires a session (cookie) and a CSRF token (header preferred; falls back to form field). Checks user/account flags and folder-level WRITE ACL, then delegates to the model. Returns JSON for chunked uploads; full uploads may redirect after success.',
  operationId: 'handleUpload',
  request: {
    headers: z.object({
      'X-CSRF-Token': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'X-CSRF-Token',
            in: 'header',
            description:
              'CSRF token for this session (preferred). If omitted, send as form field `csrf_token`.',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              fileToUpload: z
                .file()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description: 'File or chunk payload.',
                }),
              folder: z
                .string()
                .exactOptional()
                .openapi({
                  description: "Target folder (defaults to 'root' if omitted).",
                  example: 'root',
                }),
              csrf_token: z
                .string()
                .exactOptional()
                .openapi({ description: 'CSRF token (form fallback).' }),
              upload_token: z
                .string()
                .exactOptional()
                .openapi({ description: 'Legacy alias for CSRF token (accepted by server).' }),
              resumableChunkNumber: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .exactOptional(),
              resumableTotalChunks: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .exactOptional(),
              resumableChunkSize: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .exactOptional(),
              resumableCurrentChunkSize: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .exactOptional(),
              resumableTotalSize: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .exactOptional(),
              resumableType: z.string().exactOptional(),
              resumableIdentifier: z.string().exactOptional(),
              resumableFilename: z.string().exactOptional(),
              resumableRelativePath: z.string().exactOptional(),
            })
            .openapi({ required: ['fileToUpload'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'JSON result (success, chunk status, or CSRF refresh).',
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                success: z
                  .string()
                  .exactOptional()
                  .openapi({ example: 'File uploaded successfully' }),
                newFilename: z
                  .string()
                  .exactOptional()
                  .openapi({ example: '5f2d7c123a_example.png' }),
              })
              .openapi({ required: [] }),
            z
              .object({ status: z.string().exactOptional().openapi({ example: 'chunk uploaded' }) })
              .openapi({ required: [] }),
            z
              .object({
                csrf_expired: z.boolean().exactOptional().openapi({ example: true }),
                csrf_token: z.string().exactOptional().openapi({ example: 'b1c2...f9' }),
              })
              .openapi({ required: [] }),
          ]),
        },
      },
    },
    302: {
      description: 'Redirect after a successful full upload.',
      headers: z.object({
        Location: {
          description: 'Where the client is redirected',
          schema: z
            .string()
            .exactOptional()
            .openapi({ description: 'Where the client is redirected', param: { required: false } }),
        },
      }),
    },
    400: { description: 'Bad request (missing/invalid fields, model error)' },
    401: { description: 'Unauthorized (no session)' },
    403: { description: 'Forbidden (upload disabled or no WRITE to folder)' },
    500: { description: 'Server error while processing upload' },
  },
  security: [{ cookieAuth: [] }],
})
