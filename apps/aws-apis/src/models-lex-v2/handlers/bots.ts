import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBotsBotIdBotaliasesBotAliasIdIndexRoute,
  deleteBotsBotIdBotversionsBotVersionBotlocalesLocaleIdCustomvocabularyRoute,
  deleteBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIndexRoute,
  deleteBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdIndexRoute,
  deleteBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdSlotsSlotIdIndexRoute,
  deleteBotsBotIdBotversionsBotVersionBotlocalesLocaleIdSlottypesSlotTypeIdIndexRoute,
  deleteBotsBotIdBotversionsBotVersionIndexRoute,
  deleteBotsBotIdIndexRoute,
  deleteBotsBotIdUtterancesIndexRoute,
  getBotsBotIdBotaliasesBotAliasIdIndexRoute,
  getBotsBotIdBotversionsBotVersionBotlocalesLocaleIdBotrecommendationsBotRecommendationIdIndexRoute,
  getBotsBotIdBotversionsBotVersionBotlocalesLocaleIdCustomvocabularyDEFAULTMetadataRoute,
  getBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIndexRoute,
  getBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdIndexRoute,
  getBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdSlotsSlotIdIndexRoute,
  getBotsBotIdBotversionsBotVersionBotlocalesLocaleIdSlottypesSlotTypeIdIndexRoute,
  getBotsBotIdBotversionsBotVersionIndexRoute,
  getBotsBotIdIndexRoute,
  postBotsBotIdAggregatedutterancesIndexRoute,
  postBotsBotIdBotaliasesIndexRoute,
  postBotsBotIdBotversionsBotVersionBotlocalesIndexRoute,
  postBotsBotIdBotversionsBotVersionBotlocalesLocaleIdBotrecommendationsBotRecommendationIdAssociatedtranscriptsRoute,
  postBotsBotIdBotversionsBotVersionBotlocalesLocaleIdBotrecommendationsBotRecommendationIdIntentsRoute,
  postBotsBotIdBotversionsBotVersionBotlocalesLocaleIdBotrecommendationsIndexRoute,
  postBotsBotIdBotversionsBotVersionBotlocalesLocaleIdCustomvocabularyDEFAULTBatchdeleteRoute,
  postBotsBotIdBotversionsBotVersionBotlocalesLocaleIdCustomvocabularyDEFAULTListRoute,
  postBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIndexRoute,
  postBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIndexRoute,
  postBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdSlotsIndexRoute,
  postBotsBotIdBotversionsBotVersionBotlocalesLocaleIdSlottypesIndexRoute,
  postBotsBotIdBotversionsIndexRoute,
  postBotsIndexRoute,
  putBotsBotIdBotaliasesBotAliasIdIndexRoute,
  putBotsBotIdBotaliasesIndexRoute,
  putBotsBotIdBotversionsBotVersionBotlocalesIndexRoute,
  putBotsBotIdBotversionsBotVersionBotlocalesLocaleIdBotrecommendationsBotRecommendationIdIndexRoute,
  putBotsBotIdBotversionsBotVersionBotlocalesLocaleIdBotrecommendationsBotRecommendationIdStopbotrecommendationRoute,
  putBotsBotIdBotversionsBotVersionBotlocalesLocaleIdBotrecommendationsIndexRoute,
  putBotsBotIdBotversionsBotVersionBotlocalesLocaleIdCustomvocabularyDEFAULTBatchcreateRoute,
  putBotsBotIdBotversionsBotVersionBotlocalesLocaleIdCustomvocabularyDEFAULTBatchupdateRoute,
  putBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIndexRoute,
  putBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIndexRoute,
  putBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdIndexRoute,
  putBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdSlotsIndexRoute,
  putBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdSlotsSlotIdIndexRoute,
  putBotsBotIdBotversionsBotVersionBotlocalesLocaleIdSlottypesIndexRoute,
  putBotsBotIdBotversionsBotVersionBotlocalesLocaleIdSlottypesSlotTypeIdIndexRoute,
  putBotsBotIdBotversionsIndexRoute,
  putBotsBotIdIndexRoute,
  putBotsIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const botsHandler = app
  .openapi(
    putBotsBotIdBotversionsBotVersionBotlocalesLocaleIdCustomvocabularyDEFAULTBatchcreateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postBotsBotIdBotversionsBotVersionBotlocalesLocaleIdCustomvocabularyDEFAULTBatchdeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putBotsBotIdBotversionsBotVersionBotlocalesLocaleIdCustomvocabularyDEFAULTBatchupdateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBotsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBotsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBotsBotIdBotaliasesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBotsBotIdBotaliasesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBotsBotIdBotversionsBotVersionBotlocalesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBotsBotIdBotversionsBotVersionBotlocalesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBotsBotIdBotversionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBotsBotIdBotversionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    putBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdSlotsIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdSlotsIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(putBotsBotIdBotversionsBotVersionBotlocalesLocaleIdSlottypesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBotsBotIdBotversionsBotVersionBotlocalesLocaleIdSlottypesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBotsBotIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBotsBotIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBotsBotIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBotsBotIdBotaliasesBotAliasIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBotsBotIdBotaliasesBotAliasIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBotsBotIdBotaliasesBotAliasIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBotsBotIdBotversionsBotVersionIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBotsBotIdBotversionsBotVersionIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBotsBotIdBotversionsBotVersionBotlocalesLocaleIdCustomvocabularyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdSlotsSlotIdIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdSlotsSlotIdIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdSlotsSlotIdIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteBotsBotIdBotversionsBotVersionBotlocalesLocaleIdSlottypesSlotTypeIdIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getBotsBotIdBotversionsBotVersionBotlocalesLocaleIdSlottypesSlotTypeIdIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putBotsBotIdBotversionsBotVersionBotlocalesLocaleIdSlottypesSlotTypeIdIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(deleteBotsBotIdUtterancesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getBotsBotIdBotversionsBotVersionBotlocalesLocaleIdBotrecommendationsBotRecommendationIdIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putBotsBotIdBotversionsBotVersionBotlocalesLocaleIdBotrecommendationsBotRecommendationIdIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getBotsBotIdBotversionsBotVersionBotlocalesLocaleIdCustomvocabularyDEFAULTMetadataRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postBotsBotIdAggregatedutterancesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postBotsBotIdBotversionsBotVersionBotlocalesLocaleIdBotrecommendationsIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(putBotsBotIdBotversionsBotVersionBotlocalesLocaleIdBotrecommendationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postBotsBotIdBotversionsBotVersionBotlocalesLocaleIdCustomvocabularyDEFAULTListRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postBotsBotIdBotversionsBotVersionBotlocalesLocaleIdBotrecommendationsBotRecommendationIdIntentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postBotsBotIdBotversionsBotVersionBotlocalesLocaleIdBotrecommendationsBotRecommendationIdAssociatedtranscriptsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putBotsBotIdBotversionsBotVersionBotlocalesLocaleIdBotrecommendationsBotRecommendationIdStopbotrecommendationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
