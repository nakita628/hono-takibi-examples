import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrganizationsOrganizationIdOrSlugNotebooksNotebookIdBlocksBlockIdIndexRoute,
  getOrganizationsOrganizationIdOrSlugNotebooksNotebookIdIndexRoute,
  postOrganizationsOrganizationIdOrSlugNotebooksIndexRoute,
  postOrganizationsOrganizationIdOrSlugNotebooksNotebookIdBlocksIndexRoute,
  putOrganizationsOrganizationIdOrSlugNotebooksNotebookIdBlocksBlockIdIndexRoute,
  putOrganizationsOrganizationIdOrSlugNotebooksNotebookIdBlocksOrderIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const notebooksHandler = app
  .openapi(postOrganizationsOrganizationIdOrSlugNotebooksIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugNotebooksNotebookIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdOrSlugNotebooksNotebookIdBlocksIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdOrSlugNotebooksNotebookIdBlocksBlockIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteOrganizationsOrganizationIdOrSlugNotebooksNotebookIdBlocksBlockIdIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(putOrganizationsOrganizationIdOrSlugNotebooksNotebookIdBlocksOrderIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
