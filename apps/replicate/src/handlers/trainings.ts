import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getTrainingsRoute,
  getTrainingsTrainingIdRoute,
  postTrainingsTrainingIdCancelRoute,
} from '../routes'

export const getTrainingsRouteHandler: RouteHandler<typeof getTrainingsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTrainingsTrainingIdRouteHandler: RouteHandler<
  typeof getTrainingsTrainingIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTrainingsTrainingIdCancelRouteHandler: RouteHandler<
  typeof postTrainingsTrainingIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}
