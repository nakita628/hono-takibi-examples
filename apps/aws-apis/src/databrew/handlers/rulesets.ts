import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteRulesetsNameRoute,
  getRulesetsNameRoute,
  getRulesetsRoute,
  postRulesetsRoute,
  putRulesetsNameRoute,
} from '../routes'

export const postRulesetsRouteHandler: RouteHandler<typeof postRulesetsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getRulesetsRouteHandler: RouteHandler<typeof getRulesetsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRulesetsNameRouteHandler: RouteHandler<typeof deleteRulesetsNameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getRulesetsNameRouteHandler: RouteHandler<typeof getRulesetsNameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putRulesetsNameRouteHandler: RouteHandler<typeof putRulesetsNameRoute> = async (c) => {
  throw new Error('Not implemented')
}
