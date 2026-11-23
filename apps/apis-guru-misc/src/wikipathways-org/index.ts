import { OpenAPIHono } from '@hono/zod-openapi'
import {
  createPathwayHandler,
  findInteractionsHandler,
  findPathwaysByLiteratureHandler,
  findPathwaysByTextHandler,
  findPathwaysByXrefHandler,
  getColoredPathwayHandler,
  getCurationTagHistoryHandler,
  getCurationTagsByNameHandler,
  getCurationTagsHandler,
  getOntologyTermsByPathwayHandler,
  getPathwayAsHandler,
  getPathwayHandler,
  getPathwayHistoryHandler,
  getPathwayInfoHandler,
  getPathwaysByOntologyTermHandler,
  getPathwaysByParentOntologyTermHandler,
  getRecentChangesHandler,
  getUserByOrcidHandler,
  getXrefListHandler,
  listOrganismsHandler,
  listPathwaysHandler,
  loginHandler,
  removeCurationTagHandler,
  removeOntologyTagHandler,
  saveCurationTagHandler,
  saveOntologyTagHandler,
  updatePathwayHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', createPathwayHandler)
  .route('/', findInteractionsHandler)
  .route('/', findPathwaysByLiteratureHandler)
  .route('/', findPathwaysByTextHandler)
  .route('/', findPathwaysByXrefHandler)
  .route('/', getColoredPathwayHandler)
  .route('/', getCurationTagHistoryHandler)
  .route('/', getCurationTagsHandler)
  .route('/', getCurationTagsByNameHandler)
  .route('/', getOntologyTermsByPathwayHandler)
  .route('/', getPathwayHandler)
  .route('/', getPathwayAsHandler)
  .route('/', getPathwayHistoryHandler)
  .route('/', getPathwayInfoHandler)
  .route('/', getPathwaysByOntologyTermHandler)
  .route('/', getPathwaysByParentOntologyTermHandler)
  .route('/', getRecentChangesHandler)
  .route('/', getUserByOrcidHandler)
  .route('/', getXrefListHandler)
  .route('/', listOrganismsHandler)
  .route('/', listPathwaysHandler)
  .route('/', loginHandler)
  .route('/', removeCurationTagHandler)
  .route('/', removeOntologyTagHandler)
  .route('/', saveCurationTagHandler)
  .route('/', saveOntologyTagHandler)
  .route('/', updatePathwayHandler)

export default app
