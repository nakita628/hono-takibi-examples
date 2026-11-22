import { OpenAPIHono } from '@hono/zod-openapi'
import {
  benzingaHandler,
  cryptoAggregatesHandler,
  cryptoLastTradeHandler,
  cryptoOpenCloseHandler,
  cryptoSnapshotHandler,
  cryptoTradesHandler,
  etfglobalHandler,
  fableHandler,
  fedHandler,
  financialsHandler,
  futuresAggregatesHandler,
  fxAggregatesHandler,
  fxConversionHandler,
  fxLastQuoteHandler,
  fxQuotesHandler,
  fxSnapshotHandler,
  fxTradesHandler,
  globalCryptoHandler,
  globalForexHandler,
  indicesAggregatesHandler,
  indicesSnapshotHandler,
  optionsAggregatesHandler,
  optionsLastTradeHandler,
  optionsOpenCloseHandler,
  optionsQuotesHandler,
  optionsSnapshotHandler,
  optionsTradesHandler,
  referenceConditionsHandler,
  referenceDividendsHandler,
  referenceExchangesHandler,
  referenceHandler,
  referenceNewsHandler,
  referenceOptionsContractHandler,
  referenceOptionsContractsListHandler,
  referenceRelatedCompaniesHandler,
  referenceSecFilingFileHandler,
  referenceSecFilingFilesHandler,
  referenceSecFilingHandler,
  referenceSecFilingsHandler,
  referenceStocksHandler,
  referenceStocksIposHandler,
  referenceStocksMarketHandler,
  referenceTickersGetHandler,
  referenceTickersListHandler,
  referenceTickersTypesHandler,
  stocksAggregatesHandler,
  stocksLastQuoteHandler,
  stocksLastTradeHandler,
  stocksOpenCloseHandler,
  stocksQuotesHandler,
  stocksSnapshotHandler,
  stocksTradesHandler,
  tmxHandler,
  usFuturesHandler,
  usOptionsHandler,
  usStocksAllHandler,
  usStocksReferenceHandler,
  v3Handler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', benzingaHandler)
  .route('/', fableHandler)
  .route('/', globalCryptoHandler)
  .route('/', etfglobalHandler)
  .route('/', fedHandler)
  .route('/', globalForexHandler)
  .route('/', futuresAggregatesHandler)
  .route('/', usFuturesHandler)
  .route('/', usOptionsHandler)
  .route('/', usStocksAllHandler)
  .route('/', referenceHandler)
  .route('/', financialsHandler)
  .route('/', usStocksReferenceHandler)
  .route('/', tmxHandler)
  .route('/', fxConversionHandler)
  .route('/', cryptoTradesHandler)
  .route('/', fxTradesHandler)
  .route('/', cryptoAggregatesHandler)
  .route('/', fxAggregatesHandler)
  .route('/', indicesAggregatesHandler)
  .route('/', optionsAggregatesHandler)
  .route('/', stocksAggregatesHandler)
  .route('/', cryptoLastTradeHandler)
  .route('/', fxLastQuoteHandler)
  .route('/', referenceStocksMarketHandler)
  .route('/', cryptoOpenCloseHandler)
  .route('/', stocksOpenCloseHandler)
  .route('/', optionsOpenCloseHandler)
  .route('/', referenceSecFilingsHandler)
  .route('/', referenceSecFilingHandler)
  .route('/', referenceSecFilingFilesHandler)
  .route('/', referenceSecFilingFileHandler)
  .route('/', referenceRelatedCompaniesHandler)
  .route('/', stocksLastQuoteHandler)
  .route('/', optionsLastTradeHandler)
  .route('/', stocksLastTradeHandler)
  .route('/', referenceNewsHandler)
  .route('/', cryptoSnapshotHandler)
  .route('/', fxSnapshotHandler)
  .route('/', stocksSnapshotHandler)
  .route('/', stocksQuotesHandler)
  .route('/', stocksTradesHandler)
  .route('/', fxQuotesHandler)
  .route('/', optionsQuotesHandler)
  .route('/', referenceConditionsHandler)
  .route('/', referenceDividendsHandler)
  .route('/', referenceExchangesHandler)
  .route('/', referenceOptionsContractsListHandler)
  .route('/', referenceOptionsContractHandler)
  .route('/', referenceStocksHandler)
  .route('/', referenceTickersListHandler)
  .route('/', referenceTickersTypesHandler)
  .route('/', referenceTickersGetHandler)
  .route('/', v3Handler)
  .route('/', indicesSnapshotHandler)
  .route('/', optionsSnapshotHandler)
  .route('/', optionsTradesHandler)
  .route('/', referenceStocksIposHandler)

export default app
