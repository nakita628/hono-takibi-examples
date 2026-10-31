import { createRoute, z } from '@hono/zod-openapi'

const OrderHeaderSchema = z
  .object({
    id: z.uuid(),
    numberOfLineItems: z.int().min(0),
    orderNumber: z.string(),
    orderStatus: z.enum(['Active', 'Cancelled', 'Completed']),
  })
  .openapi({ required: ['id', 'orderNumber', 'orderStatus', 'numberOfLineItems'] })
  .openapi('OrderHeader')

const PaginationLinksSchema = z
  .object({
    first: z.object({ href: z.string().exactOptional() }).exactOptional().openapi({ required: [] }),
    last: z.object({ href: z.string().exactOptional() }).exactOptional().openapi({ required: [] }),
    next: z.object({ href: z.string().exactOptional() }).openapi({ required: [] }),
    prev: z.object({ href: z.string().exactOptional() }).exactOptional().openapi({ required: [] }),
  })
  .openapi({ required: ['next'] })
  .openapi('PaginationLinks')

const OrderLineItemSchema = z
  .object({
    changeable: z.boolean().exactOptional(),
    id: z.uuid(),
    orderLineItemNumber: z.number().min(0),
    orderLineItemStatus: z.enum([
      'Cancelled',
      'Completed',
      'Confirmed',
      'Pending',
      'ProductionCompleted',
      'ShipmentCompleted',
    ]),
    quantities: z
      .array(
        z
          .object({
            quantityContext: z
              .enum(['Confirmed', 'Invoiced', 'Ordered', 'Produced', 'Shipped'])
              .exactOptional(),
            quantityType: z
              .enum([
                'Area',
                'Count',
                'GrossWeight',
                'Length',
                'NetNetWeight',
                'NetWeight',
                'NominalWeight',
                'TareWeight',
              ])
              .exactOptional(),
            quantityUOM: z
              .enum([
                'Bale',
                'Box',
                'Centimeter',
                'Decimeter',
                'Foot',
                'Gram',
                'HundredPounds',
                'Inch',
                'Kilogram',
                'Kilometer',
                'Meter',
                'MetricTon',
                'Millimeter',
                'Package',
                'PalletUnit',
                'Piece',
                'Pound',
                'PulpUnit',
                'Ream',
                'Reel',
                'Sheet',
                'ShortTon',
                'Skid',
                'SquareDecimeter',
                'SquareFoot',
                'SquareInch',
                'SquareMeter',
                'ThousandPieces',
                'ThousandSquareCentimeters',
                'ThousandSquareFeet',
                'ThousandSquareInches',
                'Yard',
              ])
              .exactOptional(),
            quantityValue: z.number().exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ required: ['id', 'orderLineItemNumber', 'orderLineItemStatus'] })
  .openapi('OrderLineItem')

const OrderSchema = OrderHeaderSchema.and(
  z
    .object({
      links: PaginationLinksSchema.exactOptional(),
      orderLineItems: z.array(OrderLineItemSchema).exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('Order')

const GetOrderSchema = OrderSchema.openapi('GetOrder')

const ListOfOrdersSchema = z
  .object({
    links: PaginationLinksSchema.exactOptional(),
    orders: z.array(OrderHeaderSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListOfOrders')

export const getOrdersRoute = createRoute({
  method: 'get',
  path: '/orders',
  summary: 'List `orders`',
  description: 'Gets a paginated list of all `orders`.',
  request: {
    query: z.object({
      orderStatus: z
        .enum(['Active', 'Cancelled', 'Completed'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by status',
            in: 'query',
            name: 'orderStatus',
            required: false,
            schema: { enum: ['Active', 'Cancelled', 'Completed'], type: 'string' },
          },
        }),
      offset: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of items to skip before starting to collect the result set.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { type: 'string' },
          },
        }),
      limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of items to return. If the value exceeds the maximum, then the maximum value will be used.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: ListOfOrdersSchema } } },
  },
})

export const getOrdersOrderIdRoute = createRoute({
  method: 'get',
  path: '/orders/{orderId}',
  summary: 'Get an `order`',
  description:
    'Gets the details of a specific `order`, including a paginated list of all its lines.',
  request: {
    params: z.object({
      orderId: z
        .uuid()
        .openapi({
          param: {
            description: 'UUID of the `order` to get',
            in: 'path',
            name: 'orderId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: OrderSchema } } },
  },
})
