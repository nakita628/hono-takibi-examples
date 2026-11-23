import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBotsBotNameAliasesAliasNameChannelsNameRoute,
  deleteBotsBotNameAliasesNameRoute,
  deleteBotsBotNameUtterancesUserIdRoute,
  deleteBotsNameRoute,
  deleteBotsNameVersionsVersionRoute,
  deleteIntentsNameRoute,
  deleteIntentsNameVersionsVersionRoute,
  deleteSlottypesNameRoute,
  deleteSlottypesNameVersionVersionRoute,
  deleteTagsResourceArnTagKeysRoute,
  getBotsBotNameAliasesAliasNameChannelsIndexRoute,
  getBotsBotNameAliasesAliasNameChannelsNameRoute,
  getBotsBotNameAliasesIndexRoute,
  getBotsBotNameAliasesNameRoute,
  getBotsBotnameUtterancesViewAggregationBotVersionsStatusTypeRoute,
  getBotsIndexRoute,
  getBotsNameVersionsIndexRoute,
  getBotsNameVersionsVersionoraliasRoute,
  getBuiltinsIntentsIndexRoute,
  getBuiltinsIntentsSignatureRoute,
  getBuiltinsSlottypesIndexRoute,
  getExportsNameVersionResourceTypeExportTypeRoute,
  getImportsImportIdRoute,
  getIntentsIndexRoute,
  getIntentsNameVersionsIndexRoute,
  getIntentsNameVersionsVersionRoute,
  getMigrationsMigrationIdRoute,
  getMigrationsRoute,
  getSlottypesIndexRoute,
  getSlottypesNameVersionsIndexRoute,
  getSlottypesNameVersionsVersionRoute,
  getTagsResourceArnRoute,
  postBotsNameVersionsRoute,
  postImportsIndexRoute,
  postIntentsNameVersionsRoute,
  postMigrationsRoute,
  postSlottypesNameVersionsRoute,
  postTagsResourceArnRoute,
  putBotsBotNameAliasesNameRoute,
  putBotsNameVersionsLATESTRoute,
  putIntentsNameVersionsLATESTRoute,
  putSlottypesNameVersionsLATESTRoute,
} from './routes'
import {
  deleteBotsBotNameAliasesAliasNameChannelsNameRouteHandler,
  deleteBotsBotNameAliasesNameRouteHandler,
  deleteBotsBotNameUtterancesUserIdRouteHandler,
  deleteBotsNameRouteHandler,
  deleteBotsNameVersionsVersionRouteHandler,
  deleteIntentsNameRouteHandler,
  deleteIntentsNameVersionsVersionRouteHandler,
  deleteSlottypesNameRouteHandler,
  deleteSlottypesNameVersionVersionRouteHandler,
  deleteTagsResourceArnTagKeysRouteHandler,
  getBotsBotNameAliasesAliasNameChannelsIndexRouteHandler,
  getBotsBotNameAliasesAliasNameChannelsNameRouteHandler,
  getBotsBotNameAliasesIndexRouteHandler,
  getBotsBotNameAliasesNameRouteHandler,
  getBotsBotnameUtterancesViewAggregationBotVersionsStatusTypeRouteHandler,
  getBotsIndexRouteHandler,
  getBotsNameVersionsIndexRouteHandler,
  getBotsNameVersionsVersionoraliasRouteHandler,
  getBuiltinsIntentsIndexRouteHandler,
  getBuiltinsIntentsSignatureRouteHandler,
  getBuiltinsSlottypesIndexRouteHandler,
  getExportsNameVersionResourceTypeExportTypeRouteHandler,
  getImportsImportIdRouteHandler,
  getIntentsIndexRouteHandler,
  getIntentsNameVersionsIndexRouteHandler,
  getIntentsNameVersionsVersionRouteHandler,
  getMigrationsMigrationIdRouteHandler,
  getMigrationsRouteHandler,
  getSlottypesIndexRouteHandler,
  getSlottypesNameVersionsIndexRouteHandler,
  getSlottypesNameVersionsVersionRouteHandler,
  getTagsResourceArnRouteHandler,
  postBotsNameVersionsRouteHandler,
  postImportsIndexRouteHandler,
  postIntentsNameVersionsRouteHandler,
  postMigrationsRouteHandler,
  postSlottypesNameVersionsRouteHandler,
  postTagsResourceArnRouteHandler,
  putBotsBotNameAliasesNameRouteHandler,
  putBotsNameVersionsLATESTRouteHandler,
  putIntentsNameVersionsLATESTRouteHandler,
  putSlottypesNameVersionsLATESTRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postBotsNameVersionsRoute, postBotsNameVersionsRouteHandler)
  .openapi(postIntentsNameVersionsRoute, postIntentsNameVersionsRouteHandler)
  .openapi(postSlottypesNameVersionsRoute, postSlottypesNameVersionsRouteHandler)
  .openapi(deleteBotsNameRoute, deleteBotsNameRouteHandler)
  .openapi(deleteBotsBotNameAliasesNameRoute, deleteBotsBotNameAliasesNameRouteHandler)
  .openapi(getBotsBotNameAliasesNameRoute, getBotsBotNameAliasesNameRouteHandler)
  .openapi(putBotsBotNameAliasesNameRoute, putBotsBotNameAliasesNameRouteHandler)
  .openapi(
    deleteBotsBotNameAliasesAliasNameChannelsNameRoute,
    deleteBotsBotNameAliasesAliasNameChannelsNameRouteHandler,
  )
  .openapi(
    getBotsBotNameAliasesAliasNameChannelsNameRoute,
    getBotsBotNameAliasesAliasNameChannelsNameRouteHandler,
  )
  .openapi(deleteBotsNameVersionsVersionRoute, deleteBotsNameVersionsVersionRouteHandler)
  .openapi(deleteIntentsNameRoute, deleteIntentsNameRouteHandler)
  .openapi(deleteIntentsNameVersionsVersionRoute, deleteIntentsNameVersionsVersionRouteHandler)
  .openapi(getIntentsNameVersionsVersionRoute, getIntentsNameVersionsVersionRouteHandler)
  .openapi(deleteSlottypesNameRoute, deleteSlottypesNameRouteHandler)
  .openapi(deleteSlottypesNameVersionVersionRoute, deleteSlottypesNameVersionVersionRouteHandler)
  .openapi(deleteBotsBotNameUtterancesUserIdRoute, deleteBotsBotNameUtterancesUserIdRouteHandler)
  .openapi(getBotsNameVersionsVersionoraliasRoute, getBotsNameVersionsVersionoraliasRouteHandler)
  .openapi(getBotsBotNameAliasesIndexRoute, getBotsBotNameAliasesIndexRouteHandler)
  .openapi(
    getBotsBotNameAliasesAliasNameChannelsIndexRoute,
    getBotsBotNameAliasesAliasNameChannelsIndexRouteHandler,
  )
  .openapi(getBotsNameVersionsIndexRoute, getBotsNameVersionsIndexRouteHandler)
  .openapi(getBotsIndexRoute, getBotsIndexRouteHandler)
  .openapi(getBuiltinsIntentsSignatureRoute, getBuiltinsIntentsSignatureRouteHandler)
  .openapi(getBuiltinsIntentsIndexRoute, getBuiltinsIntentsIndexRouteHandler)
  .openapi(getBuiltinsSlottypesIndexRoute, getBuiltinsSlottypesIndexRouteHandler)
  .openapi(
    getExportsNameVersionResourceTypeExportTypeRoute,
    getExportsNameVersionResourceTypeExportTypeRouteHandler,
  )
  .openapi(getImportsImportIdRoute, getImportsImportIdRouteHandler)
  .openapi(getIntentsNameVersionsIndexRoute, getIntentsNameVersionsIndexRouteHandler)
  .openapi(getIntentsIndexRoute, getIntentsIndexRouteHandler)
  .openapi(getMigrationsMigrationIdRoute, getMigrationsMigrationIdRouteHandler)
  .openapi(getMigrationsRoute, getMigrationsRouteHandler)
  .openapi(postMigrationsRoute, postMigrationsRouteHandler)
  .openapi(getSlottypesNameVersionsVersionRoute, getSlottypesNameVersionsVersionRouteHandler)
  .openapi(getSlottypesNameVersionsIndexRoute, getSlottypesNameVersionsIndexRouteHandler)
  .openapi(getSlottypesIndexRoute, getSlottypesIndexRouteHandler)
  .openapi(
    getBotsBotnameUtterancesViewAggregationBotVersionsStatusTypeRoute,
    getBotsBotnameUtterancesViewAggregationBotVersionsStatusTypeRouteHandler,
  )
  .openapi(getTagsResourceArnRoute, getTagsResourceArnRouteHandler)
  .openapi(postTagsResourceArnRoute, postTagsResourceArnRouteHandler)
  .openapi(putBotsNameVersionsLATESTRoute, putBotsNameVersionsLATESTRouteHandler)
  .openapi(putIntentsNameVersionsLATESTRoute, putIntentsNameVersionsLATESTRouteHandler)
  .openapi(putSlottypesNameVersionsLATESTRoute, putSlottypesNameVersionsLATESTRouteHandler)
  .openapi(postImportsIndexRoute, postImportsIndexRouteHandler)
  .openapi(deleteTagsResourceArnTagKeysRoute, deleteTagsResourceArnTagKeysRouteHandler)

export default app
