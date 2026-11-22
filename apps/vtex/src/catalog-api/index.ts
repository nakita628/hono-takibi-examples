import { OpenAPIHono } from '@hono/zod-openapi'
import {
  attachmentHandler,
  brandHandler,
  categoryHandler,
  categorySpecificationHandler,
  collectionBetaHandler,
  commercialConditionsHandler,
  giftListHandler,
  legacyCollectionHandler,
  legacySubcollectionHandler,
  nonStructuredSpecificationHandler,
  productHandler,
  productIndexingHandler,
  productSpecificationHandler,
  salesChannelHandler,
  sellerHandler,
  similarCategoryHandler,
  skuAttachmentHandler,
  skuComplementHandler,
  skueanHandler,
  skuFileHandler,
  skuHandler,
  skuKitHandler,
  skuSellerHandler,
  skuServiceAttachmentHandler,
  skuServiceHandler,
  skuServiceTypeHandler,
  skuServiceValueHandler,
  skuSpecificationHandler,
  specificationFieldHandler,
  specificationFieldValueHandler,
  specificationGroupHandler,
  specificationHandler,
  specificationValueHandler,
  supplierHandler,
  tradePolicyHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', giftListHandler)
  .route('/', productHandler)
  .route('/', attachmentHandler)
  .route('/', brandHandler)
  .route('/', categoryHandler)
  .route('/', legacyCollectionHandler)
  .route('/', collectionBetaHandler)
  .route('/', legacySubcollectionHandler)
  .route('/', tradePolicyHandler)
  .route('/', similarCategoryHandler)
  .route('/', productSpecificationHandler)
  .route('/', skuAttachmentHandler)
  .route('/', skuComplementHandler)
  .route('/', skuServiceHandler)
  .route('/', skuServiceTypeHandler)
  .route('/', skuServiceAttachmentHandler)
  .route('/', skuServiceValueHandler)
  .route('/', specificationHandler)
  .route('/', nonStructuredSpecificationHandler)
  .route('/', specificationGroupHandler)
  .route('/', specificationValueHandler)
  .route('/', skuHandler)
  .route('/', skuFileHandler)
  .route('/', skueanHandler)
  .route('/', skuSpecificationHandler)
  .route('/', skuKitHandler)
  .route('/', supplierHandler)
  .route('/', salesChannelHandler)
  .route('/', categorySpecificationHandler)
  .route('/', specificationFieldHandler)
  .route('/', specificationFieldValueHandler)
  .route('/', commercialConditionsHandler)
  .route('/', productIndexingHandler)
  .route('/', sellerHandler)
  .route('/', skuSellerHandler)

export default app
