type CertificateRequest = { beneficiaryId?: string | undefined; mobile?: string | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/pdf/certificate': {
      $post: { input: { json: CertificateRequest }; output: {}; outputFormat: string; status: 200 }
    }
  },
  '/'
>
export default routes
