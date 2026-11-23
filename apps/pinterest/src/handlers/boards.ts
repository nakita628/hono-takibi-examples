import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteBoardsBoardIdRoute,
  deleteBoardsBoardIdSectionsSectionIdRoute,
  getBoardsBoardIdPinsRoute,
  getBoardsBoardIdRoute,
  getBoardsBoardIdSectionsRoute,
  getBoardsBoardIdSectionsSectionIdPinsRoute,
  getBoardsRoute,
  patchBoardsBoardIdRoute,
  patchBoardsBoardIdSectionsSectionIdRoute,
  postBoardsBoardIdSectionsRoute,
  postBoardsRoute,
} from '../routes'

export const postBoardsRouteHandler: RouteHandler<typeof postBoardsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getBoardsRouteHandler: RouteHandler<typeof getBoardsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getBoardsBoardIdRouteHandler: RouteHandler<typeof getBoardsBoardIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteBoardsBoardIdRouteHandler: RouteHandler<
  typeof deleteBoardsBoardIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchBoardsBoardIdRouteHandler: RouteHandler<typeof patchBoardsBoardIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getBoardsBoardIdPinsRouteHandler: RouteHandler<
  typeof getBoardsBoardIdPinsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getBoardsBoardIdSectionsRouteHandler: RouteHandler<
  typeof getBoardsBoardIdSectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postBoardsBoardIdSectionsRouteHandler: RouteHandler<
  typeof postBoardsBoardIdSectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteBoardsBoardIdSectionsSectionIdRouteHandler: RouteHandler<
  typeof deleteBoardsBoardIdSectionsSectionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchBoardsBoardIdSectionsSectionIdRouteHandler: RouteHandler<
  typeof patchBoardsBoardIdSectionsSectionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getBoardsBoardIdSectionsSectionIdPinsRouteHandler: RouteHandler<
  typeof getBoardsBoardIdSectionsSectionIdPinsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
