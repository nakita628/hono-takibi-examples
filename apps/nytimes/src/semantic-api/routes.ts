import { createRoute, z } from '@hono/zod-openapi'

const ConceptRelationSchema = z
  .object({
    concept_created: z.string().exactOptional(),
    concept_id: z.int().exactOptional(),
    concept_name: z.string().exactOptional(),
    concept_status: z.string().exactOptional(),
    concept_type: z.string().exactOptional(),
    concept_updated: z.string().exactOptional(),
    is_times_tag: z.int().exactOptional(),
    vernacular: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ConceptRelation')

const ConceptSchema = z
  .object({
    ancestors: z.array(ConceptRelationSchema).exactOptional(),
    article_list: z
      .object({
        results: z
          .array(
            z
              .object({
                body: z.string().exactOptional(),
                byline: z.string().exactOptional(),
                concepts: z
                  .object({
                    nytd_des: z.array(z.string()).exactOptional(),
                    nytd_org: z.array(z.string()).exactOptional(),
                    nytd_per: z.array(z.string()).exactOptional(),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
                date: z.string().exactOptional(),
                document_type: z.string().exactOptional(),
                title: z.string().exactOptional(),
                type_of_material: z.string().exactOptional(),
                url: z.string().exactOptional(),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
        total: z.int().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    combinations: z
      .array(
        z
          .object({
            combination_note: z.string().exactOptional(),
            combination_source_concept_id: z.int().exactOptional(),
            combination_source_concept_name: z.string().exactOptional(),
            combination_source_concept_type: z.string().exactOptional(),
            combination_target_concept_id: z.int().exactOptional(),
            combination_target_concept_name: z.string().exactOptional(),
            combination_target_concept_type: z.string().exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    concept_created: z.string().exactOptional(),
    concept_id: z.int().exactOptional(),
    concept_name: z.string().exactOptional(),
    concept_status: z.string().exactOptional(),
    concept_type: z.string().exactOptional(),
    concept_updated: z.string().exactOptional(),
    descendants: z.array(ConceptRelationSchema).exactOptional(),
    is_times_tag: z.int().exactOptional(),
    links: z
      .array(
        z
          .object({
            concept_id: z.int().exactOptional(),
            concept_name: z.string().exactOptional(),
            concept_status: z.string().exactOptional(),
            concept_type: z.string().exactOptional(),
            is_times_tag: z.int().exactOptional(),
            link: z.string().exactOptional(),
            link_id: z.int().exactOptional(),
            link_type: z.string().exactOptional(),
            mapping_type: z.string().exactOptional(),
            relation: z.string().exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    scope_notes: z
      .array(
        z
          .object({
            scope_note: z.string().exactOptional(),
            scope_note_name: z.string().exactOptional(),
            scope_note_type: z.string().exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    search_api_query: z.string().exactOptional(),
    taxonomy: z
      .array(
        z
          .object({
            source_concept_id: z.int().exactOptional(),
            source_concept_name: z.string().exactOptional(),
            source_concept_type: z.string().exactOptional(),
            source_concept_vernacular: z.string().exactOptional(),
            target_concept_id: z.int().exactOptional(),
            target_concept_name: z.string().exactOptional(),
            target_concept_type: z.string().exactOptional(),
            target_concept_vernacular: z.string().exactOptional(),
            taxonomic_relation: z.string().exactOptional(),
            taxonomic_verification_status: z.string().exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    vernacular: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Concept')

const ApikeySecurityScheme = { in: 'query', name: 'api-key', type: 'apiKey' }

export const getNameConceptTypeSpecificConceptJsonRoute = createRoute({
  method: 'get',
  path: '/name/{concept-type}/{specific-concept}.json',
  request: {
    params: z.object({
      'concept-type': z
        .enum(['nytd_geo', 'nytd_per', 'nytd_org', 'nytd_des'])
        .openapi({
          param: {
            description:
              'The type of the concept, used for Constructing a Semantic API Request by Concept Type and Specific Concept Name. The parameter is defined as a name-value pair, as in "concept_type=[nytd_geo|nytd_per|nytd_org|nytd_des]".\n',
            in: 'path',
            name: 'concept-type',
            required: true,
            schema: { enum: ['nytd_geo', 'nytd_per', 'nytd_org', 'nytd_des'], type: 'string' },
          },
        }),
      'specific-concept': z
        .string()
        .openapi({
          param: {
            description:
              'The name of the concept, used for Constructing a Semantic API Request by Concept Type and Specific Concept Name. The parameter is defined in the URI path, as the element immediately preceding ".json" like with "Baseball.json".\n',
            in: 'path',
            name: 'specific-concept',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      fields: z
        .enum([
          'all',
          'pages',
          'ticker_symbol',
          'links',
          'taxonomy',
          'combinations',
          'geocodes',
          'article_list',
          'scope_notes',
          'search_api_query',
        ])
        .exactOptional()
        .openapi({
          param: {
            description:
              '"all" or comma-separated list of specific optional fields: pages, ticker_symbol, links, taxonomy, combinations, geocodes, article_list, scope_notes, search_api_query\n\nOptional fields are returned in result_set. They are briefly explained here:\n\npages: A list of topic pages associated with a specific concept.\nticker_symbol: If this concept is a publicly traded company, this field contains the ticker symbol.\nlinks: A list of links from this concept to external data resources.\ntaxonomy: For descriptor concepts, this field returns a list of taxonomic relations to other concepts.\ncombinations: For descriptor concepts, this field returns a list of the specific meanings tis concept takes on when combined with other concepts.\ngeocodes: For geographic concepts, the full GIS record from geonames.\narticle_list: A list of up to 10 articles associated with this concept.\nscope_notes: Scope notes contains clarifications and meaning definitions that explicate the relationship between the concept and an article.\nsearch_api_query: Returns the request one would need to submit to the Article Search API to obtain a list of articles annotated with this concept.\n',
            in: 'query',
            name: 'fields',
            required: false,
            schema: {
              enum: [
                'all',
                'pages',
                'ticker_symbol',
                'links',
                'taxonomy',
                'combinations',
                'geocodes',
                'article_list',
                'scope_notes',
                'search_api_query',
              ],
              type: 'string',
            },
          },
        }),
      query: z
        .string()
        .openapi({
          param: {
            description:
              'Precedes the search term string. Used in a Search Query. Except for &lt;specific_concept_name&gt;, Search Query will take the required parameters listed above (&lt;concept_type&gt;, &lt;concept_uri&gt;, &lt;article_uri&gt;) as an optional_parameter in addition to the query=&lt;query_term&gt;.',
            in: 'query',
            name: 'query',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'An array of Concepts',
      content: {
        'application/json': {
          schema: z
            .object({
              copyright: z.string().exactOptional(),
              num_results: z.int().exactOptional(),
              results: z.array(ConceptSchema).exactOptional(),
              status: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getSearchJsonRoute = createRoute({
  method: 'get',
  path: '/search.json',
  request: {
    query: z.object({
      query: z
        .string()
        .openapi({
          param: {
            description:
              'Precedes the search term string. Used in a Search Query. Except for &lt;specific_concept_name&gt;, Search Query will take the required parameters listed above (&lt;concept_type&gt;, &lt;concept_uri&gt;, &lt;article_uri&gt;) as an optional_parameter in addition to the query=&lt;query_term&gt;.',
            in: 'query',
            name: 'query',
            required: true,
            schema: { type: 'string' },
          },
        }),
      offset: z
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
            description:
              'Integer value for the index count from the first concept to the last concept, sorted alphabetically. Used in a Search Query. A Search Query will return up to 10 concepts in its results.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { default: 10, type: 'integer' },
          },
        }),
      fields: z
        .enum([
          'all',
          'pages',
          'ticker_symbol',
          'links',
          'taxonomy',
          'combinations',
          'geocodes',
          'article_list',
          'scope_notes',
          'search_api_query',
        ])
        .exactOptional()
        .openapi({
          param: {
            description:
              '"all" or comma-separated list of specific optional fields: pages, ticker_symbol, links, taxonomy, combinations, geocodes, article_list, scope_notes, search_api_query\n\nOptional fields are returned in result_set. They are briefly explained here:\n\npages: A list of topic pages associated with a specific concept.\nticker_symbol: If this concept is a publicly traded company, this field contains the ticker symbol.\nlinks: A list of links from this concept to external data resources.\ntaxonomy: For descriptor concepts, this field returns a list of taxonomic relations to other concepts.\ncombinations: For descriptor concepts, this field returns a list of the specific meanings tis concept takes on when combined with other concepts.\ngeocodes: For geographic concepts, the full GIS record from geonames.\narticle_list: A list of up to 10 articles associated with this concept.\nscope_notes: Scope notes contains clarifications and meaning definitions that explicate the relationship between the concept and an article.\nsearch_api_query: Returns the request one would need to submit to the Article Search API to obtain a list of articles annotated with this concept.\n',
            in: 'query',
            name: 'fields',
            required: false,
            schema: {
              enum: [
                'all',
                'pages',
                'ticker_symbol',
                'links',
                'taxonomy',
                'combinations',
                'geocodes',
                'article_list',
                'scope_notes',
                'search_api_query',
              ],
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'An array of Concepts',
      content: {
        'application/json': {
          schema: z
            .object({
              copyright: z.string().exactOptional(),
              num_results: z.int().exactOptional(),
              results: z.array(ConceptRelationSchema).exactOptional(),
              status: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})
