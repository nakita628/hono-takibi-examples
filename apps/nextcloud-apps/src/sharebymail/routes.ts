import { z } from '@hono/zod-openapi'

const CapabilitiesSchema = z
  .object({
    files_sharing: z
      .object({
        sharebymail: z
          .object({
            enabled: z.boolean(),
            send_password_by_mail: z.boolean(),
            upload_files_drop: z
              .object({ enabled: z.boolean() })
              .openapi({ required: ['enabled'] }),
            password: z
              .object({ enabled: z.boolean(), enforced: z.boolean() })
              .openapi({ required: ['enabled', 'enforced'] }),
            expire_date: z
              .object({ enabled: z.boolean(), enforced: z.boolean() })
              .openapi({ required: ['enabled', 'enforced'] }),
          })
          .openapi({
            required: [
              'enabled',
              'send_password_by_mail',
              'upload_files_drop',
              'password',
              'expire_date',
            ],
          }),
      })
      .exactOptional()
      .openapi({ required: ['sharebymail'] }),
  })
  .openapi({ required: [] })
  .openapi('Capabilities')

const BasicAuthSecurityScheme = { type: 'http', scheme: 'basic' }

const BearerAuthSecurityScheme = { type: 'http', scheme: 'bearer' }
