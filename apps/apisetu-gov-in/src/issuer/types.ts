type PullDocRequest = {
  DocDetails: { DOB: string; DigiLockerId: string; FullName: string; UID: string; URI: string }
  format: string
  orgId: string
  ts: string
  txn: string
  ver: string
}
type PullDocResponse = {
  DocDetails: { DataContent: string; DocContent: string }
  ResponseStatus: { Status: string; ts: string; txn: string }
}
type PullURIRequest = {
  DocDetails: {
    DOB: string
    DigiLockerId: string
    DocType: string
    FullName: string
    Photo: string
    UDF1: string
    UDF2: string
    UDF3: string
    UDFn: string
    UID: string
  }
  format: string
  orgId: string
  ts: string
  txn: string
  ver: string
}
type PullURIResponse = {
  DocDetails: {
    DOB: string
    DataContent: string
    DigiLockerId: string
    DocContent: string
    DocType: string
    FullName: string
    UDF1: string
    UDF2: string
    UID: string
    URI: string
  }
  ResponseStatus: { Status: string; ts: string; txn: string }
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/Your Pull DOC Request API Path': {
      $post: {
        input: {
          header: { 'Content-Type'?: string | undefined; 'x-digilocker-hmac'?: string | undefined }
        } & { json: PullDocRequest }
        output: PullDocResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/Your Pull URI Request API Path': {
      $post: {
        input: {
          header: { 'Content-Type'?: string | undefined; 'x-digilocker-hmac'?: string | undefined }
        } & { json: PullURIRequest }
        output: PullURIResponse
        outputFormat: 'text'
        status: 200
      }
    }
  },
  '/'
>
export default routes
