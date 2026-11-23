import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deletePacerCredentialPacerUserIdRoute,
  getPacerCredentialPacerUserIdRoute,
  getPacerCredentialRoute,
  putPacerCredentialRoute,
} from '../routes'

export const getPacerCredentialRouteHandler: RouteHandler<typeof getPacerCredentialRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putPacerCredentialRouteHandler: RouteHandler<typeof putPacerCredentialRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deletePacerCredentialPacerUserIdRouteHandler: RouteHandler<
  typeof deletePacerCredentialPacerUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPacerCredentialPacerUserIdRouteHandler: RouteHandler<
  typeof getPacerCredentialPacerUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
