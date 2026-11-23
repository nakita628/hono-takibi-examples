type PaginationLinks = {
  first?: { href?: string | undefined } | undefined
  last?: { href?: string | undefined } | undefined
  next: { href?: string | undefined }
  prev?: { href?: string | undefined } | undefined
}
type OrderHeader = {
  id: string
  numberOfLineItems: number
  orderNumber: string
  orderStatus: 'Active' | 'Cancelled' | 'Completed'
}
type ListOfOrders = { links?: PaginationLinks | undefined; orders?: OrderHeader[] | undefined }
type OrderLineItem = {
  changeable?: boolean | undefined
  id: string
  orderLineItemNumber: number
  orderLineItemStatus:
    | 'Cancelled'
    | 'Completed'
    | 'Confirmed'
    | 'Pending'
    | 'ProductionCompleted'
    | 'ShipmentCompleted'
  quantities?:
    | {
        quantityContext?: 'Confirmed' | 'Invoiced' | 'Ordered' | 'Produced' | 'Shipped' | undefined
        quantityType?:
          | 'Area'
          | 'Count'
          | 'GrossWeight'
          | 'Length'
          | 'NetNetWeight'
          | 'NetWeight'
          | 'NominalWeight'
          | 'TareWeight'
          | undefined
        quantityUOM?:
          | 'Bale'
          | 'Box'
          | 'Centimeter'
          | 'Decimeter'
          | 'Foot'
          | 'Gram'
          | 'HundredPounds'
          | 'Inch'
          | 'Kilogram'
          | 'Kilometer'
          | 'Meter'
          | 'MetricTon'
          | 'Millimeter'
          | 'Package'
          | 'PalletUnit'
          | 'Piece'
          | 'Pound'
          | 'PulpUnit'
          | 'Ream'
          | 'Reel'
          | 'Sheet'
          | 'ShortTon'
          | 'Skid'
          | 'SquareDecimeter'
          | 'SquareFoot'
          | 'SquareInch'
          | 'SquareMeter'
          | 'ThousandPieces'
          | 'ThousandSquareCentimeters'
          | 'ThousandSquareFeet'
          | 'ThousandSquareInches'
          | 'Yard'
          | undefined
        quantityValue?: number | undefined
      }[]
    | undefined
}
type Order = {
  id: string
  numberOfLineItems: number
  orderNumber: string
  orderStatus: 'Active' | 'Cancelled' | 'Completed'
  links?: PaginationLinks | undefined
  orderLineItems?: OrderLineItem[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/orders': {
      $get: {
        input: {
          query: {
            orderStatus?: 'Active' | 'Cancelled' | 'Completed' | undefined
            offset?: string | undefined
            limit?: string | undefined
          }
        }
        output: ListOfOrders
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/orders/:orderId': {
      $get: {
        input: { param: { orderId: string } }
        output: Order
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
