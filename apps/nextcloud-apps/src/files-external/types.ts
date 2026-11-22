type OCSMeta = {
  status: string
  statuscode: number
  message?: string | undefined
  totalitems?: string | undefined
  itemsperpage?: string | undefined
}
type StorageConfig = {
  applicableGroups?: string[] | undefined
  applicableUsers?: string[] | undefined
  authMechanism: string
  backend: string
  backendOptions: { [x: string]: { [x: string]: unknown } }
  id?: bigint | undefined
  mountOptions?: { [x: string]: { [x: string]: unknown } } | undefined
  mountPoint: string
  priority?: bigint | undefined
  status?: bigint | undefined
  statusMessage?: string | undefined
  type: 'personal' | 'system'
  userProvided: boolean
}
type Mount = {
  name: string
  path: string
  type: 'dir'
  backend: string
  scope: 'system' | 'personal'
  permissions: bigint
  id: bigint
  class: string
  config: StorageConfig
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/ocs/v2.php/apps/files_external/api/v1/mounts': {
      $get:
        | {
            input: { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: Mount[] } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  },
  '/'
>
export default routes
