import { OpenAPIHono } from '@hono/zod-openapi'
import {
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

const app = new OpenAPIHono()

export const boardsHandler = app
  .openapi(postBoardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBoardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBoardsBoardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBoardsBoardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchBoardsBoardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBoardsBoardIdPinsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBoardsBoardIdSectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBoardsBoardIdSectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBoardsBoardIdSectionsSectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchBoardsBoardIdSectionsSectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBoardsBoardIdSectionsSectionIdPinsRoute, (c) => {
    throw new Error('Not implemented')
  })
