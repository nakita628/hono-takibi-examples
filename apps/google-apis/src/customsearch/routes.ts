import { createRoute, z } from '@hono/zod-openapi'

const PromotionSchema = z
  .object({
    bodyLines: z
      .array(
        z
          .object({
            htmlTitle: z
              .string()
              .exactOptional()
              .openapi({ description: "The block object's text in HTML, if it has text." }),
            link: z
              .string()
              .exactOptional()
              .openapi({
                description: "The anchor text of the block object's link, if it has a link.",
              }),
            title: z
              .string()
              .exactOptional()
              .openapi({ description: "The block object's text, if it has text." }),
            url: z
              .string()
              .exactOptional()
              .openapi({ description: "The URL of the block object's link, if it has one." }),
          })
          .openapi({ description: 'Block object belonging to a promotion.', required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'An array of block objects for this promotion.' }),
    displayLink: z
      .string()
      .exactOptional()
      .openapi({
        description: "An abridged version of this search's result URL, e.g. www.example.com.",
      }),
    htmlTitle: z
      .string()
      .exactOptional()
      .openapi({ description: 'The title of the promotion, in HTML.' }),
    image: z
      .object({
        height: z.int32().exactOptional().openapi({ description: 'Image height in pixels.' }),
        source: z
          .string()
          .exactOptional()
          .openapi({ description: 'URL of the image for this promotion link.' }),
        width: z.int32().exactOptional().openapi({ description: 'Image width in pixels.' }),
      })
      .exactOptional()
      .openapi({ description: 'Image belonging to a promotion.', required: [] }),
    link: z.string().exactOptional().openapi({ description: 'The URL of the promotion.' }),
    title: z.string().exactOptional().openapi({ description: 'The title of the promotion.' }),
  })
  .openapi({ description: 'Promotion result.', required: [] })
  .openapi('Promotion')

const ResultSchema = z
  .object({
    cacheId: z
      .string()
      .exactOptional()
      .openapi({
        description: "Indicates the ID of Google's cached version of the search result.",
      }),
    displayLink: z
      .string()
      .exactOptional()
      .openapi({
        description: 'An abridged version of this search result’s URL, e.g. www.example.com.',
      }),
    fileFormat: z
      .string()
      .exactOptional()
      .openapi({ description: 'The file format of the search result.' }),
    formattedUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URL displayed after the snippet for each search result.' }),
    htmlFormattedUrl: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The HTML-formatted URL displayed after the snippet for each search result.',
      }),
    htmlSnippet: z
      .string()
      .exactOptional()
      .openapi({ description: 'The snippet of the search result, in HTML.' }),
    htmlTitle: z
      .string()
      .exactOptional()
      .openapi({ description: 'The title of the search result, in HTML.' }),
    image: z
      .object({
        byteSize: z
          .int32()
          .exactOptional()
          .openapi({ description: 'The size of the image, in bytes.' }),
        contextLink: z
          .string()
          .exactOptional()
          .openapi({ description: 'A URL pointing to the webpage hosting the image.' }),
        height: z
          .int32()
          .exactOptional()
          .openapi({ description: 'The height of the image, in pixels.' }),
        thumbnailHeight: z
          .int32()
          .exactOptional()
          .openapi({ description: 'The height of the thumbnail image, in pixels.' }),
        thumbnailLink: z
          .string()
          .exactOptional()
          .openapi({ description: 'A URL to the thumbnail image.' }),
        thumbnailWidth: z
          .int32()
          .exactOptional()
          .openapi({ description: 'The width of the thumbnail image, in pixels.' }),
        width: z
          .int32()
          .exactOptional()
          .openapi({ description: 'The width of the image, in pixels.' }),
      })
      .exactOptional()
      .openapi({ description: 'Image belonging to a custom search result.', required: [] }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier for the type of current object. For this API, it is `customsearch#result.`',
      }),
    labels: z
      .array(
        z
          .object({
            displayName: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'The display name of a refinement label. This is the name you should display in your user interface.',
              }),
            label_with_op: z
              .string()
              .exactOptional()
              .openapi({
                description: 'Refinement label and the associated refinement operation.',
              }),
            name: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  "The name of a refinement label, which you can use to refine searches. Don't display this in your user interface; instead, use displayName.",
              }),
          })
          .openapi({
            description: 'Refinement label associated with a custom search result.',
            required: [],
          }),
      )
      .exactOptional()
      .openapi({ description: 'Encapsulates all information about refinement labels.' }),
    link: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The full URL to which the search result is pointing, e.g. http://www.example.com/foo/bar.',
      }),
    mime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The MIME type of the search result.' }),
    pagemap: z
      .record(z.string(), z.any().openapi({ description: 'Properties of the object.' }))
      .exactOptional()
      .openapi({
        description:
          'Contains [PageMap](https://developers.google.com/custom-search/docs/structured_data#pagemaps) information for this search result.',
      }),
    snippet: z
      .string()
      .exactOptional()
      .openapi({ description: 'The snippet of the search result, in plain text.' }),
    title: z
      .string()
      .exactOptional()
      .openapi({ description: 'The title of the search result, in plain text.' }),
  })
  .openapi({ description: 'A custom search result.', required: [] })
  .openapi('Result')

const SearchSchema = z
  .object({
    context: z
      .record(z.string(), z.any().openapi({ description: 'Properties of the object.' }))
      .exactOptional()
      .openapi({
        description:
          'Metadata and refinements associated with the given search engine, including: * The name of the search engine that was used for the query. * A set of [facet objects](https://developers.google.com/custom-search/docs/refinements#create) (refinements) you can use for refining a search.',
      }),
    items: z
      .array(ResultSchema)
      .exactOptional()
      .openapi({ description: 'The current set of custom search results.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Unique identifier for the type of current object. For this API, it is customsearch#search.',
      }),
    promotions: z
      .array(PromotionSchema)
      .exactOptional()
      .openapi({
        description:
          "The set of [promotions](https://developers.google.com/custom-search/docs/promotions). Present only if the custom search engine's configuration files define any promotions for the given query.",
      }),
    queries: z
      .object({
        nextPage: z
          .array(
            z
              .object({
                count: z
                  .int32()
                  .exactOptional()
                  .openapi({ description: 'Number of search results returned in this set.' }),
                cr: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      "Restricts search results to documents originating in a particular country. You may use [Boolean operators](https://developers.google.com/custom-search/docs/json_api_reference#BooleanOrSearch) in the `cr` parameter's value. Google WebSearch determines the country of a document by analyzing the following: * The top-level domain (TLD) of the document's URL. * The geographic location of the web server's IP address. See [Country (cr) Parameter Values](https://developers.google.com/custom-search/docs/json_api_reference#countryCollections) for a list of valid values for this parameter.",
                  }),
                cx: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'The identifier of an engine created using the Programmable Search Engine [Control Panel](https://programmablesearchengine.google.com/). This is a custom property not defined in the OpenSearch spec. This parameter is **required**.',
                  }),
                dateRestrict: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Restricts results to URLs based on date. Supported values include: * `d[number]`: requests results from the specified number of past days. * `w[number]`: requests results from the specified number of past weeks. * `m[number]`: requests results from the specified number of past months. * `y[number]`: requests results from the specified number of past years.',
                  }),
                disableCnTwTranslation: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Enables or disables the [Simplified and Traditional Chinese Search](https://developers.google.com/custom-search/docs/json_api_reference#chineseSearch) feature. Supported values are: * `0`: enabled (default) * `1`: disabled',
                  }),
                exactTerms: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Identifies a phrase that all documents in the search results must contain.',
                  }),
                excludeTerms: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Identifies a word or phrase that should not appear in any documents in the search results.',
                  }),
                fileType: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      "Restricts results to files of a specified extension. Filetypes supported by Google include: * Adobe Portable Document Format (`pdf`) * Adobe PostScript (`ps`) * Lotus 1-2-3 (`wk1`, `wk2`, `wk3`, `wk4`, `wk5`, `wki`, `wks`, `wku`) * Lotus WordPro (`lwp`) * Macwrite (`mw`) * Microsoft Excel (`xls`) * Microsoft PowerPoint (`ppt`) * Microsoft Word (`doc`) * Microsoft Works (`wks`, `wps`, `wdb`) * Microsoft Write (`wri`) * Rich Text Format (`rtf`) * Shockwave Flash (`swf`) * Text (`ans`, `txt`). Additional filetypes may be added in the future. An up-to-date list can always be found in Google's [file type FAQ](https://support.google.com/webmasters/answer/35287).",
                  }),
                filter: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      "Activates or deactivates the automatic filtering of Google search results. See [Automatic Filtering](https://developers.google.com/custom-search/docs/json_api_reference#automaticFiltering) for more information about Google's search results filters. Valid values for this parameter are: * `0`: Disabled * `1`: Enabled (default) **Note**: By default, Google applies filtering to all search results to improve the quality of those results.",
                  }),
                gl: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Boosts search results whose country of origin matches the parameter value. See [Country Codes](https://developers.google.com/custom-search/docs/json_api_reference#countryCodes) for a list of valid values. Specifying a `gl` parameter value in WebSearch requests should improve the relevance of results. This is particularly true for international customers and, even more specifically, for customers in English-speaking countries other than the United States.',
                  }),
                googleHost: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Specifies the Google domain (for example, google.com, google.de, or google.fr) to which the search should be limited.',
                  }),
                highRange: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Specifies the ending value for a search range. Use `cse:lowRange` and `cse:highrange` to append an inclusive search range of `lowRange...highRange` to the query.',
                  }),
                hl: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Specifies the interface language (host language) of your user interface. Explicitly setting this parameter improves the performance and the quality of your search results. See the [Interface Languages](https://developers.google.com/custom-search/docs/json_api_reference#wsInterfaceLanguages) section of [Internationalizing Queries and Results Presentation](https://developers.google.com/custom-search/docs/json_api_reference#wsInternationalizing) for more information, and [Supported Interface Languages](https://developers.google.com/custom-search/docs/json_api_reference#interfaceLanguages) for a list of supported languages.',
                  }),
                hq: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Appends the specified query terms to the query, as if they were combined with a logical `AND` operator.',
                  }),
                imgColorType: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Restricts results to images of a specified color type. Supported values are: * `mono` (black and white) * `gray` (grayscale) * `color` (color)',
                  }),
                imgDominantColor: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Restricts results to images with a specific dominant color. Supported values are: * `red` * `orange` * `yellow` * `green` * `teal` * `blue` * `purple` * `pink` * `white` * `gray` * `black` * `brown`',
                  }),
                imgSize: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Restricts results to images of a specified size. Supported values are: * `icon` (small) * `small | medium | large | xlarge` (medium) * `xxlarge` (large) * `huge` (extra-large)',
                  }),
                imgType: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Restricts results to images of a specified type. Supported values are: * `clipart` (Clip art) * `face` (Face) * `lineart` (Line drawing) * `photo` (Photo) * `animated` (Animated) * `stock` (Stock)',
                  }),
                inputEncoding: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description: 'The character encoding supported for search requests.',
                  }),
                language: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'The language of the search results.' }),
                linkSite: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Specifies that all results should contain a link to a specific URL.',
                  }),
                lowRange: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Specifies the starting value for a search range. Use `cse:lowRange` and `cse:highrange` to append an inclusive search range of `lowRange...highRange` to the query.',
                  }),
                orTerms: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Provides additional search terms to check for in a document, where each document in the search results must contain at least one of the additional search terms. You can also use the [Boolean OR](https://developers.google.com/custom-search/docs/json_api_reference#BooleanOrSearch) query term for this type of query.',
                  }),
                outputEncoding: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'The character encoding supported for search results.' }),
                relatedSite: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Specifies that all search results should be pages that are related to the specified URL. The parameter value should be a URL.',
                  }),
                rights: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Filters based on licensing. Supported values include: * `cc_publicdomain` * `cc_attribute` * `cc_sharealike` * `cc_noncommercial` * `cc_nonderived`',
                  }),
                safe: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Specifies the [SafeSearch level](https://developers.google.com/custom-search/docs/json_api_reference#safeSearchLevels) used for filtering out adult results. This is a custom property not defined in the OpenSearch spec. Valid parameter values are: * `"off"`: Disable SafeSearch * `"active"`: Enable SafeSearch',
                  }),
                searchTerms: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'The search terms entered by the user.' }),
                searchType: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Allowed values are `web` or `image`. If unspecified, results are limited to webpages.',
                  }),
                siteSearch: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'Restricts results to URLs from a specified site.' }),
                siteSearchFilter: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Specifies whether to include or exclude results from the site named in the `sitesearch` parameter. Supported values are: * `i`: include content from site * `e`: exclude content from site',
                  }),
                sort: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Specifies that results should be sorted according to the specified expression. For example, sort by date.',
                  }),
                startIndex: z
                  .int32()
                  .exactOptional()
                  .openapi({
                    description:
                      'The index of the current set of search results into the total set of results, where the index of the first result is 1.',
                  }),
                startPage: z
                  .int32()
                  .exactOptional()
                  .openapi({
                    description:
                      'The page number of this set of results, where the page length is set by the `count` property.',
                  }),
                title: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'A description of the query.' }),
                totalResults: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description: 'Estimated number of total search results. May not be accurate.',
                  }),
              })
              .openapi({ description: 'Custom search request metadata.', required: [] }),
          )
          .exactOptional()
          .openapi({
            description: 'Metadata representing the next page of results, if applicable.',
          }),
        previousPage: z
          .array(
            z
              .object({
                count: z
                  .int32()
                  .exactOptional()
                  .openapi({ description: 'Number of search results returned in this set.' }),
                cr: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      "Restricts search results to documents originating in a particular country. You may use [Boolean operators](https://developers.google.com/custom-search/docs/json_api_reference#BooleanOrSearch) in the `cr` parameter's value. Google WebSearch determines the country of a document by analyzing the following: * The top-level domain (TLD) of the document's URL. * The geographic location of the web server's IP address. See [Country (cr) Parameter Values](https://developers.google.com/custom-search/docs/json_api_reference#countryCollections) for a list of valid values for this parameter.",
                  }),
                cx: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'The identifier of an engine created using the Programmable Search Engine [Control Panel](https://programmablesearchengine.google.com/). This is a custom property not defined in the OpenSearch spec. This parameter is **required**.',
                  }),
                dateRestrict: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Restricts results to URLs based on date. Supported values include: * `d[number]`: requests results from the specified number of past days. * `w[number]`: requests results from the specified number of past weeks. * `m[number]`: requests results from the specified number of past months. * `y[number]`: requests results from the specified number of past years.',
                  }),
                disableCnTwTranslation: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Enables or disables the [Simplified and Traditional Chinese Search](https://developers.google.com/custom-search/docs/json_api_reference#chineseSearch) feature. Supported values are: * `0`: enabled (default) * `1`: disabled',
                  }),
                exactTerms: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Identifies a phrase that all documents in the search results must contain.',
                  }),
                excludeTerms: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Identifies a word or phrase that should not appear in any documents in the search results.',
                  }),
                fileType: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      "Restricts results to files of a specified extension. Filetypes supported by Google include: * Adobe Portable Document Format (`pdf`) * Adobe PostScript (`ps`) * Lotus 1-2-3 (`wk1`, `wk2`, `wk3`, `wk4`, `wk5`, `wki`, `wks`, `wku`) * Lotus WordPro (`lwp`) * Macwrite (`mw`) * Microsoft Excel (`xls`) * Microsoft PowerPoint (`ppt`) * Microsoft Word (`doc`) * Microsoft Works (`wks`, `wps`, `wdb`) * Microsoft Write (`wri`) * Rich Text Format (`rtf`) * Shockwave Flash (`swf`) * Text (`ans`, `txt`). Additional filetypes may be added in the future. An up-to-date list can always be found in Google's [file type FAQ](https://support.google.com/webmasters/answer/35287).",
                  }),
                filter: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      "Activates or deactivates the automatic filtering of Google search results. See [Automatic Filtering](https://developers.google.com/custom-search/docs/json_api_reference#automaticFiltering) for more information about Google's search results filters. Valid values for this parameter are: * `0`: Disabled * `1`: Enabled (default) **Note**: By default, Google applies filtering to all search results to improve the quality of those results.",
                  }),
                gl: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Boosts search results whose country of origin matches the parameter value. See [Country Codes](https://developers.google.com/custom-search/docs/json_api_reference#countryCodes) for a list of valid values. Specifying a `gl` parameter value in WebSearch requests should improve the relevance of results. This is particularly true for international customers and, even more specifically, for customers in English-speaking countries other than the United States.',
                  }),
                googleHost: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Specifies the Google domain (for example, google.com, google.de, or google.fr) to which the search should be limited.',
                  }),
                highRange: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Specifies the ending value for a search range. Use `cse:lowRange` and `cse:highrange` to append an inclusive search range of `lowRange...highRange` to the query.',
                  }),
                hl: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Specifies the interface language (host language) of your user interface. Explicitly setting this parameter improves the performance and the quality of your search results. See the [Interface Languages](https://developers.google.com/custom-search/docs/json_api_reference#wsInterfaceLanguages) section of [Internationalizing Queries and Results Presentation](https://developers.google.com/custom-search/docs/json_api_reference#wsInternationalizing) for more information, and [Supported Interface Languages](https://developers.google.com/custom-search/docs/json_api_reference#interfaceLanguages) for a list of supported languages.',
                  }),
                hq: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Appends the specified query terms to the query, as if they were combined with a logical `AND` operator.',
                  }),
                imgColorType: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Restricts results to images of a specified color type. Supported values are: * `mono` (black and white) * `gray` (grayscale) * `color` (color)',
                  }),
                imgDominantColor: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Restricts results to images with a specific dominant color. Supported values are: * `red` * `orange` * `yellow` * `green` * `teal` * `blue` * `purple` * `pink` * `white` * `gray` * `black` * `brown`',
                  }),
                imgSize: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Restricts results to images of a specified size. Supported values are: * `icon` (small) * `small | medium | large | xlarge` (medium) * `xxlarge` (large) * `huge` (extra-large)',
                  }),
                imgType: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Restricts results to images of a specified type. Supported values are: * `clipart` (Clip art) * `face` (Face) * `lineart` (Line drawing) * `photo` (Photo) * `animated` (Animated) * `stock` (Stock)',
                  }),
                inputEncoding: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description: 'The character encoding supported for search requests.',
                  }),
                language: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'The language of the search results.' }),
                linkSite: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Specifies that all results should contain a link to a specific URL.',
                  }),
                lowRange: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Specifies the starting value for a search range. Use `cse:lowRange` and `cse:highrange` to append an inclusive search range of `lowRange...highRange` to the query.',
                  }),
                orTerms: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Provides additional search terms to check for in a document, where each document in the search results must contain at least one of the additional search terms. You can also use the [Boolean OR](https://developers.google.com/custom-search/docs/json_api_reference#BooleanOrSearch) query term for this type of query.',
                  }),
                outputEncoding: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'The character encoding supported for search results.' }),
                relatedSite: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Specifies that all search results should be pages that are related to the specified URL. The parameter value should be a URL.',
                  }),
                rights: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Filters based on licensing. Supported values include: * `cc_publicdomain` * `cc_attribute` * `cc_sharealike` * `cc_noncommercial` * `cc_nonderived`',
                  }),
                safe: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Specifies the [SafeSearch level](https://developers.google.com/custom-search/docs/json_api_reference#safeSearchLevels) used for filtering out adult results. This is a custom property not defined in the OpenSearch spec. Valid parameter values are: * `"off"`: Disable SafeSearch * `"active"`: Enable SafeSearch',
                  }),
                searchTerms: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'The search terms entered by the user.' }),
                searchType: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Allowed values are `web` or `image`. If unspecified, results are limited to webpages.',
                  }),
                siteSearch: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'Restricts results to URLs from a specified site.' }),
                siteSearchFilter: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Specifies whether to include or exclude results from the site named in the `sitesearch` parameter. Supported values are: * `i`: include content from site * `e`: exclude content from site',
                  }),
                sort: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Specifies that results should be sorted according to the specified expression. For example, sort by date.',
                  }),
                startIndex: z
                  .int32()
                  .exactOptional()
                  .openapi({
                    description:
                      'The index of the current set of search results into the total set of results, where the index of the first result is 1.',
                  }),
                startPage: z
                  .int32()
                  .exactOptional()
                  .openapi({
                    description:
                      'The page number of this set of results, where the page length is set by the `count` property.',
                  }),
                title: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'A description of the query.' }),
                totalResults: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description: 'Estimated number of total search results. May not be accurate.',
                  }),
              })
              .openapi({ description: 'Custom search request metadata.', required: [] }),
          )
          .exactOptional()
          .openapi({
            description: 'Metadata representing the previous page of results, if applicable.',
          }),
        request: z
          .array(
            z
              .object({
                count: z
                  .int32()
                  .exactOptional()
                  .openapi({ description: 'Number of search results returned in this set.' }),
                cr: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      "Restricts search results to documents originating in a particular country. You may use [Boolean operators](https://developers.google.com/custom-search/docs/json_api_reference#BooleanOrSearch) in the `cr` parameter's value. Google WebSearch determines the country of a document by analyzing the following: * The top-level domain (TLD) of the document's URL. * The geographic location of the web server's IP address. See [Country (cr) Parameter Values](https://developers.google.com/custom-search/docs/json_api_reference#countryCollections) for a list of valid values for this parameter.",
                  }),
                cx: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'The identifier of an engine created using the Programmable Search Engine [Control Panel](https://programmablesearchengine.google.com/). This is a custom property not defined in the OpenSearch spec. This parameter is **required**.',
                  }),
                dateRestrict: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Restricts results to URLs based on date. Supported values include: * `d[number]`: requests results from the specified number of past days. * `w[number]`: requests results from the specified number of past weeks. * `m[number]`: requests results from the specified number of past months. * `y[number]`: requests results from the specified number of past years.',
                  }),
                disableCnTwTranslation: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Enables or disables the [Simplified and Traditional Chinese Search](https://developers.google.com/custom-search/docs/json_api_reference#chineseSearch) feature. Supported values are: * `0`: enabled (default) * `1`: disabled',
                  }),
                exactTerms: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Identifies a phrase that all documents in the search results must contain.',
                  }),
                excludeTerms: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Identifies a word or phrase that should not appear in any documents in the search results.',
                  }),
                fileType: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      "Restricts results to files of a specified extension. Filetypes supported by Google include: * Adobe Portable Document Format (`pdf`) * Adobe PostScript (`ps`) * Lotus 1-2-3 (`wk1`, `wk2`, `wk3`, `wk4`, `wk5`, `wki`, `wks`, `wku`) * Lotus WordPro (`lwp`) * Macwrite (`mw`) * Microsoft Excel (`xls`) * Microsoft PowerPoint (`ppt`) * Microsoft Word (`doc`) * Microsoft Works (`wks`, `wps`, `wdb`) * Microsoft Write (`wri`) * Rich Text Format (`rtf`) * Shockwave Flash (`swf`) * Text (`ans`, `txt`). Additional filetypes may be added in the future. An up-to-date list can always be found in Google's [file type FAQ](https://support.google.com/webmasters/answer/35287).",
                  }),
                filter: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      "Activates or deactivates the automatic filtering of Google search results. See [Automatic Filtering](https://developers.google.com/custom-search/docs/json_api_reference#automaticFiltering) for more information about Google's search results filters. Valid values for this parameter are: * `0`: Disabled * `1`: Enabled (default) **Note**: By default, Google applies filtering to all search results to improve the quality of those results.",
                  }),
                gl: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Boosts search results whose country of origin matches the parameter value. See [Country Codes](https://developers.google.com/custom-search/docs/json_api_reference#countryCodes) for a list of valid values. Specifying a `gl` parameter value in WebSearch requests should improve the relevance of results. This is particularly true for international customers and, even more specifically, for customers in English-speaking countries other than the United States.',
                  }),
                googleHost: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Specifies the Google domain (for example, google.com, google.de, or google.fr) to which the search should be limited.',
                  }),
                highRange: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Specifies the ending value for a search range. Use `cse:lowRange` and `cse:highrange` to append an inclusive search range of `lowRange...highRange` to the query.',
                  }),
                hl: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Specifies the interface language (host language) of your user interface. Explicitly setting this parameter improves the performance and the quality of your search results. See the [Interface Languages](https://developers.google.com/custom-search/docs/json_api_reference#wsInterfaceLanguages) section of [Internationalizing Queries and Results Presentation](https://developers.google.com/custom-search/docs/json_api_reference#wsInternationalizing) for more information, and [Supported Interface Languages](https://developers.google.com/custom-search/docs/json_api_reference#interfaceLanguages) for a list of supported languages.',
                  }),
                hq: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Appends the specified query terms to the query, as if they were combined with a logical `AND` operator.',
                  }),
                imgColorType: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Restricts results to images of a specified color type. Supported values are: * `mono` (black and white) * `gray` (grayscale) * `color` (color)',
                  }),
                imgDominantColor: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Restricts results to images with a specific dominant color. Supported values are: * `red` * `orange` * `yellow` * `green` * `teal` * `blue` * `purple` * `pink` * `white` * `gray` * `black` * `brown`',
                  }),
                imgSize: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Restricts results to images of a specified size. Supported values are: * `icon` (small) * `small | medium | large | xlarge` (medium) * `xxlarge` (large) * `huge` (extra-large)',
                  }),
                imgType: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Restricts results to images of a specified type. Supported values are: * `clipart` (Clip art) * `face` (Face) * `lineart` (Line drawing) * `photo` (Photo) * `animated` (Animated) * `stock` (Stock)',
                  }),
                inputEncoding: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description: 'The character encoding supported for search requests.',
                  }),
                language: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'The language of the search results.' }),
                linkSite: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Specifies that all results should contain a link to a specific URL.',
                  }),
                lowRange: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Specifies the starting value for a search range. Use `cse:lowRange` and `cse:highrange` to append an inclusive search range of `lowRange...highRange` to the query.',
                  }),
                orTerms: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Provides additional search terms to check for in a document, where each document in the search results must contain at least one of the additional search terms. You can also use the [Boolean OR](https://developers.google.com/custom-search/docs/json_api_reference#BooleanOrSearch) query term for this type of query.',
                  }),
                outputEncoding: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'The character encoding supported for search results.' }),
                relatedSite: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Specifies that all search results should be pages that are related to the specified URL. The parameter value should be a URL.',
                  }),
                rights: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Filters based on licensing. Supported values include: * `cc_publicdomain` * `cc_attribute` * `cc_sharealike` * `cc_noncommercial` * `cc_nonderived`',
                  }),
                safe: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Specifies the [SafeSearch level](https://developers.google.com/custom-search/docs/json_api_reference#safeSearchLevels) used for filtering out adult results. This is a custom property not defined in the OpenSearch spec. Valid parameter values are: * `"off"`: Disable SafeSearch * `"active"`: Enable SafeSearch',
                  }),
                searchTerms: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'The search terms entered by the user.' }),
                searchType: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Allowed values are `web` or `image`. If unspecified, results are limited to webpages.',
                  }),
                siteSearch: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'Restricts results to URLs from a specified site.' }),
                siteSearchFilter: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Specifies whether to include or exclude results from the site named in the `sitesearch` parameter. Supported values are: * `i`: include content from site * `e`: exclude content from site',
                  }),
                sort: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Specifies that results should be sorted according to the specified expression. For example, sort by date.',
                  }),
                startIndex: z
                  .int32()
                  .exactOptional()
                  .openapi({
                    description:
                      'The index of the current set of search results into the total set of results, where the index of the first result is 1.',
                  }),
                startPage: z
                  .int32()
                  .exactOptional()
                  .openapi({
                    description:
                      'The page number of this set of results, where the page length is set by the `count` property.',
                  }),
                title: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'A description of the query.' }),
                totalResults: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description: 'Estimated number of total search results. May not be accurate.',
                  }),
              })
              .openapi({ description: 'Custom search request metadata.', required: [] }),
          )
          .exactOptional()
          .openapi({ description: 'Metadata representing the current request.' }),
      })
      .exactOptional()
      .openapi({
        description: 'Query metadata for the previous, current, and next pages of results.',
        required: [],
      }),
    searchInformation: z
      .object({
        formattedSearchTime: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The time taken for the server to return search results, formatted according to locale style.',
          }),
        formattedTotalResults: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The total number of search results, formatted according to locale style.',
          }),
        searchTime: z
          .float64()
          .exactOptional()
          .openapi({ description: 'The time taken for the server to return search results.' }),
        totalResults: z
          .string()
          .exactOptional()
          .openapi({ description: 'The total number of search results returned by the query.' }),
      })
      .exactOptional()
      .openapi({ description: 'Metadata about a search operation.', required: [] }),
    spelling: z
      .object({
        correctedQuery: z.string().exactOptional().openapi({ description: 'The corrected query.' }),
        htmlCorrectedQuery: z
          .string()
          .exactOptional()
          .openapi({ description: 'The corrected query, formatted in HTML.' }),
      })
      .exactOptional()
      .openapi({ description: 'Spell correction information for a query.', required: [] }),
    url: z
      .object({
        template: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The actual [OpenSearch template](http://www.opensearch.org/specifications/opensearch/1.1#opensearch_url_template_syntax) for this API.',
          }),
        type: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The MIME type of the OpenSearch URL template for the Custom Search JSON API.',
          }),
      })
      .exactOptional()
      .openapi({ description: 'OpenSearch template and URL.', required: [] }),
  })
  .openapi({ description: 'Response to a custom search request.', required: [] })
  .openapi('Search')

const XgafvParamsSchema = z
  .enum(['1', '2'])
  .exactOptional()
  .openapi({
    param: {
      description: 'V1 error format.',
      in: 'query',
      name: '$.xgafv',
      schema: { enum: ['1', '2'], type: 'string' },
      required: false,
    },
  })

const AccessTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth access token.',
      in: 'query',
      name: 'access_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const AltParamsSchema = z
  .enum(['json', 'media', 'proto'])
  .exactOptional()
  .openapi({
    param: {
      description: 'Data format for response.',
      in: 'query',
      name: 'alt',
      schema: { enum: ['json', 'media', 'proto'], type: 'string' },
      required: false,
    },
  })

const CallbackParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'JSONP',
      in: 'query',
      name: 'callback',
      schema: { type: 'string' },
      required: false,
    },
  })

const FieldsParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Selector specifying which fields to include in a partial response.',
      in: 'query',
      name: 'fields',
      schema: { type: 'string' },
      required: false,
    },
  })

const KeyParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.',
      in: 'query',
      name: 'key',
      schema: { type: 'string' },
      required: false,
    },
  })

const OauthTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth 2.0 token for the current user.',
      in: 'query',
      name: 'oauth_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const PrettyPrintParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: 'Returns response with indentations and line breaks.',
      in: 'query',
      name: 'prettyPrint',
      schema: { type: 'boolean' },
      required: false,
    },
  })

const QuotaUserParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.',
      in: 'query',
      name: 'quotaUser',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadTypeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Legacy upload protocol for media (e.g. "media", "multipart").',
      in: 'query',
      name: 'uploadType',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadProtocolParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Upload protocol for media (e.g. "raw", "multipart").',
      in: 'query',
      name: 'upload_protocol',
      schema: { type: 'string' },
      required: false,
    },
  })

export const getCustomsearchV1Route = createRoute({
  method: 'get',
  path: '/customsearch/v1',
  tags: ['cse'],
  description:
    'Returns metadata about the search performed, metadata about the engine used for the search, and the search results.',
  operationId: 'search.cse.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      c2coff: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Enables or disables [Simplified and Traditional Chinese Search](https://developers.google.com/custom-search/docs/json_api_reference#chineseSearch). The default value for this parameter is 0 (zero), meaning that the feature is enabled. Supported values are: * `1`: Disabled * `0`: Enabled (default)',
            in: 'query',
            name: 'c2coff',
            schema: { type: 'string' },
            required: false,
          },
        }),
      cr: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Restricts search results to documents originating in a particular country. You may use [Boolean operators](https://developers.google.com/custom-search/docs/json_api_reference#booleanOperators) in the cr parameter's value. Google Search determines the country of a document by analyzing: * the top-level domain (TLD) of the document's URL * the geographic location of the Web server's IP address See the [Country Parameter Values](https://developers.google.com/custom-search/docs/json_api_reference#countryCollections) page for a list of valid values for this parameter.",
            in: 'query',
            name: 'cr',
            schema: { type: 'string' },
            required: false,
          },
        }),
      cx: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Programmable Search Engine ID to use for this request.',
            in: 'query',
            name: 'cx',
            schema: { type: 'string' },
            required: false,
          },
        }),
      dateRestrict: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Restricts results to URLs based on date. Supported values include: * `d[number]`: requests results from the specified number of past days. * `w[number]`: requests results from the specified number of past weeks. * `m[number]`: requests results from the specified number of past months. * `y[number]`: requests results from the specified number of past years.',
            in: 'query',
            name: 'dateRestrict',
            schema: { type: 'string' },
            required: false,
          },
        }),
      exactTerms: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Identifies a phrase that all documents in the search results must contain.',
            in: 'query',
            name: 'exactTerms',
            schema: { type: 'string' },
            required: false,
          },
        }),
      excludeTerms: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Identifies a word or phrase that should not appear in any documents in the search results.',
            in: 'query',
            name: 'excludeTerms',
            schema: { type: 'string' },
            required: false,
          },
        }),
      fileType: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Restricts results to files of a specified extension. A list of file types indexable by Google can be found in Search Console [Help Center](https://support.google.com/webmasters/answer/35287).',
            in: 'query',
            name: 'fileType',
            schema: { type: 'string' },
            required: false,
          },
        }),
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Controls turning on or off the duplicate content filter. * See [Automatic Filtering](https://developers.google.com/custom-search/docs/json_api_reference#automaticFiltering) for more information about Google's search results filters. Note that host crowding filtering applies only to multi-site searches. * By default, Google applies filtering to all search results to improve the quality of those results. Acceptable values are: * `0`: Turns off duplicate content filter. * `1`: Turns on duplicate content filter.",
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      gl: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Geolocation of end user. * The `gl` parameter value is a two-letter country code. The `gl` parameter boosts search results whose country of origin matches the parameter value. See the [Country Codes](https://developers.google.com/custom-search/docs/json_api_reference#countryCodes) page for a list of valid values. * Specifying a `gl` parameter value should lead to more relevant results. This is particularly true for international customers and, even more specifically, for customers in English- speaking countries other than the United States.',
            in: 'query',
            name: 'gl',
            schema: { type: 'string' },
            required: false,
          },
        }),
      googlehost: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              '**Deprecated**. Use the `gl` parameter for a similar effect. The local Google domain (for example, google.com, google.de, or google.fr) to use to perform the search.',
            in: 'query',
            name: 'googlehost',
            schema: { type: 'string' },
            required: false,
          },
        }),
      highRange: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specifies the ending value for a search range. * Use `lowRange` and `highRange` to append an inclusive search range of `lowRange...highRange` to the query.',
            in: 'query',
            name: 'highRange',
            schema: { type: 'string' },
            required: false,
          },
        }),
      hl: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Sets the user interface language. * Explicitly setting this parameter improves the performance and the quality of your search results. * See the [Interface Languages](https://developers.google.com/custom-search/docs/json_api_reference#wsInterfaceLanguages) section of [Internationalizing Queries and Results Presentation](https://developers.google.com/custom-search/docs/json_api_reference#wsInternationalizing) for more information, and [Supported Interface Languages](https://developers.google.com/custom-search/docs/json_api_reference#interfaceLanguages) for a list of supported languages.',
            in: 'query',
            name: 'hl',
            schema: { type: 'string' },
            required: false,
          },
        }),
      hq: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Appends the specified query terms to the query, as if they were combined with a logical AND operator.',
            in: 'query',
            name: 'hq',
            schema: { type: 'string' },
            required: false,
          },
        }),
      imgColorType: z
        .enum(['imgColorTypeUndefined', 'mono', 'gray', 'color', 'trans'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Returns black and white, grayscale, transparent, or color images. Acceptable values are: * `"color"` * `"gray"` * `"mono"`: black and white * `"trans"`: transparent background',
            in: 'query',
            name: 'imgColorType',
            schema: {
              enum: ['imgColorTypeUndefined', 'mono', 'gray', 'color', 'trans'],
              type: 'string',
            },
            required: false,
          },
        }),
      imgDominantColor: z
        .enum([
          'imgDominantColorUndefined',
          'black',
          'blue',
          'brown',
          'gray',
          'green',
          'orange',
          'pink',
          'purple',
          'red',
          'teal',
          'white',
          'yellow',
        ])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Returns images of a specific dominant color. Acceptable values are: * `"black"` * `"blue"` * `"brown"` * `"gray"` * `"green"` * `"orange"` * `"pink"` * `"purple"` * `"red"` * `"teal"` * `"white"` * `"yellow"`',
            in: 'query',
            name: 'imgDominantColor',
            schema: {
              enum: [
                'imgDominantColorUndefined',
                'black',
                'blue',
                'brown',
                'gray',
                'green',
                'orange',
                'pink',
                'purple',
                'red',
                'teal',
                'white',
                'yellow',
              ],
              type: 'string',
            },
            required: false,
          },
        }),
      imgSize: z
        .enum(['imgSizeUndefined', 'HUGE', 'ICON', 'LARGE', 'MEDIUM', 'SMALL', 'XLARGE', 'XXLARGE'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Returns images of a specified size. Acceptable values are: * `"huge"` * `"icon"` * `"large"` * `"medium"` * `"small"` * `"xlarge"` * `"xxlarge"`',
            in: 'query',
            name: 'imgSize',
            schema: {
              enum: [
                'imgSizeUndefined',
                'HUGE',
                'ICON',
                'LARGE',
                'MEDIUM',
                'SMALL',
                'XLARGE',
                'XXLARGE',
              ],
              type: 'string',
            },
            required: false,
          },
        }),
      imgType: z
        .enum(['imgTypeUndefined', 'clipart', 'face', 'lineart', 'stock', 'photo', 'animated'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Returns images of a type. Acceptable values are: * `"clipart"` * `"face"` * `"lineart"` * `"stock"` * `"photo"` * `"animated"`',
            in: 'query',
            name: 'imgType',
            schema: {
              enum: [
                'imgTypeUndefined',
                'clipart',
                'face',
                'lineart',
                'stock',
                'photo',
                'animated',
              ],
              type: 'string',
            },
            required: false,
          },
        }),
      linkSite: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specifies that all search results should contain a link to a particular URL.',
            in: 'query',
            name: 'linkSite',
            schema: { type: 'string' },
            required: false,
          },
        }),
      lowRange: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specifies the starting value for a search range. Use `lowRange` and `highRange` to append an inclusive search range of `lowRange...highRange` to the query.',
            in: 'query',
            name: 'lowRange',
            schema: { type: 'string' },
            required: false,
          },
        }),
      lr: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Restricts the search to documents written in a particular language (e.g., `lr=lang_ja`). Acceptable values are: * `"lang_ar"`: Arabic * `"lang_bg"`: Bulgarian * `"lang_ca"`: Catalan * `"lang_cs"`: Czech * `"lang_da"`: Danish * `"lang_de"`: German * `"lang_el"`: Greek * `"lang_en"`: English * `"lang_es"`: Spanish * `"lang_et"`: Estonian * `"lang_fi"`: Finnish * `"lang_fr"`: French * `"lang_hr"`: Croatian * `"lang_hu"`: Hungarian * `"lang_id"`: Indonesian * `"lang_is"`: Icelandic * `"lang_it"`: Italian * `"lang_iw"`: Hebrew * `"lang_ja"`: Japanese * `"lang_ko"`: Korean * `"lang_lt"`: Lithuanian * `"lang_lv"`: Latvian * `"lang_nl"`: Dutch * `"lang_no"`: Norwegian * `"lang_pl"`: Polish * `"lang_pt"`: Portuguese * `"lang_ro"`: Romanian * `"lang_ru"`: Russian * `"lang_sk"`: Slovak * `"lang_sl"`: Slovenian * `"lang_sr"`: Serbian * `"lang_sv"`: Swedish * `"lang_tr"`: Turkish * `"lang_zh-CN"`: Chinese (Simplified) * `"lang_zh-TW"`: Chinese (Traditional)',
            in: 'query',
            name: 'lr',
            schema: { type: 'string' },
            required: false,
          },
        }),
      num: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Number of search results to return. * Valid values are integers between 1 and 10, inclusive.',
            in: 'query',
            name: 'num',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      orTerms: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Provides additional search terms to check for in a document, where each document in the search results must contain at least one of the additional search terms.',
            in: 'query',
            name: 'orTerms',
            schema: { type: 'string' },
            required: false,
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Query',
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            required: false,
          },
        }),
      relatedSite: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specifies that all search results should be pages that are related to the specified URL.',
            in: 'query',
            name: 'relatedSite',
            schema: { type: 'string' },
            required: false,
          },
        }),
      rights: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filters based on licensing. Supported values include: `cc_publicdomain`, `cc_attribute`, `cc_sharealike`, `cc_noncommercial`, `cc_nonderived` and combinations of these. See [typical combinations](https://wiki.creativecommons.org/wiki/CC_Search_integration).',
            in: 'query',
            name: 'rights',
            schema: { type: 'string' },
            required: false,
          },
        }),
      safe: z
        .enum(['safeUndefined', 'active', 'high', 'medium', 'off'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Search safety level. Acceptable values are: * `"active"`: Enables SafeSearch filtering. * `"off"`: Disables SafeSearch filtering. (default)',
            in: 'query',
            name: 'safe',
            schema: { enum: ['safeUndefined', 'active', 'high', 'medium', 'off'], type: 'string' },
            required: false,
          },
        }),
      searchType: z
        .enum(['searchTypeUndefined', 'image'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specifies the search type: `image`. If unspecified, results are limited to webpages. Acceptable values are: * `"image"`: custom image search.',
            in: 'query',
            name: 'searchType',
            schema: { enum: ['searchTypeUndefined', 'image'], type: 'string' },
            required: false,
          },
        }),
      siteSearch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specifies a given site which should always be included or excluded from results (see `siteSearchFilter` parameter, below).',
            in: 'query',
            name: 'siteSearch',
            schema: { type: 'string' },
            required: false,
          },
        }),
      siteSearchFilter: z
        .enum(['siteSearchFilterUndefined', 'e', 'i'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Controls whether to include or exclude results from the site named in the `siteSearch` parameter. Acceptable values are: * `"e"`: exclude * `"i"`: include',
            in: 'query',
            name: 'siteSearchFilter',
            schema: { enum: ['siteSearchFilterUndefined', 'e', 'i'], type: 'string' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The sort expression to apply to the results. The sort parameter specifies that the results be sorted according to the specified expression i.e. sort by date. [Example: sort=date](https://developers.google.com/custom-search/docs/structured_search#sort-by-attribute).',
            in: 'query',
            name: 'sort',
            schema: { type: 'string' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The index of the first result to return. The default number of results per page is 10, so `&start=11` would start at the top of the second page of results. **Note**: The JSON API will never return more than 100 results, even if more than 100 documents match the query, so setting the sum of `start + num` to a number greater than 100 will produce an error. Also note that the maximum value for `num` is 10.',
            in: 'query',
            name: 'start',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SearchSchema } },
    },
  },
})

export const getCustomsearchV1SiterestrictRoute = createRoute({
  method: 'get',
  path: '/customsearch/v1/siterestrict',
  tags: ['cse'],
  description:
    'Returns metadata about the search performed, metadata about the engine used for the search, and the search results. Uses a small set of url patterns.',
  operationId: 'search.cse.siterestrict.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      c2coff: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Enables or disables [Simplified and Traditional Chinese Search](https://developers.google.com/custom-search/docs/json_api_reference#chineseSearch). The default value for this parameter is 0 (zero), meaning that the feature is enabled. Supported values are: * `1`: Disabled * `0`: Enabled (default)',
            in: 'query',
            name: 'c2coff',
            schema: { type: 'string' },
            required: false,
          },
        }),
      cr: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Restricts search results to documents originating in a particular country. You may use [Boolean operators](https://developers.google.com/custom-search/docs/json_api_reference#booleanOperators) in the cr parameter's value. Google Search determines the country of a document by analyzing: * the top-level domain (TLD) of the document's URL * the geographic location of the Web server's IP address See the [Country Parameter Values](https://developers.google.com/custom-search/docs/json_api_reference#countryCollections) page for a list of valid values for this parameter.",
            in: 'query',
            name: 'cr',
            schema: { type: 'string' },
            required: false,
          },
        }),
      cx: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Programmable Search Engine ID to use for this request.',
            in: 'query',
            name: 'cx',
            schema: { type: 'string' },
            required: false,
          },
        }),
      dateRestrict: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Restricts results to URLs based on date. Supported values include: * `d[number]`: requests results from the specified number of past days. * `w[number]`: requests results from the specified number of past weeks. * `m[number]`: requests results from the specified number of past months. * `y[number]`: requests results from the specified number of past years.',
            in: 'query',
            name: 'dateRestrict',
            schema: { type: 'string' },
            required: false,
          },
        }),
      exactTerms: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Identifies a phrase that all documents in the search results must contain.',
            in: 'query',
            name: 'exactTerms',
            schema: { type: 'string' },
            required: false,
          },
        }),
      excludeTerms: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Identifies a word or phrase that should not appear in any documents in the search results.',
            in: 'query',
            name: 'excludeTerms',
            schema: { type: 'string' },
            required: false,
          },
        }),
      fileType: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Restricts results to files of a specified extension. A list of file types indexable by Google can be found in Search Console [Help Center](https://support.google.com/webmasters/answer/35287).',
            in: 'query',
            name: 'fileType',
            schema: { type: 'string' },
            required: false,
          },
        }),
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Controls turning on or off the duplicate content filter. * See [Automatic Filtering](https://developers.google.com/custom-search/docs/json_api_reference#automaticFiltering) for more information about Google's search results filters. Note that host crowding filtering applies only to multi-site searches. * By default, Google applies filtering to all search results to improve the quality of those results. Acceptable values are: * `0`: Turns off duplicate content filter. * `1`: Turns on duplicate content filter.",
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      gl: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Geolocation of end user. * The `gl` parameter value is a two-letter country code. The `gl` parameter boosts search results whose country of origin matches the parameter value. See the [Country Codes](https://developers.google.com/custom-search/docs/json_api_reference#countryCodes) page for a list of valid values. * Specifying a `gl` parameter value should lead to more relevant results. This is particularly true for international customers and, even more specifically, for customers in English- speaking countries other than the United States.',
            in: 'query',
            name: 'gl',
            schema: { type: 'string' },
            required: false,
          },
        }),
      googlehost: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              '**Deprecated**. Use the `gl` parameter for a similar effect. The local Google domain (for example, google.com, google.de, or google.fr) to use to perform the search.',
            in: 'query',
            name: 'googlehost',
            schema: { type: 'string' },
            required: false,
          },
        }),
      highRange: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specifies the ending value for a search range. * Use `lowRange` and `highRange` to append an inclusive search range of `lowRange...highRange` to the query.',
            in: 'query',
            name: 'highRange',
            schema: { type: 'string' },
            required: false,
          },
        }),
      hl: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Sets the user interface language. * Explicitly setting this parameter improves the performance and the quality of your search results. * See the [Interface Languages](https://developers.google.com/custom-search/docs/json_api_reference#wsInterfaceLanguages) section of [Internationalizing Queries and Results Presentation](https://developers.google.com/custom-search/docs/json_api_reference#wsInternationalizing) for more information, and [Supported Interface Languages](https://developers.google.com/custom-search/docs/json_api_reference#interfaceLanguages) for a list of supported languages.',
            in: 'query',
            name: 'hl',
            schema: { type: 'string' },
            required: false,
          },
        }),
      hq: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Appends the specified query terms to the query, as if they were combined with a logical AND operator.',
            in: 'query',
            name: 'hq',
            schema: { type: 'string' },
            required: false,
          },
        }),
      imgColorType: z
        .enum(['imgColorTypeUndefined', 'mono', 'gray', 'color', 'trans'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Returns black and white, grayscale, transparent, or color images. Acceptable values are: * `"color"` * `"gray"` * `"mono"`: black and white * `"trans"`: transparent background',
            in: 'query',
            name: 'imgColorType',
            schema: {
              enum: ['imgColorTypeUndefined', 'mono', 'gray', 'color', 'trans'],
              type: 'string',
            },
            required: false,
          },
        }),
      imgDominantColor: z
        .enum([
          'imgDominantColorUndefined',
          'black',
          'blue',
          'brown',
          'gray',
          'green',
          'orange',
          'pink',
          'purple',
          'red',
          'teal',
          'white',
          'yellow',
        ])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Returns images of a specific dominant color. Acceptable values are: * `"black"` * `"blue"` * `"brown"` * `"gray"` * `"green"` * `"orange"` * `"pink"` * `"purple"` * `"red"` * `"teal"` * `"white"` * `"yellow"`',
            in: 'query',
            name: 'imgDominantColor',
            schema: {
              enum: [
                'imgDominantColorUndefined',
                'black',
                'blue',
                'brown',
                'gray',
                'green',
                'orange',
                'pink',
                'purple',
                'red',
                'teal',
                'white',
                'yellow',
              ],
              type: 'string',
            },
            required: false,
          },
        }),
      imgSize: z
        .enum(['imgSizeUndefined', 'HUGE', 'ICON', 'LARGE', 'MEDIUM', 'SMALL', 'XLARGE', 'XXLARGE'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Returns images of a specified size. Acceptable values are: * `"huge"` * `"icon"` * `"large"` * `"medium"` * `"small"` * `"xlarge"` * `"xxlarge"`',
            in: 'query',
            name: 'imgSize',
            schema: {
              enum: [
                'imgSizeUndefined',
                'HUGE',
                'ICON',
                'LARGE',
                'MEDIUM',
                'SMALL',
                'XLARGE',
                'XXLARGE',
              ],
              type: 'string',
            },
            required: false,
          },
        }),
      imgType: z
        .enum(['imgTypeUndefined', 'clipart', 'face', 'lineart', 'stock', 'photo', 'animated'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Returns images of a type. Acceptable values are: * `"clipart"` * `"face"` * `"lineart"` * `"stock"` * `"photo"` * `"animated"`',
            in: 'query',
            name: 'imgType',
            schema: {
              enum: [
                'imgTypeUndefined',
                'clipart',
                'face',
                'lineart',
                'stock',
                'photo',
                'animated',
              ],
              type: 'string',
            },
            required: false,
          },
        }),
      linkSite: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specifies that all search results should contain a link to a particular URL.',
            in: 'query',
            name: 'linkSite',
            schema: { type: 'string' },
            required: false,
          },
        }),
      lowRange: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specifies the starting value for a search range. Use `lowRange` and `highRange` to append an inclusive search range of `lowRange...highRange` to the query.',
            in: 'query',
            name: 'lowRange',
            schema: { type: 'string' },
            required: false,
          },
        }),
      lr: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Restricts the search to documents written in a particular language (e.g., `lr=lang_ja`). Acceptable values are: * `"lang_ar"`: Arabic * `"lang_bg"`: Bulgarian * `"lang_ca"`: Catalan * `"lang_cs"`: Czech * `"lang_da"`: Danish * `"lang_de"`: German * `"lang_el"`: Greek * `"lang_en"`: English * `"lang_es"`: Spanish * `"lang_et"`: Estonian * `"lang_fi"`: Finnish * `"lang_fr"`: French * `"lang_hr"`: Croatian * `"lang_hu"`: Hungarian * `"lang_id"`: Indonesian * `"lang_is"`: Icelandic * `"lang_it"`: Italian * `"lang_iw"`: Hebrew * `"lang_ja"`: Japanese * `"lang_ko"`: Korean * `"lang_lt"`: Lithuanian * `"lang_lv"`: Latvian * `"lang_nl"`: Dutch * `"lang_no"`: Norwegian * `"lang_pl"`: Polish * `"lang_pt"`: Portuguese * `"lang_ro"`: Romanian * `"lang_ru"`: Russian * `"lang_sk"`: Slovak * `"lang_sl"`: Slovenian * `"lang_sr"`: Serbian * `"lang_sv"`: Swedish * `"lang_tr"`: Turkish * `"lang_zh-CN"`: Chinese (Simplified) * `"lang_zh-TW"`: Chinese (Traditional)',
            in: 'query',
            name: 'lr',
            schema: { type: 'string' },
            required: false,
          },
        }),
      num: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Number of search results to return. * Valid values are integers between 1 and 10, inclusive.',
            in: 'query',
            name: 'num',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      orTerms: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Provides additional search terms to check for in a document, where each document in the search results must contain at least one of the additional search terms.',
            in: 'query',
            name: 'orTerms',
            schema: { type: 'string' },
            required: false,
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Query',
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            required: false,
          },
        }),
      relatedSite: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specifies that all search results should be pages that are related to the specified URL.',
            in: 'query',
            name: 'relatedSite',
            schema: { type: 'string' },
            required: false,
          },
        }),
      rights: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filters based on licensing. Supported values include: `cc_publicdomain`, `cc_attribute`, `cc_sharealike`, `cc_noncommercial`, `cc_nonderived` and combinations of these. See [typical combinations](https://wiki.creativecommons.org/wiki/CC_Search_integration).',
            in: 'query',
            name: 'rights',
            schema: { type: 'string' },
            required: false,
          },
        }),
      safe: z
        .enum(['safeUndefined', 'active', 'high', 'medium', 'off'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Search safety level. Acceptable values are: * `"active"`: Enables SafeSearch filtering. * `"off"`: Disables SafeSearch filtering. (default)',
            in: 'query',
            name: 'safe',
            schema: { enum: ['safeUndefined', 'active', 'high', 'medium', 'off'], type: 'string' },
            required: false,
          },
        }),
      searchType: z
        .enum(['searchTypeUndefined', 'image'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specifies the search type: `image`. If unspecified, results are limited to webpages. Acceptable values are: * `"image"`: custom image search.',
            in: 'query',
            name: 'searchType',
            schema: { enum: ['searchTypeUndefined', 'image'], type: 'string' },
            required: false,
          },
        }),
      siteSearch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specifies a given site which should always be included or excluded from results (see `siteSearchFilter` parameter, below).',
            in: 'query',
            name: 'siteSearch',
            schema: { type: 'string' },
            required: false,
          },
        }),
      siteSearchFilter: z
        .enum(['siteSearchFilterUndefined', 'e', 'i'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Controls whether to include or exclude results from the site named in the `siteSearch` parameter. Acceptable values are: * `"e"`: exclude * `"i"`: include',
            in: 'query',
            name: 'siteSearchFilter',
            schema: { enum: ['siteSearchFilterUndefined', 'e', 'i'], type: 'string' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The sort expression to apply to the results. The sort parameter specifies that the results be sorted according to the specified expression i.e. sort by date. [Example: sort=date](https://developers.google.com/custom-search/docs/structured_search#sort-by-attribute).',
            in: 'query',
            name: 'sort',
            schema: { type: 'string' },
            required: false,
          },
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The index of the first result to return. The default number of results per page is 10, so `&start=11` would start at the top of the second page of results. **Note**: The JSON API will never return more than 100 results, even if more than 100 documents match the query, so setting the sum of `start + num` to a number greater than 100 will produce an error. Also note that the maximum value for `num` is 10.',
            in: 'query',
            name: 'start',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SearchSchema } },
    },
  },
})
