import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteSendersDomainsDomainNameRoute,
  deleteSendersSenderIdRoute,
  getSendersDomainsDomainNameRoute,
  getSendersDomainsRoute,
  getSendersIpsRoute,
  getSendersRoute,
  getSendersSenderIdIpsRoute,
  postSendersDomainsRoute,
  postSendersRoute,
  putSendersDomainsDomainNameAuthenticateRoute,
  putSendersSenderIdRoute,
  putSendersSenderIdValidateRoute,
} from '../routes'

export const getSendersRouteHandler: RouteHandler<typeof getSendersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSendersRouteHandler: RouteHandler<typeof postSendersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSendersDomainsRouteHandler: RouteHandler<typeof getSendersDomainsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postSendersDomainsRouteHandler: RouteHandler<typeof postSendersDomainsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteSendersDomainsDomainNameRouteHandler: RouteHandler<
  typeof deleteSendersDomainsDomainNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSendersDomainsDomainNameRouteHandler: RouteHandler<
  typeof getSendersDomainsDomainNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSendersDomainsDomainNameAuthenticateRouteHandler: RouteHandler<
  typeof putSendersDomainsDomainNameAuthenticateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSendersIpsRouteHandler: RouteHandler<typeof getSendersIpsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSendersSenderIdRouteHandler: RouteHandler<
  typeof deleteSendersSenderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSendersSenderIdRouteHandler: RouteHandler<typeof putSendersSenderIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getSendersSenderIdIpsRouteHandler: RouteHandler<
  typeof getSendersSenderIdIpsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSendersSenderIdValidateRouteHandler: RouteHandler<
  typeof putSendersSenderIdValidateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
