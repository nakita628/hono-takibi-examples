type ApiHealthStatus = { status?: string | undefined }
type BaseLat = number
type BaseLng = number
type Bsid = number
type Channel = number
type PnOffset = number
type CdmaLocalId = { channel: Channel; pnOffset: PnOffset }
type Nid = number
type PilotPower = number
type CdmaNmr = {
  bsid?: Bsid | undefined
  channel: Channel
  pilotPower?: PilotPower | undefined
  pnOffset: PnOffset
}
type CdmaNmrArray = CdmaNmr[]
type RegistrationZone = number
type Sid = number
type Cdma = {
  baseLat?: BaseLat | undefined
  baseLng?: BaseLng | undefined
  bsid: Bsid
  localId?: CdmaLocalId | undefined
  nid: Nid
  nmr?: CdmaNmrArray | undefined
  pilotPower?: PilotPower | undefined
  rz?: RegistrationZone | undefined
  sid: Sid
}
type ClientInfo = {
  firmware?: string | undefined
  manufacturer: string
  model: string
  name: string
  platform?: string | undefined
  version: string
}
type GeranCid = number
type Lac = number
type Bcch = number
type Bsic = number
type GsmLocalId = { bcch: Bcch; bsic: Bsic }
type Mcc = number
type Mnc = number
type GsmNmrGlobalId = { cid: GeranCid; lac: Lac }
type RxLevel = number
type GsmNmr = {
  bcch: Bcch
  bsic: Bsic
  globalIdentity?: GsmNmrGlobalId | undefined
  rxLevel?: RxLevel | undefined
}
type GsmNmrArray = GsmNmr[]
type GsmTimingAdvance = number
type Gsm = {
  cid: GeranCid
  lac: Lac
  localId?: GsmLocalId | undefined
  mcc: Mcc
  mnc: Mnc
  nmr?: GsmNmrArray | undefined
  rxLevel?: RxLevel | undefined
  ta?: GsmTimingAdvance | undefined
}
type EutranCid = number
type Earfcn = number
type Pci = number
type LteLocalId = { earfcn: Earfcn; pci: Pci }
type Rsrp = number
type Rsrq = number
type LteNmr = {
  cid?: EutranCid | undefined
  earfcn: Earfcn
  pci: Pci
  rsrp?: Rsrp | undefined
  rsrq?: Rsrq | undefined
}
type LteNmrArray = LteNmr[]
type LteTimingAdvance = number
type Tac = number
type Lte = {
  cid: EutranCid
  localId?: LteLocalId | undefined
  mcc: Mcc
  mnc: Mnc
  nmr?: LteNmrArray | undefined
  rsrp?: Rsrp | undefined
  rsrq?: Rsrq | undefined
  ta?: LteTimingAdvance | undefined
  tac?: Tac | undefined
}
type UtranCid = number
type CellParams = number
type Uarfcn = number
type TdscdmaLocalId = { cellParams: CellParams; uarfcn: Uarfcn }
type Pathloss = number
type Rscp = number
type TdscdmaNmr = {
  cellParams: CellParams
  cid?: UtranCid | undefined
  pathloss?: Pathloss | undefined
  rscp?: Rscp | undefined
  uarfcn: Uarfcn
}
type TdscdmaNmrArray = TdscdmaNmr[]
type TdscdmaTimingAdvance = number
type Tdscdma = {
  cid: UtranCid
  lac?: Lac | undefined
  localId?: TdscdmaLocalId | undefined
  mcc: Mcc
  mnc: Mnc
  nmr?: TdscdmaNmrArray | undefined
  pathloss?: Pathloss | undefined
  rscp?: Rscp | undefined
  ta?: TdscdmaTimingAdvance | undefined
}
type Psc = number
type Uarfcndl = number
type WcdmaLocalId = { psc: Psc; uarfcndl: Uarfcndl }
type WcdmaNmr = {
  cid?: UtranCid | undefined
  pathloss?: Pathloss | undefined
  psc: Psc
  rscp?: Rscp | undefined
  uarfcndl: Uarfcndl
}
type WcdmaNmrArray = WcdmaNmr[]
type Wcdma = {
  cid: UtranCid
  lac?: Lac | undefined
  localId?: WcdmaLocalId | undefined
  mcc: Mcc
  mnc: Mnc
  nmr?: WcdmaNmrArray | undefined
  pathloss?: Pathloss | undefined
  rscp?: Rscp | undefined
}
type Rss = number
type WlanLocate = { mac: string; rss?: Rss | undefined }
type Locate = {
  cdma?: Cdma[] | undefined
  client?: ClientInfo | undefined
  gsm?: Gsm[] | undefined
  lte?: Lte[] | undefined
  tdscdma?: Tdscdma[] | undefined
  wcdma?: Wcdma[] | undefined
  wlan?: WlanLocate[] | undefined
}
type Latitude = number
type Longitude = number
type PositionLocate = {
  accuracy: number
  alt?: number | undefined
  altAccuracy?: number | undefined
  lat: Latitude
  lng: Longitude
}
type ErrorDetail = {
  message?: string | undefined
  messagePlaceholders?: { [x: string]: unknown } | undefined
  messageTemplate?: string | undefined
  source?: string | undefined
  title?: string | undefined
}
type Error = {
  action: string
  cause: string
  code: string
  correlationId: string
  details?: ErrorDetail[] | undefined
  status: number
  title: string
}
type AuthError = { error?: string | undefined; error_description?: string | undefined }
type ApiVersion = { apiVersion?: string | undefined; serviceVersion?: string | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/health': { $get: { input: {}; output: ApiHealthStatus; outputFormat: 'json'; status: 200 } }
  } & {
    '/locate': {
      $post:
        | {
            input: {
              query: {
                confidence?: number | undefined
                fallback?: ('any' | 'area' | 'singleWifi')[] | undefined
                desired?: 'altitude'[] | undefined
                required?: 'altitude'[] | undefined
              }
            } & {
              header: {
                'Content-Encoding'?: 'gzip' | undefined
                'X-Request-ID'?: string | undefined
              }
            } & { json: Locate }
            output: { location: PositionLocate }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                confidence?: number | undefined
                fallback?: ('any' | 'area' | 'singleWifi')[] | undefined
                desired?: 'altitude'[] | undefined
                required?: 'altitude'[] | undefined
              }
            } & {
              header: {
                'Content-Encoding'?: 'gzip' | undefined
                'X-Request-ID'?: string | undefined
              }
            } & { json: Locate }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                confidence?: number | undefined
                fallback?: ('any' | 'area' | 'singleWifi')[] | undefined
                desired?: 'altitude'[] | undefined
                required?: 'altitude'[] | undefined
              }
            } & {
              header: {
                'Content-Encoding'?: 'gzip' | undefined
                'X-Request-ID'?: string | undefined
              }
            } & { json: Locate }
            output: AuthError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                confidence?: number | undefined
                fallback?: ('any' | 'area' | 'singleWifi')[] | undefined
                desired?: 'altitude'[] | undefined
                required?: 'altitude'[] | undefined
              }
            } & {
              header: {
                'Content-Encoding'?: 'gzip' | undefined
                'X-Request-ID'?: string | undefined
              }
            } & { json: Locate }
            output: AuthError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                confidence?: number | undefined
                fallback?: ('any' | 'area' | 'singleWifi')[] | undefined
                desired?: 'altitude'[] | undefined
                required?: 'altitude'[] | undefined
              }
            } & {
              header: {
                'Content-Encoding'?: 'gzip' | undefined
                'X-Request-ID'?: string | undefined
              }
            } & { json: Locate }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                confidence?: number | undefined
                fallback?: ('any' | 'area' | 'singleWifi')[] | undefined
                desired?: 'altitude'[] | undefined
                required?: 'altitude'[] | undefined
              }
            } & {
              header: {
                'Content-Encoding'?: 'gzip' | undefined
                'X-Request-ID'?: string | undefined
              }
            } & { json: Locate }
            output: Error
            outputFormat: 'json'
            status: 405
          }
        | {
            input: {
              query: {
                confidence?: number | undefined
                fallback?: ('any' | 'area' | 'singleWifi')[] | undefined
                desired?: 'altitude'[] | undefined
                required?: 'altitude'[] | undefined
              }
            } & {
              header: {
                'Content-Encoding'?: 'gzip' | undefined
                'X-Request-ID'?: string | undefined
              }
            } & { json: Locate }
            output: Error
            outputFormat: 'json'
            status: 413
          }
        | {
            input: {
              query: {
                confidence?: number | undefined
                fallback?: ('any' | 'area' | 'singleWifi')[] | undefined
                desired?: 'altitude'[] | undefined
                required?: 'altitude'[] | undefined
              }
            } & {
              header: {
                'Content-Encoding'?: 'gzip' | undefined
                'X-Request-ID'?: string | undefined
              }
            } & { json: Locate }
            output: Error
            outputFormat: 'json'
            status: 414
          }
        | {
            input: {
              query: {
                confidence?: number | undefined
                fallback?: ('any' | 'area' | 'singleWifi')[] | undefined
                desired?: 'altitude'[] | undefined
                required?: 'altitude'[] | undefined
              }
            } & {
              header: {
                'Content-Encoding'?: 'gzip' | undefined
                'X-Request-ID'?: string | undefined
              }
            } & { json: Locate }
            output: Error
            outputFormat: 'json'
            status: 415
          }
        | {
            input: {
              query: {
                confidence?: number | undefined
                fallback?: ('any' | 'area' | 'singleWifi')[] | undefined
                desired?: 'altitude'[] | undefined
                required?: 'altitude'[] | undefined
              }
            } & {
              header: {
                'Content-Encoding'?: 'gzip' | undefined
                'X-Request-ID'?: string | undefined
              }
            } & { json: Locate }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                confidence?: number | undefined
                fallback?: ('any' | 'area' | 'singleWifi')[] | undefined
                desired?: 'altitude'[] | undefined
                required?: 'altitude'[] | undefined
              }
            } & {
              header: {
                'Content-Encoding'?: 'gzip' | undefined
                'X-Request-ID'?: string | undefined
              }
            } & { json: Locate }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/version': { $get: { input: {}; output: ApiVersion; outputFormat: 'json'; status: 200 } }
  },
  '/'
>
export default routes
