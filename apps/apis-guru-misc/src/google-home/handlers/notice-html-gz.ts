import type { RouteHandler } from '@hono/zod-openapi'
import type { getNOTICEHtmlGzRoute } from '../routes'

export const getNOTICEHtmlGzRouteHandler: RouteHandler<typeof getNOTICEHtmlGzRoute> = async (c) => {
  throw new Error('Not implemented')
}
