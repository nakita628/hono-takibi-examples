import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProductDeleteJsonRoute,
  deleteProductImageDeleteJsonRoute,
  deleteProductPriceDeleteJsonRoute,
  deleteProductVariantDeleteJsonRoute,
  deleteProductVariantImageDeleteJsonRoute,
  deleteProductVariantPriceDeleteJsonRoute,
  getProductAttributeListJsonRoute,
  getProductBrandListJsonRoute,
  getProductChildItemFindJsonRoute,
  getProductChildItemInfoJsonRoute,
  getProductChildItemListJsonRoute,
  getProductCountJsonRoute,
  getProductCurrencyListJsonRoute,
  getProductFieldsJsonRoute,
  getProductFindJsonRoute,
  getProductInfoJsonRoute,
  getProductListJsonRoute,
  getProductOptionListJsonRoute,
  getProductReviewListJsonRoute,
  getProductVariantCountJsonRoute,
  getProductVariantInfoJsonRoute,
  getProductVariantListJsonRoute,
  postProductAddJsonRoute,
  postProductAttributeValueSetJsonRoute,
  postProductAttributeValueUnsetJsonRoute,
  postProductCurrencyAddJsonRoute,
  postProductImageAddJsonRoute,
  postProductManufacturerAddJsonRoute,
  postProductOptionAddJsonRoute,
  postProductOptionAssignJsonRoute,
  postProductOptionValueAddJsonRoute,
  postProductOptionValueAssignJsonRoute,
  postProductPriceAddJsonRoute,
  postProductStoreAssignJsonRoute,
  postProductTaxAddJsonRoute,
  postProductVariantAddJsonRoute,
  postProductVariantImageAddJsonRoute,
  postProductVariantPriceAddJsonRoute,
  putProductImageUpdateJsonRoute,
  putProductOptionValueUpdateJsonRoute,
  putProductPriceUpdateJsonRoute,
  putProductUpdateJsonRoute,
  putProductVariantPriceUpdateJsonRoute,
  putProductVariantUpdateJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const productHandler = app
  .openapi(postProductAddJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProductAttributeListJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProductAttributeValueSetJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProductAttributeValueUnsetJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProductBrandListJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProductChildItemFindJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProductChildItemInfoJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProductChildItemListJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProductCountJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProductCurrencyAddJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProductCurrencyListJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProductDeleteJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProductFieldsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProductFindJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProductImageAddJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProductImageDeleteJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProductImageUpdateJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProductInfoJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProductListJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProductManufacturerAddJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProductOptionAddJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProductOptionAssignJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProductOptionListJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProductOptionValueAddJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProductOptionValueAssignJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProductOptionValueUpdateJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProductPriceAddJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProductPriceDeleteJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProductPriceUpdateJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProductReviewListJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProductStoreAssignJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProductTaxAddJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProductUpdateJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProductVariantAddJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProductVariantCountJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProductVariantDeleteJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProductVariantImageAddJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProductVariantImageDeleteJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProductVariantInfoJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProductVariantListJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProductVariantPriceAddJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProductVariantPriceDeleteJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProductVariantPriceUpdateJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProductVariantUpdateJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
