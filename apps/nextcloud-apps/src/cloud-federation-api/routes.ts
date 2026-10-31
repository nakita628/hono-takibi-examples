import { createRoute, z } from '@hono/zod-openapi'

const AddShareSchema = z
  .object({ recipientDisplayName: z.string(), recipientUserId: z.string().exactOptional() })
  .openapi({ required: ['recipientDisplayName'] })
  .openapi('AddShare')

const ErrorSchema = z
  .object({ message: z.string() })
  .openapi({ required: ['message'] })
  .openapi('Error')

const ValidationErrorSchema = ErrorSchema.and(
  z
    .object({
      validationErrors: z.array(
        z
          .object({ name: z.string(), message: z.string().nullable() })
          .openapi({ required: ['name', 'message'] }),
      ),
    })
    .openapi({ required: ['validationErrors'] }),
).openapi('ValidationError')

const BasicAuthSecurityScheme = { type: 'http', scheme: 'basic' }

const BearerAuthSecurityScheme = { type: 'http', scheme: 'bearer' }

export const postIndexPhpOcmSharesRoute = createRoute({
  method: 'post',
  path: '/index.php/ocm/shares',
  tags: ['request_handler'],
  summary: 'Add share',
  operationId: 'request_handler-add-share',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              shareWith: z
                .string()
                .openapi({ description: 'The user who the share will be shared with' }),
              name: z.string().openapi({ description: 'The resource name (e.g. document.odt)' }),
              description: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Share description' }),
              providerId: z.string().openapi({ description: 'Resource UID on the provider side' }),
              owner: z
                .string()
                .openapi({
                  description: 'Provider specific UID of the user who owns the resource',
                }),
              ownerDisplayName: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Display name of the user who shared the item' }),
              sharedBy: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description: 'Provider specific UID of the user who shared the resource',
                }),
              sharedByDisplayName: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Display name of the user who shared the resource' }),
              protocol: z
                .object({
                  name: z.string(),
                  options: z.record(z.string(), z.object({})).exactOptional(),
                  webdav: z.record(z.string(), z.object({})).exactOptional(),
                })
                .openapi({
                  description:
                    "Legacy format: ['name' => 'webdav', 'options' => ['sharedSecret' => '...', 'permissions' => '...']], new single-protocol format: ['name' => 'webdav', 'webdav' => ['uri' => '...', 'sharedSecret' => '...', 'permissions' => [...]]], or multi-protocol envelope per OCM spec: ['name' => 'multi', 'webdav' => ['sharedSecret' => '...', ...], 'webapp' => [...]]",
                  required: ['name'],
                }),
              shareType: z.string().openapi({ description: "'group' or 'user' share" }),
              resourceType: z.string().openapi({ description: "'file', 'calendar',..." }),
            })
            .openapi({
              required: [
                'shareWith',
                'name',
                'providerId',
                'owner',
                'protocol',
                'shareType',
                'resourceType',
              ],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description:
        'The notification was successfully received. The display name of the recipient might be returned in the body',
      content: { 'application/json': { schema: AddShareSchema } },
    },
    400: {
      description:
        'Bad request due to invalid parameters, e.g. when `shareWith` is not found or required properties are missing',
      content: { 'application/json': { schema: ValidationErrorSchema } },
    },
    501: {
      description: 'Share type or the resource type is not supported',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const postIndexPhpOcmNotificationsRoute = createRoute({
  method: 'post',
  path: '/index.php/ocm/notifications',
  tags: ['request_handler'],
  summary: 'Send a notification about an existing share',
  operationId: 'request_handler-receive-notification',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              notificationType: z
                .string()
                .openapi({ description: 'Notification type, e.g. SHARE_ACCEPTED' }),
              resourceType: z.string().openapi({ description: 'calendar, file, contact,...' }),
              providerId: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'ID of the share' }),
              notification: z
                .record(z.string(), z.object({}))
                .nullable()
                .exactOptional()
                .openapi({ description: 'The actual payload of the notification' }),
            })
            .openapi({ required: ['notificationType', 'resourceType'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'The notification was successfully received',
      content: { 'application/json': { schema: z.record(z.string(), z.object({})) } },
    },
    400: {
      description: 'Bad request due to invalid parameters, e.g. when `type` is invalid or missing',
      content: { 'application/json': { schema: ValidationErrorSchema } },
    },
    403: {
      description: 'Getting resource is not allowed',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    501: {
      description: 'The resource type is not supported',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})
