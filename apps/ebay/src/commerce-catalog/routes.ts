import { createRoute, z } from '@hono/zod-openapi'

const AspectSchema = z
  .object({
    localizedName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The localized name of this category aspect.' }),
    localizedValues: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'A list of the localized values of this category aspect.' }),
  })
  .openapi({
    description: 'This type contains the name and values of a category aspect.',
    required: [],
  })
  .openapi('Aspect')

const AspectValueDistributionSchema = z
  .object({
    localizedAspectValue: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The localized value of the category aspect identified by <b>refinement.aspectDistributions.localizedAspectName</b>.',
      }),
    matchCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          "The number of times the value of <b>localizedAspectValue</b> has been used for eBay product listings. By comparing this quantity to the <b>matchCount</b> for other values of the same aspect, you can present a histogram of the values to sellers, who can use that information to select which aspect value is most appropriate for their product. You can then include the user-selected value in the the <b>search</b> call's <b>aspect_filter</b> parameter to refine your search.",
      }),
    refinementHref: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A HATEOAS reference that further refines the search with this particular <b>localizedAspectValue</b>.',
      }),
  })
  .openapi({
    description:
      'This type contains information about one value of a specified aspect. This value serves as a product refinement.',
    required: [],
  })
  .openapi('AspectValueDistribution')

const AspectDistributionSchema = z
  .object({
    aspectValueDistributions: z
      .array(AspectValueDistributionSchema)
      .exactOptional()
      .openapi({
        description:
          'Contains information about one or more values of the category aspect identified by <b>localizedAspectName</b>. ',
      }),
    localizedAspectName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The localized name of an aspect that is associated with the category identified by <b>dominantCategoryId</b>.',
      }),
  })
  .openapi({
    description:
      'This type contains information about one category aspect that is associated with a specified category.',
    required: [],
  })
  .openapi('AspectDistribution')

const ErrorParameterSchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'The object of the error.' }),
    value: z.string().exactOptional().openapi({ description: 'The value of the object.' }),
  })
  .openapi({ required: [] })
  .openapi('ErrorParameter')

const ErrorSchema = z
  .object({
    category: z.string().exactOptional().openapi({ description: 'Identifies the type of erro.' }),
    domain: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name for the primary system where the error occurred. This is relevant for application errors.',
      }),
    errorId: z
      .int32()
      .exactOptional()
      .openapi({ description: 'A unique number to identify the error.' }),
    inputRefIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'An array of request elements most closely associated to the error.',
      }),
    longMessage: z
      .string()
      .exactOptional()
      .openapi({ description: 'A more detailed explanation of the error.' }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Information on how to correct the problem, in the end user's terms and language where applicable.",
      }),
    outputRefIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'An array of request elements most closely associated to the error.',
      }),
    parameters: z
      .array(ErrorParameterSchema)
      .exactOptional()
      .openapi({
        description:
          'An array of name/value pairs that describe details the error condition. These are useful when multiple errors are returned.',
      }),
    subdomain: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Further helps indicate which subsystem the error is coming from. System subcategories include: Initialization, Serialization, Security, Monitoring, Rate Limiting, etc.',
      }),
  })
  .openapi({
    description: 'This type defines the fields that can be returned in an error.',
    required: [],
  })
  .openapi('Error')

const ImageSchema = z
  .object({
    height: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The height of the image in pixels.' }),
    imageUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'The eBay Picture Services (EPS) URL of the image.' }),
    width: z.int32().exactOptional().openapi({ description: 'The width of the image in pixels.' }),
  })
  .openapi({
    description:
      'This type contains information about a product image stored in eBay Picture Services (EPS).',
    required: [],
  })
  .openapi('Image')

const ProductSchema = z
  .object({
    additionalImages: z
      .array(ImageSchema)
      .exactOptional()
      .openapi({
        description:
          'Contains information about  additional images associated with this product. For the primary image, see the <b>image</b> container.',
      }),
    aspects: z
      .array(AspectSchema)
      .exactOptional()
      .openapi({
        description:
          'Contains an array of the category aspects and their values that are associated with this product.',
      }),
    brand: z
      .string()
      .exactOptional()
      .openapi({ description: "The manufacturer's brand name for this product." }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'The rich description of this product, which might contain HTML.' }),
    ean: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'A list of all European Article Numbers (EANs) that identify this product.',
      }),
    epid: z
      .string()
      .exactOptional()
      .openapi({ description: 'The eBay product ID of this product.' }),
    gtin: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A list of all GTINs that identify this product. Currently this can include EAN, ISBN, and UPC identifier types.',
      }),
    image: ImageSchema.exactOptional().openapi({
      description:
        'Contains information about the primary image of this product. For more images of this product, see the <b>additionalImages</b> container.',
    }),
    isbn: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A list of all International Standard Book Numbers (ISBNs) that identify this product. ',
      }),
    mpn: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A list of all MPN values that the manufacturer uses to identify this product.',
      }),
    otherApplicableCategoryIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A list of category IDs (other than the value of <b>primaryCategoryId</b>) for all the leaf categories to which this product might belong.',
      }),
    primaryCategoryId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The identifier of the leaf category that eBay recommends using to list this product, based on previous listings of similar products. Products in the eBay catalog are not automatically associated with any particular category, but using an inappropriate category can make it difficult for prospective buyers to find the product. For other possible categories that might be used, see <b>otherApplicableCategoryIds</b>.',
      }),
    productWebUrl: z
      .string()
      .exactOptional()
      .openapi({ description: "The URL for this product's eBay product page." }),
    title: z
      .string()
      .exactOptional()
      .openapi({ description: 'The title of this product on eBay.' }),
    upc: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'A list of Universal Product Codes (UPCs) that identify this product.',
      }),
    version: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The current version number of this product record in the catalog.',
      }),
  })
  .openapi({
    description:
      "This type contains the full details of a specified product, including information about the product's identifiers, product images, aspects, and categories.",
    required: [],
  })
  .openapi('Product')

const ProductSummarySchema = z
  .object({
    additionalImages: z
      .array(ImageSchema)
      .exactOptional()
      .openapi({
        description:
          'Contains information about additional images associated with this product. For the primary image, see the <b>image</b> container.',
      }),
    aspects: z
      .array(AspectSchema)
      .exactOptional()
      .openapi({
        description:
          'Contains an array of the category aspects and their values that are associated with this product.',
      }),
    brand: z
      .string()
      .exactOptional()
      .openapi({ description: "The manufacturer's brand name for this product." }),
    ean: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'A list of all European Article Numbers (EANs) that identify this product.',
      }),
    epid: z
      .string()
      .exactOptional()
      .openapi({ description: 'The eBay product ID of this product.' }),
    gtin: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A list of all GTINs that identify this product. This includes all of the values returned in the <b>ean</b>, <b>isbn</b>, and <b>upc</b> fields.',
      }),
    image: ImageSchema.exactOptional().openapi({
      description:
        'Contains information about the primary image of this product. For more images of this product, see the <b>additionalImages</b> container.',
    }),
    isbn: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A list of all International Standard Book Numbers (ISBNs) that identify this product.',
      }),
    mpn: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A list of all Manufacturer Product Number (MPN) values that the manufacturer uses to identify this product.',
      }),
    productHref: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The URI of the <b>getProduct</b> call request that retrieves this product's details.",
      }),
    productWebUrl: z
      .string()
      .exactOptional()
      .openapi({ description: "The URL for this product's eBay product page." }),
    title: z
      .string()
      .exactOptional()
      .openapi({ description: 'The title of this product on eBay.' }),
    upc: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'A list of Universal Product Codes (UPCs) that identify this product.',
      }),
  })
  .openapi({
    description:
      "This type contains a summary of a specified product. The product summary includes information about the product's identifiers, product images, aspects, and the <b>getProduct</b> URL for retrieving the product details.",
    required: [],
  })
  .openapi('ProductSummary')

const RefinementSchema = z
  .object({
    aspectDistributions: z
      .array(AspectDistributionSchema)
      .exactOptional()
      .openapi({
        description:
          'Contains information about one or more aspects that are associated with the category identified by <b>dominantCategoryId</b>.',
      }),
    dominantCategoryId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the category that eBay determines is most likely to cover the products matching the search criteria.',
      }),
  })
  .openapi({
    description:
      'This type identifies a product category and the aspects associated with that category. Each aspect distribution container returns the distribution of values that have been used for the aspect.',
    required: [],
  })
  .openapi('Refinement')

const ProductSearchResponseSchema = z
  .object({
    href: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This field is reserved for internal or future use. <!-- The URI of the <b>search</b> method request that produced this result set. -->',
      }),
    limit: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The number of product summaries returned in the response. This is the <i>result set</i>, a subset of the full collection of products that match the search or filter criteria of this call. If the <b>limit</b> query parameter was included in the request, this field will have the same value. <br /><br /> <b>Default:</b> <code>50</code>',
      }),
    next: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This field is reserved for internal or future use. <!-- <i>Returned only if</i> there are more product records to retrieve from the current collection of matching products, this field contains the <b>search</b> call URI for the next result set. For example, the following URI returns records 41 thru 50 from the collection of matched products: <br /><br /> <code><i>path</i>/product_summary/search?limit=10&offset=40</code> <br /><br />  <span class="tablenote"><strong>Note:</strong> This feature employs a zero-based list, where the first product in the list has an offset of <code>0</code>.</span> -->',
      }),
    offset: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'This field is reserved for internal or future use. <!-- The distance (number of records) from the first product in the collection to the first product in this result set. If the <b>offset</b> query parameter was included in the request, this field will have the same value. The <b>offset</b> value is used in conjunction with the <b>limit</b> value to control the pagination of the output. For example, if <b>offset</b> is set to <code>30</code> and <b>limit</b> is set to <code>10</code>, the call retrieves products 31 thru 40 from the resulting collection of products. <br /><br />  <span class="tablenote"><strong>Note:</strong> This feature employs a zero-based list, where the first item in the list has an offset of <code>0</code>.</span> <br /><br /> <b>Default:</b> <code>0</code> (zero) -->',
      }),
    prev: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This field is reserved for internal or future use.  !-- <i>Not returned if</i> the currently returned result set is the first set of product records from the current collection of matching products. This field contains the <b>search</b> call URI for the previous result set. For example, the following URI returns products 21 thru 30 from the collection of products: <br /><br /> <code><i>path</i>/product_summary/search?limit=10&offset=20</code> <br /><br />  <span class="tablenote"><strong>Note:</strong> This feature employs a zero-based list, where the first product in the list has an offset of <code>0</code>.</span> >',
      }),
    productSummaries: z
      .array(ProductSummarySchema)
      .exactOptional()
      .openapi({
        description:
          "<i>Returned if</i> the <b>fieldGroups</b> query parameter was omitted from the request, or if it was included with a value of <code>MATCHING_PRODUCTS</code> or <code>FULL</code>. This container provides an array of product summaries in the current result set for products that match the combination of the <b>q</b>, <b>category_ids</b>, and <b>aspect_filter</b> parameters that were provided in the request. Each product summary includes information about the product's identifiers, product images, aspects, the product page URL, and the <b>getProduct</b> URL for retrieving the product details.",
      }),
    refinement: RefinementSchema.exactOptional().openapi({
      description:
        "<i>Returned only if</i> the <b>fieldGroups</b> query parameter was included in the request with a value of <code>ASPECT_REFINEMENTS</code> or <code>FULL</code>. <br /><br /> An aspect is a property of a category, used by sellers to provide details about the items they're listing. For example, the <i>Cell Phones &amp; Smartphones</i> category (#9355) includes a <i>Storage Capacity</i> aspect. <br /><br /> This container provides information about the distribution of values of a set of category aspects. The category aspects are those associated with the category that eBay determines is most likely to cover the products that match the search criteria.",
    }),
    total: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'This field is reserved for internal or future use. <!-- The total number of product records in the returned collection of matched products. >',
      }),
  })
  .openapi({
    description:
      'This type contains the specifications for the collection of products that match the search or filter criteria of a <b>search</b> call. A maximum of 200 product summaries is returned (the result set), fewer if you include the <b>limit</b> query parameter in the request. ',
    required: [],
  })
  .openapi('ProductSearchResponse')

const ApiAuthSecurityScheme = {
  description:
    'The security definitions for this API. Please check individual operations for applicable scopes.',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://auth.ebay.com/oauth2/authorize',
      scopes: {
        'https://api.ebay.com/oauth/api_scope/commerce.catalog.readonly':
          ' This scope would allow signed in user to read catalog data.',
        'https://api.ebay.com/oauth/api_scope/sell.inventory':
          'View and manage your inventory and offers',
      },
      tokenUrl: 'https://api.ebay.com/identity/v1/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const getProductEpidRoute = createRoute({
  method: 'get',
  path: '/product/{epid}',
  tags: ['product'],
  description:
    "This method retrieves details of the catalog product identified by the eBay product identifier (ePID) specified in the request. These details include the product's title and description, aspects and their values, associated images, applicable category IDs, and any recognized identifiers that apply to the product. <br /><br /> For a new listing, you can use the <b>search</b> method to identify candidate products on which to base the listing, then use the <b>getProduct</b> method to present the full details of those candidate products to the seller to make a a final selection.",
  operationId: 'getProduct',
  request: {
    headers: z.object({
      'X-EBAY-C-MARKETPLACE-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "This method also uses the <code>X-EBAY-C-MARKETPLACE-ID</code> header to identify the seller's eBay marketplace. It is required for all marketplaces except EBAY_US, which is the default. <b>Note:</b> This method is limited to <code>EBAY_US</code>, <code>EBAY_AU</code>, <code>EBAY_CA</code>, and <code>EBAY_GB</code> values.",
            in: 'header',
            name: 'X-EBAY-C-MARKETPLACE-ID',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      epid: z
        .string()
        .openapi({
          param: {
            description:
              'The ePID of the product being requested. This value can be discovered by issuing the <b>search</b> method and examining the value of the <b>productSummaries.epid</b> field for the desired returned product summary.',
            in: 'path',
            name: 'epid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: ProductSchema } } },
    400: { description: 'Bad Request' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [
    {
      api_auth: [
        'https://api.ebay.com/oauth/api_scope/sell.inventory',
        'https://api.ebay.com/oauth/api_scope/commerce.catalog.readonly',
      ],
    },
  ],
})

export const getProductSummarySearchRoute = createRoute({
  method: 'get',
  path: '/product_summary/search',
  tags: ['product_summary'],
  description:
    'This method searches for and retrieves summaries of one or more products in the eBay catalog that match the search criteria provided by a seller. The seller can use the summaries to select the product in the eBay catalog that corresponds to the item that the seller wants to offer for sale. When a corresponding product is found and adopted by the seller, eBay will use the product information to populate the item listing. The criteria supported by <b>search</b> include keywords, product categories, and category aspects. To see the full details of a selected product, use the <b>getProduct</b> call. <br /><br /> In addition to product summaries, this method can also be used to identify <i>refinements</i>, which help you to better pinpoint the product you\'re looking for. A refinement consists of one or more <i>aspect</i> values and a count of the number of times that each value has been used in previous eBay listings. An aspect is a property (e.g. color or size) of an eBay category, used by sellers to provide details about the items they\'re listing. The <b>refinement</b> container is returned when you include the <b>fieldGroups</b> query parameter in the request with a value of <code>ASPECT_REFINEMENTS</code> or <code>FULL</code>. <br /><br /> <span style="padding: 15px 20px; display: block; border: 1px solid #cccccc"><b>Example</b> <br />A seller wants to find a product that is "gray" in color, but doesn\'t know what term the manufacturer uses for that color. It might be <code>Silver</code>, <code>Brushed Nickel</code>, <code>Pewter</code>, or even <code>Grey</code>. The returned <b>refinement</b> container identifies all aspects that have been used in past listings for products that match your search criteria, along with all of the values those aspects have taken, and the number of times each value was used. You can use this data to present the seller with a histogram of the values of each aspect. The seller can see which color values have been used in the past, and how frequently they have been used, and selects the most likely value or values for their product. You issue the <b>search</b> method again with those values in the <b>aspect_filter</b> parameter to narrow down the collection of products returned by the call.</span> <br /><br /> Although all query parameters are optional, this method must include at least the <b>q</b> parameter, or the <b>category_ids</b>, <b>gtin</b>, or <b>mpn</b> parameter with a valid value. If you provide more than one of these parameters, they will be combined with a logical AND to further refine the returned collection of matching products. <br /><br /> <span class="tablenote"><strong>Note:</strong> This method requires that certain special characters in the query parameters be percent-encoded: <br /><br /> &nbsp;&nbsp;&nbsp;&nbsp;<code>(space)</code> = <code>%20</code> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>,</code> = <code>%2C</code> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>:</code> = <code>%3A</code> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>[</code> = <code>%5B</code> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>]</code> = <code>%5D</code> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>{</code> = <code>%7B</code> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>|</code> = <code>%7C</code> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>}</code> = <code>%7D</code> <br /><br /> This requirement applies to all query parameter values. However, for readability, method examples and samples in this documentation will not use the encoding.</span> <br /><br /> This method returns product summaries rather than the full details of the products. To retrieve the full details of a product, use the <b>getProduct</b> method with an ePID.',
  operationId: 'search',
  request: {
    headers: z.object({
      'X-EBAY-C-MARKETPLACE-ID': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "This method also uses the <code>X-EBAY-C-MARKETPLACE-ID</code> header to identify the seller's eBay marketplace. It is required for all marketplaces except EBAY_US, which is the default. <b>Note:</b> This method is limited to <code>EBAY_US</code>, <code>EBAY_AU</code>, <code>EBAY_CA</code>, and <code>EBAY_GB</code> values.",
            in: 'header',
            name: 'X-EBAY-C-MARKETPLACE-ID',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      aspect_filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'An eBay category and one or more aspects of that category, with the values that can be used to narrow down the collection of products returned by this call. <br /><br /> Aspects are product attributes that can represent different types of information for different products. Every product has aspects, but different products have different sets of aspects. <br /><br /> You can determine appropriate values for the aspects by first submitting this method without this parameter. It will return either the <b>productSummaries.aspects</b> container, the <b>refinement.aspectDistributions</b> container, or both, depending on the value of the <b>fieldgroups</b> parameter in the request. The <b>productSummaries.aspects</b> container provides the category aspects and their values that are associated with each returned product. The <b>refinement.aspectDistributions</b> container provides information about the distribution of values of the set of category aspects associated with the specified categories. In both cases sellers can select from among the returned aspects to use with this parameter. <br /><br /> <span class="tablenote"> <strong>Note:</strong> You can also use the Taxonomy API\'s <b>getItemAspectsForCategory</b> method to retrieve detailed information about aspects and their values that are appropriate for your selected category. </span> <br /><br /> The syntax for the <b>aspect_filter</b> parameter is as follows (on several lines for readability; <b>categoryId</b> is required): <br /><br /> <code>aspect_filter=categoryId:<i>category_id</i>,<br /> <i>aspect1</i>:{<i>valueA</i>|<i>valueB</i>|...},<br /> <i>aspect2</i>:{<i>valueC</i>|<i>valueD</i>|...},.</code> <br /><br /> A matching product must be within the specified category, and it must have least one of the values identified for every specified aspect. <br /><br /> <span class="tablenote"> <strong>Note:</strong> Aspect names and values are case sensitive. </span> <br /><br /> Here is an example of an <b>aspect_filter</b> parameter in which <code>9355</code> is the category ID, <code>Color</code> is an aspect of that category, and <code>Black</code> and <code>White</code> are possible values of that aspect (on several lines for readability): <br /><br /> <code>GET https://api.ebay.com/commerce/catalog/v1_beta/product_summary/search?<br /> aspect_filter=categoryId:9355,Color:{White|Black}</code>    <br /><br /> Here is the <b>aspect_filter</b> with required URL encoding and a second aspect (on several lines for readability): <br /><br /> <code>GET https://api.ebay.com/commerce/catalog/v1_beta/product_summary/search?<br /> aspect_filter=categoryId:9355,Color:%7BWhite%7CBlack%7D,<br /> Storage%20Capacity:%128GB%7C256GB%7D</code> <br /><br /> <span class="tablenote"> <strong>Note:</strong> You cannot use the <b>aspect_filter</b> parameter in the same method with either the <b>gtin</b> parameter or the <b>mpn</b> parameter. </span> For implementation help, refer to eBay API documentation at https://developer.ebay.com/api-docs/commerce/catalog/types/catal:AspectFilter',
            in: 'query',
            name: 'aspect_filter',
            required: false,
            schema: { type: 'string' },
          },
        }),
      category_ids: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              '<span class="tablenote"> <strong>Important:</strong> Currently, only the first <b>category_id</b> value is accepted. </span> <br /><br /> One or more comma-separated category identifiers for narrowing down the collection of products returned by this call. <br /><br /> <span class="tablenote"> <strong>Note:</strong> This parameter requires a valid category ID value. You can use the Taxonomy API\'s <b>getCategorySuggestions</b> method to retrieve appropriate category IDs for your product based on keywords. </span> <br /><br /> The syntax for this parameter is as follows: <br /><br /> <code>category_ids=<i>category_id1</i>,<i>category_id2</i>,.</code> <br /><br /> Here is an example of a method with the <b>category_ids</b> parameter: br /><br /> <code>GET https://api.ebay.com/commerce/catalog/v1_beta/product_summary/search?<br /> category_ids=178893</code> <br /><br /> <span class="tablenote"> <strong>Note:</strong> Although all query parameters are optional, this method must include at least the <b>q</b> parameter, or the <b>category_ids</b>, <b>gtin</b>, or <b>mpn</b> parameter with a valid value. <br /><br /> If you provide only the <b>category_ids</b> parameter, you cannot specify a top-level (L1) category. </span>',
            in: 'query',
            name: 'category_ids',
            required: false,
            schema: { type: 'string' },
          },
        }),
      fieldgroups: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The type of information to return in the response. <br /><br /> <span class="tablenote"> <strong>Important:</strong> This parameter may not produce valid results if you also provide more than one value for the <b>category_ids</b> parameter. It is recommended that you avoid using this combination. </span> <br /><br /> <b> Valid Values: </b> <ul> <li><code>ASPECT_REFINEMENTS</code> &mdash; This returns the <b>refinement</b> container, which includes the category aspect and aspect value distributions that apply to the returned products. For example, if you searched for <code>Ford Mustang</code>, some of the category aspects might be <b>Model Year</b>, <b>Exterior Color</b>, <b>Vehicle Mileage</b>, and so on. <br /> <br /> <span class="tablenote"> <b>Note: </b>Aspects are category specific.</span> </li> <li><code>FULL</code> &mdash; This returns all the refinement containers and all the matching products. This value overrides the other values, which will be ignored.</li> <li><code>MATCHING_PRODUCTS</code> &mdash; This returns summaries for all products that match the values you provide for the <b>q</b> and <b>category_ids</b> parameters. This does not affect your use of the <code>ASPECT_REFINEMENTS</code> value, which you can use in the same call.</li> </ul> Code so that your app gracefully handles any future changes to this list. <br /><br /><b>Default: </b> <code>MATCHING_PRODUCTS</code>',
            in: 'query',
            name: 'fieldgroups',
            required: false,
            schema: { type: 'string' },
          },
        }),
      gtin: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A string consisting of one or more comma-separated Global Trade Item Numbers (GTINs) that identify products to search for. Currently the GTIN values can include EAN, ISBN, and UPC identifier types. <br /><br /> <span class="tablenote"> <strong>Note:</strong> Although all query parameters are optional, this method must include at least the <b>q</b> parameter, or the <b>category_ids</b>, <b>gtin</b>, or <b>mpn</b> parameter with a valid value.  <br /><br /> You cannot use the <b>gtin</b> parameter in the same method with either the <b>q</b> parameter or the <b>aspect_filter</b> parameter. </span>',
            in: 'query',
            name: 'gtin',
            required: false,
            schema: { type: 'string' },
          },
        }),
      limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The number of product summaries to return. This is the <i>result set</i>, a subset of the full collection of products that match the search or filter criteria of this call. <br /><br /> <b>Maximum:</b> <code>200</code> <br /> <b>Default:</b> <code>50</code>',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { type: 'string' },
          },
        }),
      mpn: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A string consisting of one or more comma-separated Manufacturer Part Numbers (MPNs) that identify products to search for. This method will return all products that have one of the specified MPNs. <br /><br /> MPNs are defined by manufacturers for their own products, and are therefore certain to be unique only within a given brand. However, many MPNs do turn out to be globally unique. <br /><br /> <span class="tablenote"> <strong>Note:</strong> Although all query parameters are optional, this method must include at least the <b>q</b> parameter, or the <b>category_ids</b>, <b>gtin</b>, or <b>mpn</b> parameter with a valid value. <br /><br /> You cannot use the <b>mpn</b> parameter in the same method with either the <b>q</b> parameter or the <b>aspect_filter</b> parameter. </span>',
            in: 'query',
            name: 'mpn',
            required: false,
            schema: { type: 'string' },
          },
        }),
      offset: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'This parameter is reserved for internal or future use.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { type: 'string' },
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A string consisting of one or more keywords to use to search for products in the eBay catalog. <br /><br /> <span class="tablenote"> <strong>Note:</strong> This method searches the following product record fields: <b>title</b>, <b>description</b>, <b>brand</b>, and <b>aspects.localizedName</b>, which do not include product IDs. Wildcard characters (e.g. <code>*</code>) are not allowed. </span> <br /><br /> The keywords are handled as follows: <ul> <li>If the keywords are separated by a comma (e.g. <code>iPhone,256GB</code>), the query returns products that have <code>iPhone</code> <b>AND</b> <code>256GB</code>.</li> <li>If the keywords are separated by a space (e.g. <code>"iPhone&nbsp;ipad"</code> or <code>"iPhone,&nbsp;ipad"</code>), the query ignores any commas and returns products that have <code>iPhone</code> <b>OR</b> <code>iPad</code>.</li> </ul> <span class="tablenote"> <strong>Note:</strong> Although all query parameters are optional, this method must include at least the <b>q</b> parameter, or the <b>category_ids</b>, <b>gtin</b>, or <b>mpn</b> parameter with a valid value.  <br /><br /> You cannot use the <b>q</b> parameter in the same method with either the <b>gtin</b> parameter or the <b>mpn</b> parameter. </span>',
            in: 'query',
            name: 'q',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ProductSearchResponseSchema } },
    },
    204: { description: 'No Content' },
    400: { description: 'Bad Request' },
    403: { description: 'Forbidden' },
    500: { description: 'Internal Server Error' },
  },
  security: [
    {
      api_auth: [
        'https://api.ebay.com/oauth/api_scope/sell.inventory',
        'https://api.ebay.com/oauth/api_scope/commerce.catalog.readonly',
      ],
    },
  ],
})
