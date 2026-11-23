import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteMysqldatabasesDatabaseNameRoute,
  deleteMysqldatabasesDatabaseNameUsersUserNameRoute,
  getMysqldatabasesDatabaseNameRoute,
  getMysqldatabasesDatabaseNameUsersRoute,
  getMysqldatabasesRoute,
  postMysqldatabasesDatabaseNameUsersRoute,
  postMysqldatabasesRoute,
  putMysqldatabasesDatabaseNameUsersUserNamePasswordRoute,
  putMysqldatabasesDatabaseNameUsersUserNameStatusRoute,
} from '../routes'

export const getMysqldatabasesRouteHandler: RouteHandler<typeof getMysqldatabasesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postMysqldatabasesRouteHandler: RouteHandler<typeof postMysqldatabasesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteMysqldatabasesDatabaseNameRouteHandler: RouteHandler<
  typeof deleteMysqldatabasesDatabaseNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMysqldatabasesDatabaseNameRouteHandler: RouteHandler<
  typeof getMysqldatabasesDatabaseNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMysqldatabasesDatabaseNameUsersRouteHandler: RouteHandler<
  typeof getMysqldatabasesDatabaseNameUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMysqldatabasesDatabaseNameUsersRouteHandler: RouteHandler<
  typeof postMysqldatabasesDatabaseNameUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteMysqldatabasesDatabaseNameUsersUserNameRouteHandler: RouteHandler<
  typeof deleteMysqldatabasesDatabaseNameUsersUserNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMysqldatabasesDatabaseNameUsersUserNamePasswordRouteHandler: RouteHandler<
  typeof putMysqldatabasesDatabaseNameUsersUserNamePasswordRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMysqldatabasesDatabaseNameUsersUserNameStatusRouteHandler: RouteHandler<
  typeof putMysqldatabasesDatabaseNameUsersUserNameStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}
