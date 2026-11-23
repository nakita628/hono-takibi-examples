import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getLawCongressLawTypeLawNumberRoute,
  getLawCongressLawTypeRoute,
  getLawCongressRoute,
} from '../routes'

export const getLawCongressRouteHandler: RouteHandler<typeof getLawCongressRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getLawCongressLawTypeRouteHandler: RouteHandler<
  typeof getLawCongressLawTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getLawCongressLawTypeLawNumberRouteHandler: RouteHandler<
  typeof getLawCongressLawTypeLawNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}
