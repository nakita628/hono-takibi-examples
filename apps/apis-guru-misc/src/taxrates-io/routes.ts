import { createRoute, z } from '@hono/zod-openapi'

export const getV1TaxCountrycodeRoute = createRoute({
  method: 'get',
  path: '/v1/tax/countrycode',
  tags: ['v1/tax'],
  summary: 'Tax rates by Country Code',
  description:
    "Get request. This method returns all tax rates for country discovered based on country code. The country code must be 2 letters ISO 3166-1 alfa-2 country code (see <a href=\"https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes\">here</a> for more information). You can use 'filter' parameter to narrow results to selected type of tax\n<p>For US sales tax you can filter the tax rate you want for each state or zip code with one of the following: (they are case sensitive)</p>\n<ul>\n  <li>CombinedRate</li>\n  <li>StateRate</li>\n  <li>CountyRate</li>\n  <li>CityRate</li>\n  <li>SpecialRate</li>\n</ul>\n<pre><code class=\"js\">var taxrates_endpoint = 'tax/countrycode';\n  var taxrates_params = {'domain':'api.taxrates.io', 'country_code':'IE', 'product_code':'C010'};\n  var taxrates_url = '/api/v1/';\n  if ( localStorage.getItem(\"Taxrates_API_Client_Secret\") ){\n  jQuery.support.cors = true;\n  jQuery.ajax({\n      url: taxrates_url+taxrates_endpoint,\n      type: 'get',\n      method: 'get',\n      dataType: \"json\",\n      data: taxrates_params,\n      beforeSend: function (request) {\n              request.withCredentials = true;\n              request.setRequestHeader(\"Authorization\", \"Apikey \" + localStorage.getItem(\"Taxrates_API_Client_Secret\"));\n      },\n      headers: {\n        \"accept\": \"application/json\"\n      },\n      contentType: 'application/json; charset=utf-8',\n      success: function (data) {\n        //Maintain errors inside success because the API may return 200 in general, but different code inside\n          if(data.ErrorCode=='404' || data.ErrorCode=='500'){\n            //Maintain errors here\n            console.log(data.ErrorMessage);\n            return false;\n          }else{\n            var rates = [];\n            var i=0;\n            jQuery.each(data, function(k, v) {\n                if(v.hasOwnProperty(\"taxes\")){\n                    jQuery.each(v.taxes, function(m, w) {\n                        rates[i] = [];\n                        //Only showing standard rate type\n                        if( w.Type == \"standard\" ){\n                            rates[i][0] = w.Country;\n                            rates[i][1] = w.Type;\n                            rates[i][2] = w.data_value;\n                            i++;\n                        }\n                    });\n                }\n            //Now you have all your rates inside rates variable.\n            }).fail(function(xhr) {\n                    //Maintain your errors here\n                    return false;\n            });\n            return true;\n  }else{\n    //Not logged into taxrates.io\n    //Maintain your errors here\n    return false;\n  }</code></pre>\n",
  operationId: 'taxRatesByCountryCode',
  request: {
    query: z.object({
      domain: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Domain name: api.taxrates.io',
            in: 'query',
            name: 'domain',
            schema: { example: 'api.taxrates.io', type: 'string' },
            required: false,
          },
          example: 'api.taxrates.io',
        }),
      country_code: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Country code alpha 2',
            in: 'query',
            name: 'country_code',
            schema: { example: 'US', type: 'string' },
            required: false,
          },
          example: 'US',
        }),
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "You can filter your taxes by one of following types: 'standard', 'reduced', 'second reduced', 'third reduced' and 'super reduced'.",
            in: 'query',
            name: 'filter',
            schema: { example: '', type: 'string' },
            required: false,
          },
          example: '',
        }),
      zip: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "You must provide a zip code if one of your selected countries is United States and you've had selected a state on your Taxrates.io member's dashboard.",
            in: 'query',
            name: 'zip',
            schema: { example: '71642', type: 'string' },
            required: false,
          },
          example: '71642',
        }),
      'product_codes[]': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use one or many product code/s.',
            in: 'query',
            name: 'product_codes[]',
            schema: { example: 'C010', type: 'string' },
            required: false,
          },
          example: 'C010',
        }),
      'province ': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use for Canada',
            in: 'query',
            name: 'province ',
            schema: { example: '', type: 'string' },
            required: false,
          },
          example: '',
        }),
      date: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'date',
            schema: { example: '2020-09-02', type: 'string' },
            required: false,
          },
          example: '2020-09-02',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              country_name: z.string().exactOptional().openapi({ example: '<string>' }),
              taxes: z
                .array(
                  z
                    .object({
                      Country: z.string().exactOptional().openapi({ example: '<string>' }),
                      Type: z.string().exactOptional().openapi({ example: '<string>' }),
                      data_name: z.string().exactOptional().openapi({ example: '<string>' }),
                      data_value: z.string().exactOptional().openapi({ example: '<string>' }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({
                  example: [
                    {
                      Country: '<string>',
                      Type: '<string>',
                      data_name: '<string>',
                      data_value: '<string>',
                    },
                    {
                      Country: '<string>',
                      Type: '<string>',
                      data_name: '<string>',
                      data_value: '<string>',
                    },
                  ],
                }),
            })
            .openapi({ required: [] }),
          examples: {
            Success: {
              value: {
                country_name: '<string>',
                taxes: [
                  {
                    Country: '<string>',
                    Type: '<string>',
                    data_name: '<string>',
                    data_value: '<string>',
                  },
                  {
                    Country: '<string>',
                    Type: '<string>',
                    data_name: '<string>',
                    data_value: '<string>',
                  },
                ],
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Country not found. Have you provided correct alpha-2 country code?',
      content: {},
    },
    500: {
      description: 'Unexpected error',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.string().exactOptional().openapi({ example: '<integer>' }),
              fields: z.string().exactOptional().openapi({ example: '<string>' }),
              message: z.string().exactOptional().openapi({ example: '<string>' }),
            })
            .openapi({ required: [] }),
          examples: {
            'Unexpected error': {
              value: { code: '<integer>', fields: '<string>', message: '<string>' },
            },
          },
        },
      },
    },
  },
})

export const getV1TaxIpRoute = createRoute({
  method: 'get',
  path: '/v1/tax/ip',
  tags: ['v1/tax'],
  summary: 'Tax rates by IP address',
  description:
    "Get request. This method returns all tax rates for country discovered on either your IP address or IP address param. The IP param is not required. When empty, the taxrates.io will try to discover your IP address and based on this will retrieve the tax rates. You can use 'filter' parameter to narrow results to selected type of tax\n<p>For US sales tax you can filter the tax rate you want for each state or zip code with one of the following: (they are case sensitive)</p>\n<ul>\n  <li>CombinedRate</li>\n  <li>StateRate</li>\n  <li>CountyRate</li>\n  <li>CityRate</li>\n  <li>SpecialRate</li>\n</ul>\n<pre><code class=\"js\">var taxrates_endpoint = 'tax/ip';\n  var taxrates_params = {'domain':'api.taxrates.io', 'ip':'208.80.152.201', 'product_code':'C010'};\n  var taxrates_url = '/api/v1/';\n  if ( localStorage.getItem(\"Taxrates_API_Client_Secret\") ){\n  jQuery.support.cors = true;\n  jQuery.ajax({\n      url: taxrates_url+taxrates_endpoint,\n      type: 'get',\n      method: 'get',\n      dataType: \"json\",\n      data: taxrates_params,\n      beforeSend: function (request) {\n              request.withCredentials = true;\n              request.setRequestHeader(\"Authorization\", \"Apikey \" + localStorage.getItem(\"Taxrates_API_Client_Secret\"));\n      },\n      headers: {\n        \"accept\": \"application/json\"\n      },\n      contentType: 'application/json; charset=utf-8',\n      success: function (data) {\n        //Maintain errors inside success because the API may return 200 in general, but different code inside\n          if(data.ErrorCode=='404' || data.ErrorCode=='500'){\n            //Maintain errors here\n            console.log(data.ErrorMessage);\n            return false;\n          }else{\n            var rates = [];\n            var i=0;\n            jQuery.each(data, function(k, v) {\n                if(v.hasOwnProperty(\"taxes\")){\n                    jQuery.each(v.taxes, function(m, w) {\n                        rates[i] = [];\n                        //Only showing standard rate type\n                        if( w.Type == \"standard\" ){\n                            rates[i][0] = w.Country;\n                            rates[i][1] = w.Type;\n                            rates[i][2] = w.data_value;\n                            i++;\n                        }\n                    });\n                }\n            //Now you have all your rates inside rates variable.\n            }).fail(function(xhr) {\n                    //Maintain your errors here\n                    return false;\n            });\n            return true;\n  }else{\n    //Not logged into taxrates.io\n    //Maintain your errors here\n    return false;\n  }</code></pre>\n",
  operationId: 'taxRatesByIpAddress',
  request: {
    query: z.object({
      domain: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Domain name: api.taxrates.io',
            in: 'query',
            name: 'domain',
            schema: { example: 'api.taxrates.io', type: 'string' },
            required: false,
          },
          example: 'api.taxrates.io',
        }),
      ip: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "Customer's IP address",
            in: 'query',
            name: 'ip',
            schema: { example: '86.139.70.49', type: 'string' },
            required: false,
          },
          example: '86.139.70.49',
        }),
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'For US sales tax you can filter the tax type',
            in: 'query',
            name: 'filter',
            schema: { example: '', type: 'string' },
            required: false,
          },
          example: '',
        }),
      zip: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'For US sales tax a Zipcode must be proivded',
            in: 'query',
            name: 'zip',
            schema: { example: '', type: 'string' },
            required: false,
          },
          example: '',
        }),
      product_code: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Your can filter your taxes by product code',
            in: 'query',
            name: 'product_code',
            schema: { example: 'C010', type: 'string' },
            required: false,
          },
          example: 'C010',
        }),
    }),
  },
  responses: {
    200: {
      description: 'An array of tax rates for VAT, GST & TAX',
      content: {
        'application/json': {
          schema: z
            .array(
              z
                .object({
                  country_name: z.string().exactOptional().openapi({ example: '<string>' }),
                  taxes: z
                    .array(
                      z
                        .object({
                          Country: z.string().exactOptional().openapi({ example: '<string>' }),
                          Type: z.string().exactOptional().openapi({ example: '<string>' }),
                          data_name: z.string().exactOptional().openapi({ example: '<string>' }),
                          data_value: z.string().exactOptional().openapi({ example: '<string>' }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional()
                    .openapi({
                      example: [
                        {
                          Country: '<string>',
                          Type: '<string>',
                          data_name: '<string>',
                          data_value: '<string>',
                        },
                        {
                          Country: '<string>',
                          Type: '<string>',
                          data_name: '<string>',
                          data_value: '<string>',
                        },
                      ],
                    }),
                })
                .openapi({ required: [] }),
            )
            .openapi({
              example: [
                {
                  country_name: '<string>',
                  taxes: [
                    {
                      Country: '<string>',
                      Type: '<string>',
                      data_name: '<string>',
                      data_value: '<string>',
                    },
                    {
                      Country: '<string>',
                      Type: '<string>',
                      data_name: '<string>',
                      data_value: '<string>',
                    },
                  ],
                },
                {
                  country_name: '<string>',
                  taxes: [
                    {
                      Country: '<string>',
                      Type: '<string>',
                      data_name: '<string>',
                      data_value: '<string>',
                    },
                    {
                      Country: '<string>',
                      Type: '<string>',
                      data_name: '<string>',
                      data_value: '<string>',
                    },
                  ],
                },
              ],
            }),
          examples: {
            'An array of tax rates for VAT, GST & TAX': {
              value: [
                {
                  country_name: '<string>',
                  taxes: [
                    {
                      Country: '<string>',
                      Type: '<string>',
                      data_name: '<string>',
                      data_value: '<string>',
                    },
                    {
                      Country: '<string>',
                      Type: '<string>',
                      data_name: '<string>',
                      data_value: '<string>',
                    },
                  ],
                },
                {
                  country_name: '<string>',
                  taxes: [
                    {
                      Country: '<string>',
                      Type: '<string>',
                      data_name: '<string>',
                      data_value: '<string>',
                    },
                    {
                      Country: '<string>',
                      Type: '<string>',
                      data_name: '<string>',
                      data_value: '<string>',
                    },
                  ],
                },
              ],
            },
          },
        },
      },
    },
    404: { description: 'Geolocation can not be processed/No matching country found', content: {} },
    500: {
      description: 'Unexpected error',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.string().exactOptional().openapi({ example: '<integer>' }),
              fields: z.string().exactOptional().openapi({ example: '<string>' }),
              message: z.string().exactOptional().openapi({ example: '<string>' }),
            })
            .openapi({ required: [] }),
          examples: {
            'Unexpected error': {
              value: { code: '<integer>', fields: '<string>', message: '<string>' },
            },
          },
        },
      },
    },
  },
})

export const getV3TaxRatesRoute = createRoute({
  method: 'get',
  path: '/v3/tax/rates',
  tags: ['v3/tax'],
  summary: 'All tax rates',
  description:
    "<p>Get request. This method returns all tax rates configured on your account. Based on your country selection the endpoint will return all taxes for all countries. You can use the 'filter' parameter to narrow results to selected type of tax. Use 'zip' parameter when you have selected the United States.</p>\n<p>We have development an easy to use scheduler so you can call the API to get the rates every hour or day. Please click on the following link to see the <a href=\"https://gist.github.com/gregbird/cd904ff230cdf86253716aa351154edb\">code on Github</a>.</p>\n<p><b>Please note</b> in cases when a US state doesn't have sales tax and when a product is tax exempt for a zip code or for a state the API response will be \"null\"</p>\n<p>To get a response you need to have selected a product code in your Taxrates.io dashboard, please see the Introduction section above for description of the different types of product codes.</p>\n<p>For US sales tax you can filter the tax rate you want for each state or zip code with one of the following: (they are case sensitive)</p>\n<ul>\n  <li>CombinedRate</li>\n  <li>StateRate</li>\n  <li>CountyRate</li>\n  <li>CityRate</li>\n  <li>SpecialRate</li>\n</ul>\n<pre><code class=\"js\">\n  var taxrates_endpoint = 'tax/rates';\n  var taxrates_params = {'domain':'api.taxrates.io'};\n  var taxrates_url = '/api/v3/';\n  if ( localStorage.getItem(\"Taxrates_API_Client_Secret\") ){\n  jQuery.support.cors = true;\n  jQuery.ajax({\n      url: taxrates_url+taxrates_endpoint,\n      type: 'get',\n      method: 'get',\n      dataType: \"json\",\n      data: taxrates_params,\n      beforeSend: function (request) {\n              request.withCredentials = true;\n              request.setRequestHeader(\"Authorization\", \"Apikey \" + localStorage.getItem(\"Taxrates_API_Client_Secret\"));\n      },\n      headers: {\n        \"accept\": \"application/json\"\n      },\n      contentType: 'application/json; charset=utf-8',\n      success: function (data, textStatus, jqXHR) {\n        //Maintain errors inside success because the API may return 200 in general, but different code inside\n          if(data.ErrorCode=='404' || data.ErrorCode=='500'){\n            //Maintain errors here\n            console.log(data.ErrorMessage);\n            return false;\n          }else{\n            var rates = [];\n            var i=0;\n            var taxrates_range = '';\n            jQuery.each(data, function(k, v) {\n                if(v.hasOwnProperty(\"rates\")){\n                    jQuery.each(v.rates, function(m, w) {\n                        rates[i] = [];\n                        //Only showing standard rate type\n                        if( w.Type == \"standard\" ){\n                            rates[i][0] = w.Type;\n                            rates[i][1] = w.data_value;\n                            rates[i][2] = w.product_code;\n                            i++;\n                        }\n                    });\n                }\n            }).fail(function(xhr) {\n                    //Maintain your errors here\n                    return false;\n            });\n            var cursor = jqXHR.getResponseHeader('X-Cursor-Next');\n            if (cursor) {\n              // get next page...\n            }\n            return true;\n  }else{\n    //Not logged into taxrates.io\n    //Maintain your errors here\n    return false;\n  }</code></pre>\n",
  operationId: 'allTaxRates',
  request: {
    query: z.object({
      domain: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Domain name: api.taxrates.io',
            in: 'query',
            name: 'domain',
            schema: { example: '<string>', type: 'string' },
            required: false,
          },
          example: '<string>',
        }),
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "You can filter your taxes by one of following types: 'standard', 'CombinedRate', 'CountyRate', 'CityRate', 'SPDRate' and 'MTARate'.",
            in: 'query',
            name: 'filter',
            schema: { example: '', type: 'string' },
            required: false,
          },
          example: '',
        }),
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Cursor shows from which record you want to get information. Default value is 0, next value can be retrieved from X-Cursor-Next header.',
            in: 'query',
            name: 'cursor',
            schema: { example: '', type: 'string' },
            required: false,
          },
          example: '',
        }),
      Product_code: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'Product_code',
            schema: { example: 'C012', type: 'string' },
            required: false,
          },
          example: 'C012',
        }),
    }),
  },
  responses: {
    200: {
      description: 'An array of locations with tax rates',
      content: {
        'application/json': {
          schema: z
            .array(
              z
                .object({
                  id: z.string().exactOptional().openapi({ example: '<integer>' }),
                  name: z.string().exactOptional().openapi({ example: '<string>' }),
                  rates: z
                    .array(
                      z
                        .object({
                          data_name: z.string().exactOptional().openapi({ example: '<string>' }),
                          data_value: z.string().exactOptional().openapi({ example: '<string>' }),
                          product_code: z.string().exactOptional().openapi({ example: '<string>' }),
                          type: z.string().exactOptional().openapi({ example: '<string>' }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional()
                    .openapi({
                      example: [
                        {
                          data_name: '<string>',
                          data_value: '<string>',
                          product_code: '<string>',
                          type: '<string>',
                        },
                        {
                          data_name: '<string>',
                          data_value: '<string>',
                          product_code: '<string>',
                          type: '<string>',
                        },
                      ],
                    }),
                  state: z.string().exactOptional().openapi({ example: '<string>' }),
                  zip: z.string().exactOptional().openapi({ example: '<string>' }),
                })
                .openapi({ required: [] }),
            )
            .openapi({
              example: [
                {
                  id: '<integer>',
                  name: '<string>',
                  rates: [
                    {
                      data_name: '<string>',
                      data_value: '<string>',
                      product_code: '<string>',
                      type: '<string>',
                    },
                    {
                      data_name: '<string>',
                      data_value: '<string>',
                      product_code: '<string>',
                      type: '<string>',
                    },
                  ],
                  state: '<string>',
                  zip: '<string>',
                },
                {
                  id: '<integer>',
                  name: '<string>',
                  rates: [
                    {
                      data_name: '<string>',
                      data_value: '<string>',
                      product_code: '<string>',
                      type: '<string>',
                    },
                    {
                      data_name: '<string>',
                      data_value: '<string>',
                      product_code: '<string>',
                      type: '<string>',
                    },
                  ],
                  state: '<string>',
                  zip: '<string>',
                },
              ],
            }),
          examples: {
            'An array of locations with tax rates': {
              value: [
                {
                  id: '<integer>',
                  name: '<string>',
                  rates: [
                    {
                      data_name: '<string>',
                      data_value: '<string>',
                      product_code: '<string>',
                      type: '<string>',
                    },
                    {
                      data_name: '<string>',
                      data_value: '<string>',
                      product_code: '<string>',
                      type: '<string>',
                    },
                  ],
                  state: '<string>',
                  zip: '<string>',
                },
                {
                  id: '<integer>',
                  name: '<string>',
                  rates: [
                    {
                      data_name: '<string>',
                      data_value: '<string>',
                      product_code: '<string>',
                      type: '<string>',
                    },
                    {
                      data_name: '<string>',
                      data_value: '<string>',
                      product_code: '<string>',
                      type: '<string>',
                    },
                  ],
                  state: '<string>',
                  zip: '<string>',
                },
              ],
            },
          },
        },
      },
    },
    404: {
      description: 'No configured tax rates found. Have you added any country to your account?',
      content: {},
    },
    500: {
      description: 'Unexpected error',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.string().exactOptional().openapi({ example: '<integer>' }),
              fields: z.string().exactOptional().openapi({ example: '<string>' }),
              message: z.string().exactOptional().openapi({ example: '<string>' }),
            })
            .openapi({ required: [] }),
          examples: {
            'Unexpected error': {
              value: { code: '<integer>', fields: '<string>', message: '<string>' },
            },
          },
        },
      },
    },
  },
})
