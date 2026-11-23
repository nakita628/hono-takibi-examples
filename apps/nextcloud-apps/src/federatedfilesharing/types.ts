type OCSMeta = {
  status: string
  statuscode: number
  message?: string | undefined
  totalitems?: string | undefined
  itemsperpage?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/index.php/apps/federatedfilesharing/createFederatedShare': {
      $post:
        | {
            input: { json: { shareWith: string; token: string; password?: string | undefined } }
            output: { remoteUrl: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { shareWith: string; token: string; password?: string | undefined } }
            output: { message: string }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/ocs/v2.php/cloud/shares': {
      $post: {
        input: { header: { 'OCS-APIRequest': boolean } } & {
          json: {
            remote?: (string | null) | undefined
            token?: (string | null) | undefined
            name?: (string | null) | undefined
            owner?: (string | null) | undefined
            sharedBy?: (string | null) | undefined
            shareWith?: (string | null) | undefined
            remoteId?: (string | null) | undefined
            sharedByFederatedId?: (string | null) | undefined
            ownerFederatedId?: (string | null) | undefined
          }
        }
        output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ocs/v2.php/cloud/shares/:id/reshare': {
      $post:
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                token?: (string | null) | undefined
                shareWith?: (string | null) | undefined
                remoteId?: (bigint | null) | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { token: string; remoteId: string } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                token?: (string | null) | undefined
                shareWith?: (string | null) | undefined
                remoteId?: (bigint | null) | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/ocs/v2.php/cloud/shares/:id/permissions': {
      $post:
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                token?: (string | null) | undefined
                permissions?: (bigint | null) | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                token?: (string | null) | undefined
                permissions?: (bigint | null) | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/ocs/v2.php/cloud/shares/:id/accept': {
      $post:
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { token?: (string | null) | undefined }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { token?: (string | null) | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/ocs/v2.php/cloud/shares/:id/decline': {
      $post: {
        input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } } & {
          json: { token?: (string | null) | undefined }
        }
        output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ocs/v2.php/cloud/shares/:id/unshare': {
      $post: {
        input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } } & {
          json: { token?: (string | null) | undefined }
        }
        output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ocs/v2.php/cloud/shares/:id/revoke': {
      $post:
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { token?: (string | null) | undefined }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: { token?: (string | null) | undefined }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/ocs/v2.php/cloud/shares/:id/move': {
      $post:
        | {
            input: { param: { id: bigint } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                token?: (string | null) | undefined
                remote?: (string | null) | undefined
                remote_id?: (string | null) | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { remote: string; owner: string } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                token?: (string | null) | undefined
                remote?: (string | null) | undefined
                remote_id?: (string | null) | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 400
          }
    }
  },
  '/'
>
export default routes
