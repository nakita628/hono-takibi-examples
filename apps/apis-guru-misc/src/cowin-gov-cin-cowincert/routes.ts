import { createRoute, z } from '@hono/zod-openapi'

const CertificateRequestSchema = z
  .object({ beneficiaryId: z.string().exactOptional(), mobile: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('CertificateRequest')

const ApiKeySecurityScheme = { in: 'header', name: 'Authorization', type: 'apiKey' }

const CertAuthSecurityScheme = {
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://divoc.cowin.gov.in/realms/divoc/protocol/openid-connect/auth',
      scopes: { 'read:cert': 'read or download certificates' },
      tokenUrl: 'https://divoc.xiv.in/auth/realms/divoc/protocol/openid-connect/token',
    },
  },
  type: 'oauth2',
}

export const postPdfCertificateRoute = createRoute({
  method: 'post',
  path: '/pdf/certificate',
  tags: ['certificate'],
  summary: 'Download the certificate in pdf format',
  operationId: 'getCertificatePdf',
  request: {
    body: { content: { 'application/json': { schema: CertificateRequestSchema } }, required: true },
  },
  responses: { 400: { description: 'Bad request', content: {} } },
  security: [{ cert_auth: ['read:cert'] }],
})
