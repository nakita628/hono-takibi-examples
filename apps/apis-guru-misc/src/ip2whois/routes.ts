import { createRoute, z } from '@hono/zod-openapi'

export const getRoute = createRoute({
  method: 'get',
  path: '/',
  description: 'Lookup WHOIS information',
  request: {
    query: z.object({
      domain: z
        .string()
        .openapi({
          param: {
            description: 'Domain name for lookup purpose.',
            in: 'query',
            name: 'domain',
            required: true,
            schema: { type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description: 'API key.',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      format: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Returns the API response in json (default) or xml format.',
            in: 'query',
            name: 'format',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Get response from IP2WHOIS',
      content: {
        'text/html; charset=UTF-8': {
          schema: z.string(),
          examples: {
            '0': {
              value:
                '{"response": "","domain": "","domain_id": "","status": "","create_date": "","update_date": "","expire_date": "","domain_age": "","whois_server": "","registrar_iana_id": "","registrar_name": "","registrar_url": "","registrant_name": "","registrant_organization": "","registrant_street_address": "","registrant_city": "","registrant_region": "","registrant_zip_code": "","registrant_country": "","registrant_phone": "","registrant_fax": "","registrant_email": "","admin_name": "","admin_organization": "","admin_street_address":  "","admin_city": "","admin_region": "","admin_zip_code": "","admin_country": "","admin_phone": "","admin_fax": "","admin_email": "","tech_name": "","tech_organization": "","tech_street_address": "","tech_city": "","tech_region": "","tech_zip_code": "","tech_country": "","tech_phone": "","tech_fax": "","tech_email": "","billing_name": "","billing_organization": "","billing_street_address": "","billing_city": "","billing_region": "","billing_zip_code": "","billing_country": "","billing_phone": "","billing_fax": "","billing_email": "","name_servers": "","error_code": "","error_message":""}',
            },
          },
        },
      },
    },
  },
})
