type OCSMeta = {
  status: string
  statuscode: number
  message?: string | undefined
  totalitems?: string | undefined
  itemsperpage?: string | undefined
}
type WidgetItem = {
  subtitle: string
  title: string
  link: string
  iconUrl: string
  overlayIconUrl: string
  sinceId: string
}
type WidgetItems = {
  items: WidgetItem[]
  emptyContentMessage: string
  halfEmptyContentMessage: string
}
type Widget = {
  id: string
  title: string
  order: bigint
  icon_class: string
  icon_url: string
  widget_url: string | null
  item_icons_round: boolean
  item_api_versions: bigint[]
  reload_interval: bigint
  buttons?: { type: string; text: string; link: string }[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/ocs/v2.php/apps/dashboard/api/v1/widget-items': {
      $get:
        | {
            input: {
              query: {
                sinceIds?: string | undefined
                limit?: bigint | undefined
                'widgets[]'?: string[] | undefined
              }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: WidgetItem[] } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                sinceIds?: string | undefined
                limit?: bigint | undefined
                'widgets[]'?: string[] | undefined
              }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/apps/dashboard/api/v2/widget-items': {
      $get:
        | {
            input: {
              query: {
                sinceIds?: string | undefined
                limit?: bigint | undefined
                'widgets[]'?: string[] | undefined
              }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: WidgetItems } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                sinceIds?: string | undefined
                limit?: bigint | undefined
                'widgets[]'?: string[] | undefined
              }
            } & { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/apps/dashboard/api/v1/widgets': {
      $get:
        | {
            input: { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: Widget } } }
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
  } & {
    '/ocs/v2.php/apps/dashboard/api/v3/layout': {
      $get:
        | {
            input: { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { layout: string[] } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
      $post:
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & { json: { layout: string[] } }
            output: { ocs: { meta: OCSMeta; data: { layout: string[] } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & { json: { layout: string[] } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/apps/dashboard/api/v3/statuses': {
      $get:
        | {
            input: { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { statuses: string[] } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
      $post:
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & { json: { statuses: string[] } }
            output: { ocs: { meta: OCSMeta; data: { statuses: string[] } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & { json: { statuses: string[] } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  },
  '/'
>
export default routes
