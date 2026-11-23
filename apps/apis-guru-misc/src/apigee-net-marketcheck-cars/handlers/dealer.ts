import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getDealerCarIdRoute,
  getDealerCarUkIdRoute,
  getDealerHeavyEquipmentIdRoute,
  getDealerMotorcycleIdRoute,
  getDealerRvIdRoute,
} from '../routes'

export const getDealerCarUkIdRouteHandler: RouteHandler<typeof getDealerCarUkIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getDealerCarIdRouteHandler: RouteHandler<typeof getDealerCarIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getDealerHeavyEquipmentIdRouteHandler: RouteHandler<
  typeof getDealerHeavyEquipmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDealerMotorcycleIdRouteHandler: RouteHandler<
  typeof getDealerMotorcycleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDealerRvIdRouteHandler: RouteHandler<typeof getDealerRvIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
