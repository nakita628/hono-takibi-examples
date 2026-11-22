type AssignTerminalsRequest = {
  companyAccount: string
  merchantAccount?: string | undefined
  merchantInventory?: boolean | undefined
  store?: string | undefined
  terminals: string[]
}
type AssignTerminalsResponse = { results: { [x: string]: string } }
type ServiceError = {
  errorCode?: string | undefined
  errorType?: string | undefined
  message?: string | undefined
  pspReference?: string | undefined
  status?: number | undefined
}
type FindTerminalRequest = { terminal: string }
type FindTerminalResponse = {
  companyAccount: string
  merchantAccount?: string | undefined
  merchantInventory?: boolean | undefined
  store?: string | undefined
  terminal: string
}
type GetStoresUnderAccountRequest = { companyAccount: string; merchantAccount?: string | undefined }
type Address = {
  city?: string | undefined
  countryCode?: string | undefined
  postalCode?: string | undefined
  stateOrProvince?: string | undefined
  streetAddress?: string | undefined
  streetAddress2?: string | undefined
}
type Store = {
  address?: Address | undefined
  description?: string | undefined
  inStoreTerminals?: string[] | undefined
  merchantAccountCode?: string | undefined
  status?: string | undefined
  store: string
}
type GetStoresUnderAccountResponse = { stores?: Store[] | undefined }
type GetTerminalDetailsRequest = { terminal: string }
type GetTerminalDetailsResponse = {
  bluetoothIp?: string | undefined
  bluetoothMac?: string | undefined
  companyAccount: string
  country?: string | undefined
  deviceModel?: string | undefined
  dhcpEnabled?: boolean | undefined
  displayLabel?: (string | null) | undefined
  ethernetIp?: (string | null) | undefined
  ethernetMac?: (string | null) | undefined
  firmwareVersion?: string | undefined
  iccid?: (string | null) | undefined
  lastActivityDateTime?: (string | null) | undefined
  lastTransactionDateTime?: (string | null) | undefined
  linkNegotiation?: (string | null) | undefined
  merchantAccount?: string | undefined
  merchantInventory?: boolean | undefined
  permanentTerminalId?: string | undefined
  serialNumber?: string | undefined
  simStatus?: (string | null) | undefined
  store?: string | undefined
  storeDetails?: Store | undefined
  terminal: string
  terminalStatus?:
    | 'OnlineLast1Day'
    | 'OnlineLast2Days'
    | 'OnlineLast3Days'
    | 'OnlineLast4Days'
    | 'OnlineLast5Days'
    | 'OnlineLast6Days'
    | 'OnlineLast7Days'
    | 'OnlineToday'
    | 'ReAssignToInventoryPending'
    | 'ReAssignToMerchantInventoryPending'
    | 'ReAssignToStorePending'
    | 'SwitchedOff'
    | undefined
  wifiIp?: string | undefined
  wifiMac?: string | undefined
}
type GetTerminalsUnderAccountRequest = {
  companyAccount: string
  merchantAccount?: string | undefined
  store?: string | undefined
}
type MerchantAccount = {
  inStoreTerminals?: string[] | undefined
  inventoryTerminals?: string[] | undefined
  merchantAccount: string
  stores?: Store[] | undefined
}
type GetTerminalsUnderAccountResponse = {
  companyAccount: string
  inventoryTerminals?: string[] | undefined
  merchantAccounts?: MerchantAccount[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/assignTerminals': {
      $post:
        | {
            input: { json: AssignTerminalsRequest }
            output: AssignTerminalsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AssignTerminalsRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: AssignTerminalsRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: AssignTerminalsRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: AssignTerminalsRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: AssignTerminalsRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/findTerminal': {
      $post:
        | {
            input: { json: FindTerminalRequest }
            output: FindTerminalResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: FindTerminalRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: FindTerminalRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: FindTerminalRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: FindTerminalRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: FindTerminalRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/getStoresUnderAccount': {
      $post:
        | {
            input: { json: GetStoresUnderAccountRequest }
            output: GetStoresUnderAccountResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: GetStoresUnderAccountRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: GetStoresUnderAccountRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: GetStoresUnderAccountRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: GetStoresUnderAccountRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: GetStoresUnderAccountRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/getTerminalDetails': {
      $post:
        | {
            input: { json: GetTerminalDetailsRequest }
            output: GetTerminalDetailsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: GetTerminalDetailsRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: GetTerminalDetailsRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: GetTerminalDetailsRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: GetTerminalDetailsRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: GetTerminalDetailsRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/getTerminalsUnderAccount': {
      $post:
        | {
            input: { json: GetTerminalsUnderAccountRequest }
            output: GetTerminalsUnderAccountResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: GetTerminalsUnderAccountRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: GetTerminalsUnderAccountRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: GetTerminalsUnderAccountRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: GetTerminalsUnderAccountRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: GetTerminalsUnderAccountRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  },
  '/'
>
export default routes
