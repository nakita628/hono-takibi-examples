import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getQuantumTaskQuantumTaskArnRoute,
  postQuantumTaskRoute,
  putQuantumTaskQuantumTaskArnCancelRoute,
} from '../routes'

export const putQuantumTaskQuantumTaskArnCancelRouteHandler: RouteHandler<
  typeof putQuantumTaskQuantumTaskArnCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postQuantumTaskRouteHandler: RouteHandler<typeof postQuantumTaskRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getQuantumTaskQuantumTaskArnRouteHandler: RouteHandler<
  typeof getQuantumTaskQuantumTaskArnRoute
> = async (c) => {
  throw new Error('Not implemented')
}
