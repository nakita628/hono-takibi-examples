import { createRoute, z } from '@hono/zod-openapi'

const BasicModelStatsSchema = z
  .object({
    average: z.number().openapi({ title: 'Average' }),
    median: z.number().openapi({ title: 'Median' }),
    name: z.string().openapi({ title: 'Name' }),
    pVariance: z.number().openapi({ title: 'Pvariance' }),
    stdDev: z.number().openapi({ title: 'Stddev' }),
  })
  .openapi({
    required: ['name', 'average', 'median', 'stdDev', 'pVariance'],
    title: 'BasicModelStats',
  })
  .openapi('BasicModelStats')

const BasicModelStatsRespSchema = z
  .object({
    brandName: z.string().exactOptional().openapi({ title: 'Brandname' }),
    cacheTimeLimit: z.int().default(600).exactOptional().openapi({ title: 'Cachetimelimit' }),
    condition: z.string().exactOptional().openapi({ title: 'Condition' }),
    data: z.array(BasicModelStatsSchema).openapi({ title: 'Data' }),
    modelName: z.string().exactOptional().openapi({ title: 'Modelname' }),
    msg: z.string().exactOptional().openapi({ title: 'Msg' }),
    regionName: z.string().exactOptional().openapi({ title: 'Regionname' }),
  })
  .openapi({ required: ['data'], title: 'BasicModelStatsResp' })
  .openapi('BasicModelStatsResp')

const BooleanRespSchema = z
  .object({
    brandName: z.string().exactOptional().openapi({ title: 'Brandname' }),
    cacheTimeLimit: z.int().default(600).exactOptional().openapi({ title: 'Cachetimelimit' }),
    condition: z.string().exactOptional().openapi({ title: 'Condition' }),
    data: z.boolean().openapi({ title: 'Data' }),
    modelName: z.string().exactOptional().openapi({ title: 'Modelname' }),
    msg: z.string().exactOptional().openapi({ title: 'Msg' }),
    regionName: z.string().exactOptional().openapi({ title: 'Regionname' }),
  })
  .openapi({ required: ['data'], title: 'BooleanResp' })
  .openapi('BooleanResp')

const BrandRespSchema = z
  .object({
    brandName: z.string().exactOptional().openapi({ title: 'Brandname' }),
    cacheTimeLimit: z.int().default(600).exactOptional().openapi({ title: 'Cachetimelimit' }),
    condition: z.string().exactOptional().openapi({ title: 'Condition' }),
    data: z.array(z.string()).openapi({ title: 'Data' }),
    modelName: z.string().exactOptional().openapi({ title: 'Modelname' }),
    msg: z.string().exactOptional().openapi({ title: 'Msg' }),
    regionName: z.string().exactOptional().openapi({ title: 'Regionname' }),
  })
  .openapi({ required: ['data'], title: 'BrandResp' })
  .openapi('BrandResp')

const BucketEntrySchema = z
  .object({
    bucket: z.number().openapi({ title: 'Bucket' }),
    modelName: z.string().openapi({ title: 'Modelname' }),
    percentOfMarket: z.number().openapi({ title: 'Percentofmarket' }),
  })
  .openapi({ required: ['percentOfMarket', 'bucket', 'modelName'], title: 'BucketEntry' })
  .openapi('BucketEntry')

const BucketRespSchema = z
  .object({
    brandName: z.string().exactOptional().openapi({ title: 'Brandname' }),
    cacheTimeLimit: z.int().default(600).exactOptional().openapi({ title: 'Cachetimelimit' }),
    condition: z.string().exactOptional().openapi({ title: 'Condition' }),
    data: z.array(BucketEntrySchema).openapi({ title: 'Data' }),
    modelName: z.string().exactOptional().openapi({ title: 'Modelname' }),
    msg: z.string().exactOptional().openapi({ title: 'Msg' }),
    regionName: z.string().exactOptional().openapi({ title: 'Regionname' }),
  })
  .openapi({ required: ['data'], title: 'BucketResp' })
  .openapi('BucketResp')

const DealershipDataSchema = z
  .object({
    address: z.string().openapi({ title: 'Address' }),
    dealerName: z.string().openapi({ title: 'Dealername' }),
    ids: z.array(z.int()).openapi({ title: 'Ids' }),
    state: z.string().openapi({ title: 'State' }),
    zipCode: z.int().openapi({ title: 'Zipcode' }),
  })
  .openapi({
    required: ['dealerName', 'zipCode', 'state', 'address', 'ids'],
    title: 'DealershipData',
  })
  .openapi('DealershipData')

const DealershipDataPaginatedSchema = z
  .object({
    dealers: z.array(DealershipDataSchema).openapi({ title: 'Dealers' }),
    maxPages: z.int().openapi({ title: 'Maxpages' }),
    page: z.int().openapi({ title: 'Page' }),
  })
  .openapi({ required: ['page', 'maxPages', 'dealers'], title: 'DealershipDataPaginated' })
  .openapi('DealershipDataPaginated')

const DealershipDataPaginatedRespSchema = z
  .object({
    brandName: z.string().exactOptional().openapi({ title: 'Brandname' }),
    cacheTimeLimit: z.int().default(600).exactOptional().openapi({ title: 'Cachetimelimit' }),
    condition: z.string().exactOptional().openapi({ title: 'Condition' }),
    data: DealershipDataPaginatedSchema,
    modelName: z.string().exactOptional().openapi({ title: 'Modelname' }),
    msg: z.string().exactOptional().openapi({ title: 'Msg' }),
    regionName: z.string().exactOptional().openapi({ title: 'Regionname' }),
  })
  .openapi({ required: ['data'], title: 'DealershipDataPaginatedResp' })
  .openapi('DealershipDataPaginatedResp')

const DealershipDataRespSchema = z
  .object({
    brandName: z.string().exactOptional().openapi({ title: 'Brandname' }),
    cacheTimeLimit: z.int().default(600).exactOptional().openapi({ title: 'Cachetimelimit' }),
    condition: z.string().exactOptional().openapi({ title: 'Condition' }),
    data: z.array(DealershipDataSchema).openapi({ title: 'Data' }),
    modelName: z.string().exactOptional().openapi({ title: 'Modelname' }),
    msg: z.string().exactOptional().openapi({ title: 'Msg' }),
    regionName: z.string().exactOptional().openapi({ title: 'Regionname' }),
  })
  .openapi({ required: ['data'], title: 'DealershipDataResp' })
  .openapi('DealershipDataResp')

const EndpointListSchema = z
  .object({
    endPoints: z.array(z.string()).default(['*']).exactOptional().openapi({ title: 'Endpoints' }),
  })
  .openapi({ title: 'EndpointList', required: [] })
  .openapi('EndpointList')

const GenericResponseSchema = z
  .object({
    brandName: z.string().exactOptional().openapi({ title: 'Brandname' }),
    cacheTimeLimit: z.int().default(600).exactOptional().openapi({ title: 'Cachetimelimit' }),
    condition: z.string().exactOptional().openapi({ title: 'Condition' }),
    data: z.any().exactOptional().openapi({ title: 'Data' }),
    modelName: z.string().exactOptional().openapi({ title: 'Modelname' }),
    msg: z.string().exactOptional().openapi({ title: 'Msg' }),
    regionName: z.string().exactOptional().openapi({ title: 'Regionname' }),
  })
  .openapi({ title: 'GenericResponse', required: [] })
  .openapi('GenericResponse')

const ValidationErrorSchema = z
  .object({
    loc: z.array(z.string()).openapi({ title: 'Location' }),
    msg: z.string().openapi({ title: 'Message' }),
    type: z.string().openapi({ title: 'Error Type' }),
  })
  .openapi({ required: ['loc', 'msg', 'type'], title: 'ValidationError' })
  .openapi('ValidationError')

const HTTPValidationErrorSchema = z
  .object({ detail: z.array(ValidationErrorSchema).exactOptional().openapi({ title: 'Detail' }) })
  .openapi({ title: 'HTTPValidationError', required: [] })
  .openapi('HTTPValidationError')

const VehHistorySchema = z
  .object({
    dealerName: z.string().openapi({ title: 'Dealername' }),
    firstSeen: z.iso.date().openapi({ title: 'Firstseen' }),
    lastSeen: z.iso.date().openapi({ title: 'Lastseen' }),
    miles: z.int().openapi({ title: 'Miles' }),
    new: z.boolean().openapi({ title: 'New' }),
    price: z.number().openapi({ title: 'Price' }),
    state: z.string().openapi({ title: 'State' }),
    zip: z.int().openapi({ title: 'Zip' }),
  })
  .openapi({
    required: ['dealerName', 'firstSeen', 'lastSeen', 'price', 'new', 'miles', 'state', 'zip'],
    title: 'VehHistory',
  })
  .openapi('VehHistory')

const VehHistoryDataSchema = z
  .object({
    data: z.array(VehHistorySchema).openapi({ title: 'Data' }),
    vin: z.string().openapi({ title: 'Vin' }),
  })
  .openapi({ required: ['vin', 'data'], title: 'VehHistoryData' })
  .openapi('VehHistoryData')

const HistoryRespSchema = z
  .object({
    brandName: z.string().exactOptional().openapi({ title: 'Brandname' }),
    cacheTimeLimit: z.int().default(600).exactOptional().openapi({ title: 'Cachetimelimit' }),
    condition: z.string().exactOptional().openapi({ title: 'Condition' }),
    data: VehHistoryDataSchema,
    modelName: z.string().exactOptional().openapi({ title: 'Modelname' }),
    msg: z.string().exactOptional().openapi({ title: 'Msg' }),
    regionName: z.string().exactOptional().openapi({ title: 'Regionname' }),
  })
  .openapi({ required: ['data'], title: 'HistoryResp' })
  .openapi('HistoryResp')

const JSONWebTokenSchema = z
  .object({
    createdOn: z.int().exactOptional().openapi({ title: 'Createdon' }),
    expires: z.int().exactOptional().openapi({ title: 'Expires' }),
    token: z.string().openapi({ title: 'Token' }),
  })
  .openapi({ required: ['token'], title: 'JSONWebToken' })
  .openapi('JSONWebToken')

const ListingSchema = z
  .object({
    askPrice: z.number().openapi({ title: 'Askprice' }),
    brandName: z.string().openapi({ title: 'Brandname' }),
    color: z.string().exactOptional().openapi({ title: 'Color' }),
    dealerID: z.int().openapi({ title: 'Dealerid' }),
    firstSeen: z.iso.date().openapi({ title: 'Firstseen' }),
    interiorColor: z.string().exactOptional().openapi({ title: 'Interiorcolor' }),
    isNew: z.boolean().openapi({ title: 'Isnew' }),
    lastSeen: z.iso.date().openapi({ title: 'Lastseen' }),
    mileage: z.number().default(0).exactOptional().openapi({ title: 'Mileage' }),
    modelName: z.string().openapi({ title: 'Modelname' }),
    msrp: z.number().openapi({ title: 'Msrp' }),
    vin: z.string().openapi({ title: 'Vin' }),
    vinDecode: z.object({}).default({}).exactOptional().openapi({ title: 'Vindecode' }),
    year: z.number().openapi({ title: 'Year' }),
  })
  .openapi({
    required: [
      'vin',
      'askPrice',
      'msrp',
      'isNew',
      'firstSeen',
      'lastSeen',
      'modelName',
      'brandName',
      'year',
      'dealerID',
    ],
    title: 'Listing',
  })
  .openapi('Listing')

const ListingRespPaginatedSchema = z
  .object({
    listings: z.array(ListingSchema).openapi({ title: 'Listings' }),
    maxPages: z.int().openapi({ title: 'Maxpages' }),
    page: z.int().openapi({ title: 'Page' }),
  })
  .openapi({ required: ['page', 'maxPages', 'listings'], title: 'ListingRespPaginated' })
  .openapi('ListingRespPaginated')

const ListingRespSchema = z
  .object({
    brandName: z.string().exactOptional().openapi({ title: 'Brandname' }),
    cacheTimeLimit: z.int().default(600).exactOptional().openapi({ title: 'Cachetimelimit' }),
    condition: z.string().exactOptional().openapi({ title: 'Condition' }),
    data: ListingRespPaginatedSchema,
    endDate: z.iso.date().exactOptional().openapi({ title: 'Enddate' }),
    modelName: z.string().exactOptional().openapi({ title: 'Modelname' }),
    msg: z.string().exactOptional().openapi({ title: 'Msg' }),
    regionName: z.string().exactOptional().openapi({ title: 'Regionname' }),
    startDate: z.iso.date().exactOptional().openapi({ title: 'Startdate' }),
  })
  .openapi({ required: ['data'], title: 'ListingResp' })
  .openapi('ListingResp')

const ModelDictSchema = z
  .object({ modelName: z.string().openapi({ title: 'Modelname' }) })
  .openapi({ required: ['modelName'], title: 'ModelDict' })
  .openapi('ModelDict')

const ModelRespSchema = z
  .object({
    brandName: z.string().exactOptional().openapi({ title: 'Brandname' }),
    cacheTimeLimit: z.int().default(600).exactOptional().openapi({ title: 'Cachetimelimit' }),
    condition: z.string().exactOptional().openapi({ title: 'Condition' }),
    data: z.array(ModelDictSchema).openapi({ title: 'Data' }),
    modelName: z.string().exactOptional().openapi({ title: 'Modelname' }),
    msg: z.string().exactOptional().openapi({ title: 'Msg' }),
    regionName: z.string().exactOptional().openapi({ title: 'Regionname' }),
  })
  .openapi({ required: ['data'], title: 'ModelResp' })
  .openapi('ModelResp')

const ModelYearDistEntrySchema = z
  .object({
    brandName: z.string().openapi({ title: 'Brandname' }),
    modelName: z.string().openapi({ title: 'Modelname' }),
    percentOfMarket: z.number().openapi({ title: 'Percentofmarket' }),
    year: z.int().openapi({ title: 'Year' }),
  })
  .openapi({
    required: ['percentOfMarket', 'modelName', 'year', 'brandName'],
    title: 'ModelYearDistEntry',
  })
  .openapi('ModelYearDistEntry')

const ModelYearDistRespSchema = z
  .object({
    brandName: z.string().exactOptional().openapi({ title: 'Brandname' }),
    cacheTimeLimit: z.int().default(600).exactOptional().openapi({ title: 'Cachetimelimit' }),
    condition: z.string().exactOptional().openapi({ title: 'Condition' }),
    data: z.array(ModelYearDistEntrySchema).openapi({ title: 'Data' }),
    modelName: z.string().exactOptional().openapi({ title: 'Modelname' }),
    msg: z.string().exactOptional().openapi({ title: 'Msg' }),
    regionName: z.string().exactOptional().openapi({ title: 'Regionname' }),
  })
  .openapi({ required: ['data'], title: 'ModelYearDistResp' })
  .openapi('ModelYearDistResp')

const RegionRespSchema = z
  .object({
    brandName: z.string().exactOptional().openapi({ title: 'Brandname' }),
    cacheTimeLimit: z.int().default(600).exactOptional().openapi({ title: 'Cachetimelimit' }),
    condition: z.string().exactOptional().openapi({ title: 'Condition' }),
    data: z.array(z.string()).openapi({ title: 'Data' }),
    modelName: z.string().exactOptional().openapi({ title: 'Modelname' }),
    msg: z.string().exactOptional().openapi({ title: 'Msg' }),
    regionName: z.string().exactOptional().openapi({ title: 'Regionname' }),
  })
  .openapi({ required: ['data'], title: 'RegionResp' })
  .openapi('RegionResp')

const SimilarSalePriceDataSchema = z
  .object({
    daysBack: z.int().openapi({ title: 'Daysback' }),
    mileCount: z.int().openapi({ title: 'Milecount' }),
    milesAvg: z.number().openapi({ title: 'Milesavg' }),
    milesStdDev: z.number().openapi({ title: 'Milesstddev' }),
    newCount: z.int().openapi({ title: 'Newcount' }),
    newSaleAvg: z.number().openapi({ title: 'Newsaleavg' }),
    newSaleStdDev: z.number().openapi({ title: 'Newsalestddev' }),
    usedCount: z.int().openapi({ title: 'Usedcount' }),
    usedSaleAvg: z.number().openapi({ title: 'Usedsaleavg' }),
    usedSaleStdDev: z.number().openapi({ title: 'Usedsalestddev' }),
  })
  .openapi({
    required: [
      'newSaleAvg',
      'newSaleStdDev',
      'newCount',
      'usedSaleAvg',
      'usedSaleStdDev',
      'usedCount',
      'milesAvg',
      'milesStdDev',
      'mileCount',
      'daysBack',
    ],
    title: 'SimilarSalePriceData',
  })
  .openapi('SimilarSalePriceData')

const SimilarSalePriceRespSchema = z
  .object({
    brandName: z.string().exactOptional().openapi({ title: 'Brandname' }),
    cacheTimeLimit: z.int().default(600).exactOptional().openapi({ title: 'Cachetimelimit' }),
    condition: z.string().exactOptional().openapi({ title: 'Condition' }),
    data: SimilarSalePriceDataSchema,
    endDate: z.iso.date().openapi({ title: 'Enddate' }),
    modelName: z.string().exactOptional().openapi({ title: 'Modelname' }),
    msg: z.string().exactOptional().openapi({ title: 'Msg' }),
    regionName: z.string().exactOptional().openapi({ title: 'Regionname' }),
    startDate: z.iso.date().openapi({ title: 'Startdate' }),
  })
  .openapi({ required: ['data', 'startDate', 'endDate'], title: 'SimilarSalePriceResp' })
  .openapi('SimilarSalePriceResp')

const SubUserJSONWebTokenSchema = z
  .object({
    createdOn: z.int().exactOptional().openapi({ title: 'Createdon' }),
    domain: z.string().openapi({ title: 'Domain' }),
    endPoints: z.array(z.string()).default(['*']).exactOptional().openapi({ title: 'Endpoints' }),
    expires: z.int().exactOptional().openapi({ title: 'Expires' }),
    token: z.string().openapi({ title: 'Token' }),
    uuid: z.string().openapi({ title: 'Uuid' }),
  })
  .openapi({ required: ['token', 'domain', 'uuid'], title: 'SubUserJSONWebToken' })
  .openapi('SubUserJSONWebToken')

const TopModelEntrySchema = z
  .object({
    brandMarketShare: z.number().openapi({ title: 'Brandmarketshare' }),
    brandName: z.string().openapi({ title: 'Brandname' }),
    modelName: z.string().openapi({ title: 'Modelname' }),
    percentOfBrandSales: z.number().openapi({ title: 'Percentofbrandsales' }),
    percentOfTopSales: z.number().openapi({ title: 'Percentoftopsales' }),
  })
  .openapi({
    required: [
      'percentOfTopSales',
      'modelName',
      'brandName',
      'percentOfBrandSales',
      'brandMarketShare',
    ],
    title: 'TopModelEntry',
  })
  .openapi('TopModelEntry')

const TopModelRespSchema = z
  .object({
    brandName: z.string().exactOptional().openapi({ title: 'Brandname' }),
    cacheTimeLimit: z.int().default(600).exactOptional().openapi({ title: 'Cachetimelimit' }),
    condition: z.string().exactOptional().openapi({ title: 'Condition' }),
    data: z.array(TopModelEntrySchema).openapi({ title: 'Data' }),
    modelName: z.string().exactOptional().openapi({ title: 'Modelname' }),
    msg: z.string().exactOptional().openapi({ title: 'Msg' }),
    regionName: z.string().exactOptional().openapi({ title: 'Regionname' }),
  })
  .openapi({ required: ['data'], title: 'TopModelResp' })
  .openapi('TopModelResp')

export const getDaysSupplyRoute = createRoute({
  method: 'get',
  path: '/daysSupply',
  tags: ['Supply Data', 'Developer Plan Or Greater'],
  summary: 'Days worth of supply left on dealer lots',
  description:
    'Average, median, standard deviation, population variance, and whole region average of the \ndays of supply left on dealer lots for a given brand and region. The average, median, stdDev, and pVar fields are calculated on\na dealer by dealer basis while the whole region average treats the entire region like a single dealership. \nThe average field may differ from the whole region average, especially when dealers are out of \na given model. \n\nThe available brand and region names can be retrieved from their respective endpoints.',
  operationId: 'daysSupply_daysSupply_get',
  request: {
    query: z.object({
      jwt: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'jwt',
            required: true,
            schema: { title: 'Jwt', type: 'string' },
          },
          title: 'Jwt',
        }),
      brandName: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'brandName',
            required: true,
            schema: { title: 'Brandname', type: 'string' },
          },
          title: 'Brandname',
        }),
      regionName: z
        .string()
        .default('REGION_STATE_CA')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'regionName',
            required: false,
            schema: { default: 'REGION_STATE_CA', title: 'Regionname', type: 'string' },
          },
          title: 'Regionname',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: GenericResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getDaysToSellRoute = createRoute({
  method: 'get',
  path: '/daysToSell',
  tags: ['Supply Data', 'Developer Plan Or Greater'],
  summary: 'Days a vehicle takes to sell',
  description:
    'Average, median, standard deviation, population variance, and whole region average of the \nnumber of days a vehicle spends on dealer lots for a given brand and region. The average, median, stdDev, and pVar fields are calculated on\na dealer by dealer basis while the whole region average treats the entire region like a single dealership. \nThe average field may differ from the whole region average.\n\nThe available brand and region names can be retrieved from their respective endpoints.',
  operationId: 'daysToSell_daysToSell_get',
  request: {
    query: z.object({
      jwt: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'jwt',
            required: true,
            schema: { title: 'Jwt', type: 'string' },
          },
          title: 'Jwt',
        }),
      brandName: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'brandName',
            required: true,
            schema: { title: 'Brandname', type: 'string' },
          },
          title: 'Brandname',
        }),
      regionName: z
        .string()
        .default('REGION_STATE_CA')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'regionName',
            required: false,
            schema: { default: 'REGION_STATE_CA', title: 'Regionname', type: 'string' },
          },
          title: 'Regionname',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: GenericResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getGetBrandsRoute = createRoute({
  method: 'get',
  path: '/getBrands',
  tags: ['Static Data', 'Starter Plan Or Greater'],
  summary: 'Get a list of brand names',
  description:
    'Get vehicle brand names. \n\nThese names are used as arguments for other endpoints. The names are generally not case sensitive\nwhen used with other endpoints, but it is best practice to use the names returned by this endpoint without changes.',
  operationId: 'getBrandNames_getBrands_get',
  request: {
    query: z.object({
      jwt: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'jwt',
            required: true,
            schema: { title: 'Jwt', type: 'string' },
          },
          title: 'Jwt',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: BrandRespSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getGetDealersRoute = createRoute({
  method: 'get',
  path: '/getDealers',
  tags: ['Dealership Data', 'Premium', 'Developer Plan Or Greater'],
  summary: 'Premium. Dealers in a zip code.',
  description:
    'Premium. Dealership information in a given zip code using the first 4 digits. Returns name, address, state, zipCode, and IDs.\nFor example a call with the zip code 92701 would return dealers with zip codes in the range [92700, 92709]',
  operationId: 'getDealers_getDealers_get',
  request: {
    query: z.object({
      jwt: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'jwt',
            required: true,
            schema: { title: 'Jwt', type: 'string' },
          },
          title: 'Jwt',
        }),
      zipCode: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            in: 'query',
            name: 'zipCode',
            required: true,
            schema: { title: 'Zipcode', type: 'integer' },
          },
          title: 'Zipcode',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: DealershipDataRespSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getGetDealersByIDRoute = createRoute({
  method: 'get',
  path: '/getDealersByID',
  tags: ['Dealership Data', 'Premium', 'Developer Plan Or Greater'],
  summary: 'Premium. Dealers by ID',
  description:
    'Premium. Dealership information using the internal ID. Returns name, address, state, zipCode, and ID for a single dealer in the same format as the /getDealers endpoint.\nDealer IDs are generally retrieved via the /getDealers or /getDealersByRegion endpoints.',
  operationId: 'getDealers_getDealersByID_get',
  request: {
    query: z.object({
      jwt: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'jwt',
            required: true,
            schema: { title: 'Jwt', type: 'string' },
          },
          title: 'Jwt',
        }),
      dealerID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            in: 'query',
            name: 'dealerID',
            required: true,
            schema: { title: 'Dealerid', type: 'integer' },
          },
          title: 'Dealerid',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: DealershipDataRespSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getGetDealersByRegionRoute = createRoute({
  method: 'get',
  path: '/getDealersByRegion',
  tags: ['Dealership Data', 'Premium', 'Developer Plan Or Greater'],
  summary: 'Premium. Dealers in a region.',
  description:
    'Premium. Dealership information in a given region. Returns name, address, state, zipCode, and IDs. Results are paginated with up to 30 results per page.',
  operationId: 'getDealers_getDealersByRegion_get',
  request: {
    query: z.object({
      jwt: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'jwt',
            required: true,
            schema: { title: 'Jwt', type: 'string' },
          },
          title: 'Jwt',
        }),
      regionName: z
        .string()
        .default('REGION_STATE_CA')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'regionName',
            required: false,
            schema: { default: 'REGION_STATE_CA', title: 'Regionname', type: 'string' },
          },
          title: 'Regionname',
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, title: 'Page', type: 'integer' },
          },
          title: 'Page',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: DealershipDataPaginatedRespSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getGetInactiveModelsRoute = createRoute({
  method: 'get',
  path: '/getInactiveModels',
  tags: ['Static Data', 'Starter Plan Or Greater'],
  summary: 'Get a list of model names including discontinued models',
  description:
    'Get all model names including discontinued models. Because these models are no longer built, or have very poor market performance\nthey are not incuded in the normal getModels endpoint. Many users itterate through the model names with our new vehicle sales\nendpoints and waste some of their quota making self contradictory requests. This endpoint was created to aleviate the use case where\nsomeone requests information on new vehicle sales for a model that has not been sold new for a long, long, time. \n\nThese names are used as arguments for other endpoints. The names are generally not case sensitive\nwhen used with other endpoints, but it is best practice to use the names returned by this endpoint without changes.',
  operationId: 'getModelNamesAll_getInactiveModels_get',
  request: {
    query: z.object({
      jwt: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'jwt',
            required: true,
            schema: { title: 'Jwt', type: 'string' },
          },
          title: 'Jwt',
        }),
      brandName: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'brandName',
            required: true,
            schema: { title: 'Brandname', type: 'string' },
          },
          title: 'Brandname',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ModelRespSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getGetModelsRoute = createRoute({
  method: 'get',
  path: '/getModels',
  tags: ['Static Data', 'Starter Plan Or Greater'],
  summary: 'Get a list of model names',
  description:
    'Get brand model names for currently active models. This endpoint does not return model names that have been discontinued or have \nsold less than 10 vehicles in the last month and a half.\n\nThese names are used as arguments for other endpoints. The names are generally not case sensitive\nwhen used with other endpoints, but it is best practice to use the names returned by this endpoint without changes.',
  operationId: 'getModelNames_getModels_get',
  request: {
    query: z.object({
      jwt: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'jwt',
            required: true,
            schema: { title: 'Jwt', type: 'string' },
          },
          title: 'Jwt',
        }),
      brandName: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'brandName',
            required: true,
            schema: { title: 'Brandname', type: 'string' },
          },
          title: 'Brandname',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ModelRespSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getGetRegionBrandMarketShareRoute = createRoute({
  method: 'get',
  path: '/getRegionBrandMarketShare',
  tags: ['Sales Data', 'Analyst Plan Or Greater'],
  summary: 'Market share of a brand in region',
  description:
    'Market share of a given brand in a given region by number of vehicles sold over the last 45 days.',
  operationId: 'getRegionBrandMarketShare_getRegionBrandMarketShare_get',
  request: {
    query: z.object({
      jwt: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'jwt',
            required: true,
            schema: { title: 'Jwt', type: 'string' },
          },
          title: 'Jwt',
        }),
      brandName: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'brandName',
            required: true,
            schema: { title: 'Brandname', type: 'string' },
          },
          title: 'Brandname',
        }),
      regionName: z
        .string()
        .default('REGION_STATE_CA')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'regionName',
            required: false,
            schema: { default: 'REGION_STATE_CA', title: 'Regionname', type: 'string' },
          },
          title: 'Regionname',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: GenericResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getGetRegionMarketShareRoute = createRoute({
  method: 'get',
  path: '/getRegionMarketShare',
  tags: ['Sales Data', 'Premium', 'Analyst Plan Or Greater'],
  summary: 'Market share of all brands in region',
  description:
    'Market share of a all brands in a given region by number of vehicles sold over the last 45 days.',
  operationId: 'getRegionMarketShare_getRegionMarketShare_get',
  request: {
    query: z.object({
      jwt: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'jwt',
            required: true,
            schema: { title: 'Jwt', type: 'string' },
          },
          title: 'Jwt',
        }),
      regionName: z
        .string()
        .default('REGION_STATE_CA')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'regionName',
            required: false,
            schema: { default: 'REGION_STATE_CA', title: 'Regionname', type: 'string' },
          },
          title: 'Regionname',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: GenericResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getGetRegionsRoute = createRoute({
  method: 'get',
  path: '/getRegions',
  tags: ['Static Data', 'Starter Plan Or Greater'],
  summary: 'Get a list of region names',
  description:
    'Get region names. These names are used as arguments for other endpoints. The names are generally not case sensitive\nwhen used with other endpoints, but it is best practice to use the names returned by this endpoint without changes.',
  operationId: 'getRegions_getRegions_get',
  request: {
    query: z.object({
      jwt: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'jwt',
            required: true,
            schema: { title: 'Jwt', type: 'string' },
          },
          title: 'Jwt',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: RegionRespSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getGetSubUserKeysRoute = createRoute({
  method: 'get',
  path: '/getSubUserKeys',
  tags: ['Authentication'],
  summary: 'Get all Sub User Keys associated with your account.',
  description: 'Get a list of your issued SubUser API Keys. Includes active and revoked keys.',
  operationId: 'getSubUserKeys_getSubUserKeys_get',
  request: {
    query: z.object({
      apiID: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'apiID',
            required: true,
            schema: { title: 'Apiid', type: 'string' },
          },
          title: 'Apiid',
        }),
      apiKey: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'apiKey',
            required: true,
            schema: { title: 'Apikey', type: 'string' },
          },
          title: 'Apikey',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: GenericResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getGetTokenRoute = createRoute({
  method: 'get',
  path: '/getToken',
  tags: ['Authentication'],
  summary: 'Get a JWT from your API credentials',
  description:
    'This is the first function you should call. \n\nIf you are accessing our API through a third party provider they will handle authenticating to our API for you \nand you will not need call this function or retrieve a JSON Web Token. \n\nAll other functions require the JSON Web Token (JWT) from this function to \nbe incuded in their arguments. The value of the "token" field is the actual JWT and any other values in the returned JSON\nare metadata there for your convenience. Tokens are valid for a default of 1 hour (3600 seconds). If you try calling an\nAPI endpoint with a missing, invalid, or expired JWT it will return a HTTP 403 code. You would then need to call this end point\nto get a new token.',
  operationId: 'makeToken_getToken_get',
  request: {
    query: z.object({
      apiID: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'apiID',
            required: true,
            schema: { title: 'Apiid', type: 'string' },
          },
          title: 'Apiid',
        }),
      apiKey: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'apiKey',
            required: true,
            schema: { title: 'Apikey', type: 'string' },
          },
          title: 'Apikey',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: JSONWebTokenSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const postGetTokenRoute = createRoute({
  method: 'post',
  path: '/getToken',
  tags: ['Authentication'],
  summary: 'Get a JWT from your API credentials',
  description:
    'This is the first function you should call. \n\nIf you are accessing our API through a third party provider they will handle authenticating to our API for you \nand you will not need call this function or retrieve a JSON Web Token. \n\nAll other functions require the JSON Web Token (JWT) from this function to \nbe incuded in their arguments. The value of the "token" field is the actual JWT and any other values in the returned JSON\nare metadata there for your convenience. Tokens are valid for a default of 1 hour (3600 seconds). If you try calling an\nAPI endpoint with a missing, invalid, or expired JWT it will return a HTTP 403 code. You would then need to call this end point\nto get a new token.',
  operationId: 'makeToken_getToken_post',
  request: {
    query: z.object({
      apiID: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'apiID',
            required: true,
            schema: { title: 'Apiid', type: 'string' },
          },
          title: 'Apiid',
        }),
      apiKey: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'apiKey',
            required: true,
            schema: { title: 'Apikey', type: 'string' },
          },
          title: 'Apikey',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: JSONWebTokenSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getListPriceRoute = createRoute({
  method: 'get',
  path: '/listPrice',
  tags: ['Pricing Data', 'Starter Plan Or Greater'],
  summary: 'Stats on ask price of new vehicles',
  description:
    'Average, median, standard deviation, and population variance of the ask price of new vehicles over the last 15 days for a given brand and region.\n\nThe available brand and region names can be retrieved from their respective endpoints.',
  operationId: 'getAvgListPrice_listPrice_get',
  request: {
    query: z.object({
      jwt: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'jwt',
            required: true,
            schema: { title: 'Jwt', type: 'string' },
          },
          title: 'Jwt',
        }),
      brandName: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'brandName',
            required: true,
            schema: { title: 'Brandname', type: 'string' },
          },
          title: 'Brandname',
        }),
      regionName: z
        .string()
        .default('REGION_STATE_CA')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'regionName',
            required: false,
            schema: { default: 'REGION_STATE_CA', title: 'Regionname', type: 'string' },
          },
          title: 'Regionname',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: BasicModelStatsRespSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getListingsRoute = createRoute({
  method: 'get',
  path: '/listings',
  tags: ['Vehicle Data', 'Analyst Plan Or Greater'],
  summary: 'Listings by Dealer ID',
  description:
    "See /listings2 endpoint for more flexible listing search.\nReturns a dealer's listings over the last 45 days by dealer ID. The ID can be found by calling the /getDealers endpoint. \nListing keys are: vin, askPrice, msrp, isNew, firstSeen, lastSeen, modelName, brandName.\nResults are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).",
  operationId: 'getListingsByDealer_listings_get',
  request: {
    query: z.object({
      jwt: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'jwt',
            required: true,
            schema: { title: 'Jwt', type: 'string' },
          },
          title: 'Jwt',
        }),
      dealerID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            in: 'query',
            name: 'dealerID',
            required: true,
            schema: { title: 'Dealerid', type: 'integer' },
          },
          title: 'Dealerid',
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, title: 'Page', type: 'integer' },
          },
          title: 'Page',
        }),
      newCars: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'newCars',
            required: false,
            schema: { default: true, title: 'Newcars', type: 'boolean' },
          },
          title: 'Newcars',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ListingRespSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getListings2Route = createRoute({
  method: 'get',
  path: '/listings2',
  tags: ['Vehicle Data', 'Developer Plan Or Greater'],
  summary: 'Flexible Listing Search',
  description:
    "Generic getter for listings supporting a wide array of selection criteria. This is the new primary listing endpoint and we will phase out the older listing endpoints over time.\nThe other listing endpoints return the same data, but are more restrictive in the available geographic and vehicle selection criteria and can be replicated by this endpoint.\n\nDealer selection uses the most restrictive criteria supplied. From most restrictive to least: dealerID, gps, zipCode, region. You must provide some dealer selection criteria.\n\nIt is important to note that the units in the longitude are in degrees east, not degrees west. For example the coordinates 45.53N, 100.41W correspond to Mobridge, SC \nbut they will be interpreted as 45.53N, 100.41E which corresponds to a point in the Gobi Desert near Jinst, Mongolia. You can fix this by converting the longitiude yourself, \nor by supplying a negative value (-100.41). For this example both (X, -100.41) and (X, 259.59) would be the same point. Units on the radius are miles and a smaller radius will\nresult in a faster response time. Maximum search radius depends on your subscription plan. \n\nThe radius value is used for GPS searches and (optionally) zipCode searches. It is ignored for searches using other location criteria. If you provide a radius value with a zipCode\nsearch, the zipCode will be mapped to GPS coordinates behind the scenes. If no radius is provided or if the zipCode to GPS mapping fails,\nthe API will only search for vehicles at dealerships within the provided zipCode.\n\nListing selection logically ANDs all options given. \n\nTime interval selection will prefer explicit start and end dates. If only one of startDate/endDate is supplied, this endpoint will use it \nas an anchor and look forward or backwards by the daysBack value. If startDate is specified and endDate is not, then endDate will be set to startDate+daysBack. \nConversely if endDate is specified, but startDate is not then startDate will be set at endDate-daysBack.\nIf neither is supplied endpoint will set endDate to today and startDate to today-daysBack.\n\nMaximum time interval is 45 days.\n\nMileage selection uses the provided mileage values and returns vehicles with mileage in the range [mileageLow, mileageHigh].\nIf mileageLow == mileageHigh (for example both are 0 default) this endpoint will not filter based on mileage. Not all used vehicles have a mileage record available. \n\nExtendedSearch modifies the slice of listings returned. If false (default) it only returns vehicles satisfying lastSeen >= startDate and lastSeen < endDate.\nIf true it will return vehicles that were in dealer's inventory at any point between startDate and endDate including vehicles that were sold after endDate.\nSetting extendedSearch to true will result in a slower response time. \n\nFor example: If both a region name and dealer ID are supplied the dealer ID will be used because it is the most restrictive.\n\nIf a brandName of Ford and modelYear of 2019, modelName of F-150, and newCars of False is supplied this endpoint will return \nused 2019 model year Ford F-150s. If a contradictory listing selection is supplied (for example Ford + Camry) no listings will be returned\nbecause the request matched no listings.\n\nResults are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).",
  operationId: 'getListings2_listings2_get',
  request: {
    query: z.object({
      jwt: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'jwt',
            required: true,
            schema: { title: 'Jwt', type: 'string' },
          },
          title: 'Jwt',
        }),
      dealerID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'dealerID',
            required: false,
            schema: { default: 0, title: 'Dealerid', type: 'integer' },
          },
          title: 'Dealerid',
        }),
      zipCode: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'zipCode',
            required: false,
            schema: { default: 0, title: 'Zipcode', type: 'integer' },
          },
          title: 'Zipcode',
        }),
      latitude: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'latitude',
            required: false,
            schema: { default: 0, title: 'Latitude', type: 'number' },
          },
          title: 'Latitude',
        }),
      longitude: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'longitude',
            required: false,
            schema: { default: 0, title: 'Longitude', type: 'number' },
          },
          title: 'Longitude',
        }),
      radius: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'radius',
            required: false,
            schema: { default: 0, title: 'Radius', type: 'number' },
          },
          title: 'Radius',
        }),
      regionName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'regionName',
            required: false,
            schema: { title: 'Regionname', type: 'string' },
          },
          title: 'Regionname',
        }),
      brandName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'brandName',
            required: false,
            schema: { title: 'Brandname', type: 'string' },
          },
          title: 'Brandname',
        }),
      modelName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'modelName',
            required: false,
            schema: { title: 'Modelname', type: 'string' },
          },
          title: 'Modelname',
        }),
      modelYear: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'modelYear',
            required: false,
            schema: { default: 0, title: 'Modelyear', type: 'integer' },
          },
          title: 'Modelyear',
        }),
      mileageLow: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'mileageLow',
            required: false,
            schema: { default: 0, title: 'Mileagelow', type: 'integer' },
          },
          title: 'Mileagelow',
        }),
      mileageHigh: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'mileageHigh',
            required: false,
            schema: { default: 0, title: 'Mileagehigh', type: 'integer' },
          },
          title: 'Mileagehigh',
        }),
      startDate: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'startDate',
            required: false,
            schema: { format: 'date', title: 'Startdate', type: 'string' },
          },
          title: 'Startdate',
        }),
      endDate: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'endDate',
            required: false,
            schema: { format: 'date', title: 'Enddate', type: 'string' },
          },
          title: 'Enddate',
        }),
      daysBack: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(45)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'daysBack',
            required: false,
            schema: { default: 45, title: 'Daysback', type: 'integer' },
          },
          title: 'Daysback',
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, title: 'Page', type: 'integer' },
          },
          title: 'Page',
        }),
      newCars: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'newCars',
            required: false,
            schema: { default: true, title: 'Newcars', type: 'boolean' },
          },
          title: 'Newcars',
        }),
      extendedSearch: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'extendedSearch',
            required: false,
            schema: { default: false, title: 'Extendedsearch', type: 'boolean' },
          },
          title: 'Extendedsearch',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ListingRespSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getListingsByDateRoute = createRoute({
  method: 'get',
  path: '/listingsByDate',
  tags: ['Vehicle Data', 'Analyst Plan Or Greater'],
  summary: 'Listings by Dealer ID and Date',
  description:
    "See /listings2 endpoint for more flexible listing search.\nReturns a dealer's listings over the given timespan by dealer ID. The ID can be found by calling the /getDealers endpoint. \nMaximum time interval between startDate and endDate is 45 days.\nListing keys are: vin, askPrice, msrp, isNew, firstSeen, lastSeen, modelName, brandName.\nResults are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).",
  operationId: 'getListingsByDealer_listingsByDate_get',
  request: {
    query: z.object({
      jwt: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'jwt',
            required: true,
            schema: { title: 'Jwt', type: 'string' },
          },
          title: 'Jwt',
        }),
      dealerID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            in: 'query',
            name: 'dealerID',
            required: true,
            schema: { title: 'Dealerid', type: 'integer' },
          },
          title: 'Dealerid',
        }),
      startDate: z.iso
        .date()
        .openapi({
          param: {
            in: 'query',
            name: 'startDate',
            required: true,
            schema: { format: 'date', title: 'Startdate', type: 'string' },
          },
          title: 'Startdate',
        }),
      endDate: z.iso
        .date()
        .openapi({
          param: {
            in: 'query',
            name: 'endDate',
            required: true,
            schema: { format: 'date', title: 'Enddate', type: 'string' },
          },
          title: 'Enddate',
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, title: 'Page', type: 'integer' },
          },
          title: 'Page',
        }),
      newCars: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'newCars',
            required: false,
            schema: { default: true, title: 'Newcars', type: 'boolean' },
          },
          title: 'Newcars',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ListingRespSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getListingsByRegionRoute = createRoute({
  method: 'get',
  path: '/listingsByRegion',
  tags: ['Vehicle Data', 'Analyst Plan Or Greater'],
  summary: 'Listings by Region',
  description:
    "See /listings2 endpoint for more flexible listing search.\nReturns a dealer's listings over up to the last 45 days by region. \nListing keys are: vin, askPrice, msrp, isNew, firstSeen, lastSeen, modelName, brandName.\nResults are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).",
  operationId: 'getListingsByRegion_listingsByRegion_get',
  request: {
    query: z.object({
      jwt: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'jwt',
            required: true,
            schema: { title: 'Jwt', type: 'string' },
          },
          title: 'Jwt',
        }),
      regionName: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'regionName',
            required: true,
            schema: { title: 'Regionname', type: 'string' },
          },
          title: 'Regionname',
        }),
      modelName: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'modelName',
            required: true,
            schema: { title: 'Modelname', type: 'string' },
          },
          title: 'Modelname',
        }),
      daysBack: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'daysBack',
            required: false,
            schema: { default: 10, title: 'Daysback', type: 'integer' },
          },
          title: 'Daysback',
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, title: 'Page', type: 'integer' },
          },
          title: 'Page',
        }),
      newCars: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'newCars',
            required: false,
            schema: { default: true, title: 'Newcars', type: 'boolean' },
          },
          title: 'Newcars',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ListingRespSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getListingsByRegionAndDateRoute = createRoute({
  method: 'get',
  path: '/listingsByRegionAndDate',
  tags: ['Vehicle Data', 'Analyst Plan Or Greater'],
  summary: 'Listings by Region and Date',
  description:
    "See /listings2 endpoint for more flexible listing search.\nReturns listings active in a region in the given date range [startdate, endDate), or in other words dates that satisfy startDate <= X < endDate. Maximum range is 45 days \nListing keys are: vin, askPrice, msrp, isNew, firstSeen, lastSeen, modelName, brandName.\nResults are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).",
  operationId: 'getListingsByRegionAndDate_listingsByRegionAndDate_get',
  request: {
    query: z.object({
      jwt: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'jwt',
            required: true,
            schema: { title: 'Jwt', type: 'string' },
          },
          title: 'Jwt',
        }),
      regionName: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'regionName',
            required: true,
            schema: { title: 'Regionname', type: 'string' },
          },
          title: 'Regionname',
        }),
      modelName: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'modelName',
            required: true,
            schema: { title: 'Modelname', type: 'string' },
          },
          title: 'Modelname',
        }),
      startDate: z.iso
        .date()
        .openapi({
          param: {
            in: 'query',
            name: 'startDate',
            required: true,
            schema: { format: 'date', title: 'Startdate', type: 'string' },
          },
          title: 'Startdate',
        }),
      endDate: z.iso
        .date()
        .openapi({
          param: {
            in: 'query',
            name: 'endDate',
            required: true,
            schema: { format: 'date', title: 'Enddate', type: 'string' },
          },
          title: 'Enddate',
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, title: 'Page', type: 'integer' },
          },
          title: 'Page',
        }),
      newCars: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'newCars',
            required: false,
            schema: { default: true, title: 'Newcars', type: 'boolean' },
          },
          title: 'Newcars',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ListingRespSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getListingsByZipCodeRoute = createRoute({
  method: 'get',
  path: '/listingsByZipCode',
  tags: ['Vehicle Data', 'Analyst Plan Or Greater'],
  summary: 'Listings by ZipCode',
  description:
    "See /listings2 endpoint for more flexible listing search.\nReturns a dealer's listings over up to the last 45 days in the provided dealerhip's zip code. For example 92701.\nListing keys are: vin, askPrice, msrp, isNew, firstSeen, lastSeen, modelName, brandName.\nResults are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).",
  operationId: 'listingsByZipCode_listingsByZipCode_get',
  request: {
    query: z.object({
      jwt: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'jwt',
            required: true,
            schema: { title: 'Jwt', type: 'string' },
          },
          title: 'Jwt',
        }),
      zipCode: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            in: 'query',
            name: 'zipCode',
            required: true,
            schema: { title: 'Zipcode', type: 'integer' },
          },
          title: 'Zipcode',
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, title: 'Page', type: 'integer' },
          },
          title: 'Page',
        }),
      newCars: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'newCars',
            required: false,
            schema: { default: true, title: 'Newcars', type: 'boolean' },
          },
          title: 'Newcars',
        }),
      modelName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'modelName',
            required: false,
            schema: { title: 'Modelname', type: 'string' },
          },
          title: 'Modelname',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ListingRespSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getListingsByZipCodeAndDateRoute = createRoute({
  method: 'get',
  path: '/listingsByZipCodeAndDate',
  tags: ['Vehicle Data', 'Analyst Plan Or Greater'],
  summary: 'Listings by ZipCode and Date',
  description:
    "See /listings2 endpoint for more flexible listing search.\nReturns a dealer's listings over up to the last 45 days in the provided dealership's zip code. For example 92701.\nListing keys are: vin, askPrice, msrp, isNew, firstSeen, lastSeen, modelName, brandName.\nResults are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).",
  operationId: 'listingsByZipCodeAndDate_listingsByZipCodeAndDate_get',
  request: {
    query: z.object({
      jwt: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'jwt',
            required: true,
            schema: { title: 'Jwt', type: 'string' },
          },
          title: 'Jwt',
        }),
      zipCode: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            in: 'query',
            name: 'zipCode',
            required: true,
            schema: { title: 'Zipcode', type: 'integer' },
          },
          title: 'Zipcode',
        }),
      startDate: z.iso
        .date()
        .openapi({
          param: {
            in: 'query',
            name: 'startDate',
            required: true,
            schema: { format: 'date', title: 'Startdate', type: 'string' },
          },
          title: 'Startdate',
        }),
      endDate: z.iso
        .date()
        .openapi({
          param: {
            in: 'query',
            name: 'endDate',
            required: true,
            schema: { format: 'date', title: 'Enddate', type: 'string' },
          },
          title: 'Enddate',
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, title: 'Page', type: 'integer' },
          },
          title: 'Page',
        }),
      newCars: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'newCars',
            required: false,
            schema: { default: true, title: 'Newcars', type: 'boolean' },
          },
          title: 'Newcars',
        }),
      modelName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'modelName',
            required: false,
            schema: { title: 'Modelname', type: 'string' },
          },
          title: 'Modelname',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ListingRespSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const postMakeSubUserKeyRoute = createRoute({
  method: 'post',
  path: '/makeSubUserKey',
  tags: ['Authentication'],
  summary:
    'Generate a Sub User Key that can be used by your users to make API calls in frontend applications.',
  description:
    'This endpoint is only fully available to users with a paid plan. Users on Basic or Trial plans may only create keys valid on the "localhost" domain.\nThis endpoint creates an API key that can be embedded in frontend applications such as web pages that allow your users to directly make API calls. \nThe "endpoints" value is an array of strings that name the allowed endpoints that may be called using the Sub User Key. Passing a "*" value in the array will allow\nall endpoints that require a JWT (JSON Web Token) to be called by the Sub User Key. The keys are valid for as long as your account is valid or you revoke the Sub User Key.\nAll API calls made by the Sub User Keys are billed to your account. Additionally you should not call this endpoint or the /revokeSubUserKey endpoint at a combined rate \nhigher than once per second. ',
  operationId: 'makeSubUserKey_makeSubUserKey_post',
  request: {
    query: z.object({
      apiID: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'apiID',
            required: true,
            schema: { title: 'Apiid', type: 'string' },
          },
          title: 'Apiid',
        }),
      apiKey: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'apiKey',
            required: true,
            schema: { title: 'Apikey', type: 'string' },
          },
          title: 'Apikey',
        }),
      siteName: z
        .string()
        .default('localhost')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'siteName',
            required: false,
            schema: { default: 'localhost', title: 'Sitename', type: 'string' },
          },
          title: 'Sitename',
        }),
    }),
    body: { content: { 'application/json': { schema: EndpointListSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: SubUserJSONWebTokenSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getModelYearDistRoute = createRoute({
  method: 'get',
  path: '/modelYearDist',
  tags: ['Sales Data', 'Starter Plan Or Greater'],
  summary: 'Used market share of model year by model',
  description:
    'Market share of used vehicles over the last 45 days by model and year. All values are relative to vehicles of the same model.\nFor example: a percentOfMarket value of 25, year of 2017, and modelName of Camry means that 25% of used Camrys on the market \nin the given region over the last 45 days were from the 2017 model year.',
  operationId: 'getModelUsedDist_modelYearDist_get',
  request: {
    query: z.object({
      jwt: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'jwt',
            required: true,
            schema: { title: 'Jwt', type: 'string' },
          },
          title: 'Jwt',
        }),
      modelName: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'modelName',
            required: true,
            schema: { title: 'Modelname', type: 'string' },
          },
          title: 'Modelname',
        }),
      brandName: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'brandName',
            required: true,
            schema: { title: 'Brandname', type: 'string' },
          },
          title: 'Brandname',
        }),
      regionName: z
        .string()
        .default('REGION_STATE_CA')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'regionName',
            required: false,
            schema: { default: 'REGION_STATE_CA', title: 'Regionname', type: 'string' },
          },
          title: 'Regionname',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: ModelYearDistRespSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getRegionDailySalesRoute = createRoute({
  method: 'get',
  path: '/regionDailySales',
  tags: ['Sales Data', 'Analyst Plan Or Greater'],
  summary: 'Brand sales by region and Day',
  description:
    "Get regional sales by brand and day. Most recent data is typically only 2 days old for this endpoint.\n    \nThe Day field is in YYYY-MM-DD format. For example if you wanted sales data from April 5th of 2020 the day field would be '2020-04-05'\n\nData availability depends on region and goes back up to 2016.",
  operationId: 'getDealerSales_regionDailySales_get',
  request: {
    query: z.object({
      jwt: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'jwt',
            required: true,
            schema: { title: 'Jwt', type: 'string' },
          },
          title: 'Jwt',
        }),
      brandName: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'brandName',
            required: true,
            schema: { title: 'Brandname', type: 'string' },
          },
          title: 'Brandname',
        }),
      regionName: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'regionName',
            required: true,
            schema: { title: 'Regionname', type: 'string' },
          },
          title: 'Regionname',
        }),
      day: z.iso
        .date()
        .openapi({
          param: {
            in: 'query',
            name: 'day',
            required: true,
            schema: { format: 'date', title: 'Day', type: 'string' },
          },
          title: 'Day',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: GenericResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getRegionSalesRoute = createRoute({
  method: 'get',
  path: '/regionSales',
  tags: ['Sales Data', 'Premium', 'Analyst Plan Or Greater'],
  summary: 'Premium. Brand sales by region and month',
  description:
    "Premium. Get regional sales by brand and month, broken down by day. Most recent data is typically only 2 days old for this endpoint.\n    \nThe month field is in YYYY-MM-DD format. For example if you wanted sales data from April of 2020 the month field would be '2020-04-01'\n\nData availability depends on region and goes back up to 2016.",
  operationId: 'getDealerSales_regionSales_get',
  request: {
    query: z.object({
      jwt: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'jwt',
            required: true,
            schema: { title: 'Jwt', type: 'string' },
          },
          title: 'Jwt',
        }),
      brandName: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'brandName',
            required: true,
            schema: { title: 'Brandname', type: 'string' },
          },
          title: 'Brandname',
        }),
      regionName: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'regionName',
            required: true,
            schema: { title: 'Regionname', type: 'string' },
          },
          title: 'Regionname',
        }),
      month: z.iso
        .date()
        .openapi({
          param: {
            in: 'query',
            name: 'month',
            required: true,
            schema: { format: 'date', title: 'Month', type: 'string' },
          },
          title: 'Month',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: GenericResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const putRevokeSubUserKeyRoute = createRoute({
  method: 'put',
  path: '/revokeSubUserKey',
  tags: ['Authentication'],
  summary: 'Revoke a Sub User Key associated with your account.',
  description: 'Revoke a SubUser API Key with the given UUID. This action can not be undone.',
  operationId: 'revokeSubUserKey_revokeSubUserKey_put',
  request: {
    query: z.object({
      apiID: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'apiID',
            required: true,
            schema: { title: 'Apiid', type: 'string' },
          },
          title: 'Apiid',
        }),
      apiKey: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'apiKey',
            required: true,
            schema: { title: 'Apikey', type: 'string' },
          },
          title: 'Apikey',
        }),
      subUserKeyUUID: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'subUserKeyUUID',
            required: true,
            schema: { title: 'Subuserkeyuuid', type: 'string' },
          },
          title: 'Subuserkeyuuid',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: GenericResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getSalePriceRoute = createRoute({
  method: 'get',
  path: '/salePrice',
  tags: ['Pricing Data', 'Starter Plan Or Greater'],
  summary: 'Stats on sale price of new vehicles',
  description:
    'Average, median, standard deviation, and population variance of the sale price of new vehicles over the last 15 days for a given brand and region.\n\nThe available brand and region names can be retrieved from their respective endpoints.',
  operationId: 'getAvgSalePrice_salePrice_get',
  request: {
    query: z.object({
      jwt: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'jwt',
            required: true,
            schema: { title: 'Jwt', type: 'string' },
          },
          title: 'Jwt',
        }),
      brandName: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'brandName',
            required: true,
            schema: { title: 'Brandname', type: 'string' },
          },
          title: 'Brandname',
        }),
      regionName: z
        .string()
        .default('REGION_STATE_CA')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'regionName',
            required: false,
            schema: { default: 'REGION_STATE_CA', title: 'Regionname', type: 'string' },
          },
          title: 'Regionname',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: BasicModelStatsRespSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getSalePriceHistogramRoute = createRoute({
  method: 'get',
  path: '/salePriceHistogram',
  tags: ['Pricing Data', 'Starter Plan Or Greater'],
  summary: 'Histogram of sales price of new vehicles by model',
  description:
    'Histogram of the sale price of vehicles over the last 45 days for a given model and region. \nPrice buckets are grouped in units of $1000\nThe available brand, model, and region names can be retrieved from their respective endpoints.',
  operationId: 'getModelSaleBuckets_salePriceHistogram_get',
  request: {
    query: z.object({
      jwt: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'jwt',
            required: true,
            schema: { title: 'Jwt', type: 'string' },
          },
          title: 'Jwt',
        }),
      modelName: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'modelName',
            required: true,
            schema: { title: 'Modelname', type: 'string' },
          },
          title: 'Modelname',
        }),
      brandName: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'brandName',
            required: true,
            schema: { title: 'Brandname', type: 'string' },
          },
          title: 'Brandname',
        }),
      regionName: z
        .string()
        .default('REGION_STATE_CA')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'regionName',
            required: false,
            schema: { default: 'REGION_STATE_CA', title: 'Regionname', type: 'string' },
          },
          title: 'Regionname',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: BucketRespSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getSimilarSalePriceRoute = createRoute({
  method: 'get',
  path: '/similarSalePrice',
  tags: ['Vehicle Data', 'Premium', 'Pricing Data', 'Starter Plan Or Greater'],
  summary: 'Premium. Simple Vehicle Market Report',
  description:
    'Premium. Provides the average, stdDev, and count, of the sale price and mileage of similar new and used vehicles in a given region based off the provided VIN. \nOptionally restricts report to vehicles of the same model year and goes back up to 120 days.',
  operationId: 'getMarket3_similarSalePrice_get',
  request: {
    query: z.object({
      jwt: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'jwt',
            required: true,
            schema: { title: 'Jwt', type: 'string' },
          },
          title: 'Jwt',
        }),
      vin: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'vin',
            required: true,
            schema: { title: 'Vin', type: 'string' },
          },
          title: 'Vin',
        }),
      regionName: z
        .string()
        .default('REGION_STATE_CA')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'regionName',
            required: false,
            schema: { default: 'REGION_STATE_CA', title: 'Regionname', type: 'string' },
          },
          title: 'Regionname',
        }),
      daysBack: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(45)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'daysBack',
            required: false,
            schema: { default: 45, title: 'Daysback', type: 'integer' },
          },
          title: 'Daysback',
        }),
      sameYear: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'sameYear',
            required: false,
            schema: { default: false, title: 'Sameyear', type: 'boolean' },
          },
          title: 'Sameyear',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: SimilarSalePriceRespSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getTopModelsRoute = createRoute({
  method: 'get',
  path: '/topModels',
  tags: ['Sales Data', 'Starter Plan Or Greater'],
  summary: 'Top models in a given region',
  description:
    "Sales ranking of different models by region over the last 45 days. \nThe <strong>percentOfTopSales</strong> value is the percent of the top seller the model represents. \n\nFor example: a value of 80% means that model sold 8 vehicles for every 10 of the top model sold.\n\nThe other fields represent the model percent of X. The <strong>brandMarketShare</strong> field is that brand's market share of the region\nover the report's time interval.",
  operationId: 'getTopModels_topModels_get',
  request: {
    query: z.object({
      jwt: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'jwt',
            required: true,
            schema: { title: 'Jwt', type: 'string' },
          },
          title: 'Jwt',
        }),
      regionName: z
        .string()
        .default('REGION_STATE_CA')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'regionName',
            required: false,
            schema: { default: 'REGION_STATE_CA', title: 'Regionname', type: 'string' },
          },
          title: 'Regionname',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: TopModelRespSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getValuationRoute = createRoute({
  method: 'get',
  path: '/valuation',
  tags: ['Vehicle Data', 'Premium', 'Pricing Data', 'Developer Plan Or Greater'],
  summary: 'Premium. Simple Vehicle Market Report Over Arbitrary Locations and Vehicles.',
  description:
    'Premium. Provides the average, stdDev, and count, of the sale price and mileage of similar new or used vehicles based off the provided VIN \nand matching the provided other search criteria. This endpoint can be easily used to determine market values in arbitrary geographic locations (like a city)\nfor specific vehicles.\nSee /listings2 endpoint for documentation on location, vehicle, and time search parameters. \nDate selection is restricted by your subscription tier, same as with the /listings2 endpoint.\nOptionally restricts report to vehicles of the same model year. ',
  operationId: 'getMarket4_valuation_get',
  request: {
    query: z.object({
      jwt: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'jwt',
            required: true,
            schema: { title: 'Jwt', type: 'string' },
          },
          title: 'Jwt',
        }),
      vin: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'vin',
            required: true,
            schema: { title: 'Vin', type: 'string' },
          },
          title: 'Vin',
        }),
      dealerID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'dealerID',
            required: false,
            schema: { default: 0, title: 'Dealerid', type: 'integer' },
          },
          title: 'Dealerid',
        }),
      zipCode: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'zipCode',
            required: false,
            schema: { default: 0, title: 'Zipcode', type: 'integer' },
          },
          title: 'Zipcode',
        }),
      latitude: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'latitude',
            required: false,
            schema: { default: 0, title: 'Latitude', type: 'number' },
          },
          title: 'Latitude',
        }),
      longitude: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'longitude',
            required: false,
            schema: { default: 0, title: 'Longitude', type: 'number' },
          },
          title: 'Longitude',
        }),
      radius: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'radius',
            required: false,
            schema: { default: 0, title: 'Radius', type: 'number' },
          },
          title: 'Radius',
        }),
      regionName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'regionName',
            required: false,
            schema: { title: 'Regionname', type: 'string' },
          },
          title: 'Regionname',
        }),
      mileageLow: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'mileageLow',
            required: false,
            schema: { default: 0, title: 'Mileagelow', type: 'integer' },
          },
          title: 'Mileagelow',
        }),
      mileageHigh: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'mileageHigh',
            required: false,
            schema: { default: 0, title: 'Mileagehigh', type: 'integer' },
          },
          title: 'Mileagehigh',
        }),
      startDate: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'startDate',
            required: false,
            schema: { format: 'date', title: 'Startdate', type: 'string' },
          },
          title: 'Startdate',
        }),
      endDate: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'endDate',
            required: false,
            schema: { format: 'date', title: 'Enddate', type: 'string' },
          },
          title: 'Enddate',
        }),
      daysBack: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(45)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'daysBack',
            required: false,
            schema: { default: 45, title: 'Daysback', type: 'integer' },
          },
          title: 'Daysback',
        }),
      newCars: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'newCars',
            required: false,
            schema: { default: false, title: 'Newcars', type: 'boolean' },
          },
          title: 'Newcars',
        }),
      extendedSearch: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'extendedSearch',
            required: false,
            schema: { default: false, title: 'Extendedsearch', type: 'boolean' },
          },
          title: 'Extendedsearch',
        }),
      sameYear: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'sameYear',
            required: false,
            schema: { default: false, title: 'Sameyear', type: 'boolean' },
          },
          title: 'Sameyear',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: SimilarSalePriceRespSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getVehicleHistoryRoute = createRoute({
  method: 'get',
  path: '/vehicleHistory',
  tags: ['Vehicle Data', 'Premium', 'Starter Plan Or Greater'],
  summary: 'Premium. Simple Vehicle History Report',
  description:
    "Premium. Provides a simple report detailing a vechicle's sales history at dealerships. Data includes the name of the dealership, dates it was for sale,\nprice, new/used condition, mileage, dealership state, and dealership zip code. Data availability goes back to early 2016. \n\nIf your use case involves checking if a vehicle has appeared on the open market on or after a given date see \nthe /vehicleSeen endpoint.",
  operationId: 'getHistory2_vehicleHistory_get',
  request: {
    query: z.object({
      jwt: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'jwt',
            required: true,
            schema: { title: 'Jwt', type: 'string' },
          },
          title: 'Jwt',
        }),
      vin: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'vin',
            required: true,
            schema: { title: 'Vin', type: 'string' },
          },
          title: 'Vin',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: HistoryRespSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getVehicleSeenRoute = createRoute({
  method: 'get',
  path: '/vehicleSeen',
  tags: ['Vehicle Data', 'Application Acceleration', 'Analyst Plan Or Greater'],
  summary: 'Checks if a VIN appeared on the market on or after a given date.',
  description:
    'Checks our database to see if we have data on a VIN that appeared on the open market on or after the given date with a True/False response. \nThis endpoint is more cost effective than the /vehicleHistory endpoint if your use case\nrequires searching a large list of vehicles with a low individual likelyhood of appearing on the open market. (For example searching for a specific stolen vehicle).',
  operationId: 'getVehicleSeen_vehicleSeen_get',
  request: {
    query: z.object({
      jwt: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'jwt',
            required: true,
            schema: { title: 'Jwt', type: 'string' },
          },
          title: 'Jwt',
        }),
      vin: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'vin',
            required: true,
            schema: { title: 'Vin', type: 'string' },
          },
          title: 'Vin',
        }),
      afterDate: z.iso
        .date()
        .openapi({
          param: {
            in: 'query',
            name: 'afterDate',
            required: true,
            schema: { format: 'date', title: 'Afterdate', type: 'string' },
          },
          title: 'Afterdate',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: BooleanRespSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getVinDecodeRoute = createRoute({
  method: 'get',
  path: '/vinDecode',
  tags: ['Vehicle Data', 'Starter Plan Or Greater'],
  summary: 'Vin decoder and Recall Info',
  description:
    'Decodes the provided North American vin and provides recall information if available. \nWe require at least the first 12 out of 17 characters in the vin to attempt a decode. The vin is not case sensitive.\nIf passEmpty (default False) is True we will also include the empty fields in the response json. \nIf includeRecall (default True) is True we will include recall data reported to the NHTSA. Set False for a faster response.',
  operationId: 'vinDecode_vinDecode_get',
  request: {
    query: z.object({
      jwt: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'jwt',
            required: true,
            schema: { title: 'Jwt', type: 'string' },
          },
          title: 'Jwt',
        }),
      vin: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'vin',
            required: true,
            schema: { title: 'Vin', type: 'string' },
          },
          title: 'Vin',
        }),
      passEmpty: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'passEmpty',
            required: false,
            schema: { default: false, title: 'Passempty', type: 'boolean' },
          },
          title: 'Passempty',
        }),
      includeRecall: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'includeRecall',
            required: false,
            schema: { default: true, title: 'Includerecall', type: 'boolean' },
          },
          title: 'Includerecall',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: GenericResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})
