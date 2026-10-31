import { createRoute, z } from '@hono/zod-openapi'

const GithubAccessCodeSecurityScheme = {
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://github.com/login/oauth/authorize',
      scopes: {
        'admin:org': 'Fully manage organization, teams, and memberships.',
        'admin:public_key': 'Fully manage public keys.',
        'admin:repo_hook':
          'Grants read, write, ping, and delete access to hooks in public or private repositories.',
        delete_repo: 'Grants access to delete adminable repositories.',
        gist: 'Grants write access to gists.',
        notifications:
          "Grants read access to a user's notifications. repo also provides this access.",
        public_repo:
          'Grants read/write access to code, commit statuses, and deployment statuses for public repositories and organizations.',
        'read:org': 'Read-only access to organization, teams, and membership.',
        'read:public_key': 'List and view details for public keys.',
        'read:repo_hook': 'Grants read and ping access to hooks in public or private repositories.',
        repo: 'Grants read/write access to code, commit statuses, and deployment statuses for public and private repositories and organizations.',
        'repo:status':
          'Grants read/write access to public and private repository commit statuses. This scope is only necessary to grant other users or services access to private repository commit statuses without granting access to the code.',
        repo_deployment:
          'Grants access to deployment statuses for public and private repositories. This scope is only necessary to grant other users or services access to deployment statuses, without granting access to the code.',
        user: 'Grants read/write access to profile info only. Note that this scope includes user:email and user:follow.',
        'user:email': "Grants read access to a user's email addresses.",
        'user:follow': 'Grants access to follow or unfollow other users.',
        'write:org': 'Publicize and unpublicize organization membership.',
        'write:public_key': 'Create, list, and view details for public keys.',
        'write:repo_hook':
          'Grants read, write, and ping access to hooks in public or private repositories.',
      },
      tokenUrl: 'https://github.com/login/oauth/access_token',
    },
  },
  type: 'oauth2',
}

const InternalApiKeySecurityScheme = { in: 'header', name: 'ckan_api_key', type: 'apiKey' }

export const getActionOrganizationActivityListRoute = createRoute({
  method: 'get',
  path: '/action/organization_activity_list',
  tags: ['action'],
  summary: 'Get the activity stream of an organization',
  description: "Return an organization's activity stream",
  request: {
    query: z.object({
      id: z
        .string()
        .default('ministry-of-agriculture')
        .exactOptional()
        .openapi({
          param: {
            description: 'The id or name of the organization',
            in: 'query',
            name: 'id',
            schema: { default: 'ministry-of-agriculture', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: "List of an organization's activities" } },
})

export const getActionOrganizationActivityListHtmlRoute = createRoute({
  method: 'get',
  path: '/action/organization_activity_list_html',
  tags: ['action'],
  summary: 'Get the activity stream of an organization, HTML format',
  description: "Return an organization's activity stream as HTML",
  request: {
    query: z.object({
      id: z
        .string()
        .default('ministry-of-agriculture')
        .exactOptional()
        .openapi({
          param: {
            description: 'The id or name of the organization',
            in: 'query',
            name: 'id',
            schema: { default: 'ministry-of-agriculture', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: "List of an organization's activities in HTML" } },
})

export const getActionOrganizationAutocompleteRoute = createRoute({
  method: 'get',
  path: '/action/organization_autocomplete',
  tags: ['action'],
  summary: 'Get names of organizations that match a query string',
  description: 'Return a list of organization names that contain a string',
  request: {
    query: z.object({
      q: z
        .string()
        .default('ministry')
        .exactOptional()
        .openapi({
          param: {
            description: 'The string to search for',
            in: 'query',
            name: 'q',
            schema: { default: 'ministry', type: 'string' },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum number of organizations to return (optional)',
            in: 'query',
            name: 'limit',
            schema: { default: 20, type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'List of organizations' } },
})

export const getActionOrganizationFollowerCountRoute = createRoute({
  method: 'get',
  path: '/action/organization_follower_count',
  tags: ['action'],
  summary: 'Get number of followers of an organization',
  description: 'Return the number of followers of an organization',
  request: {
    query: z.object({
      id: z
        .string()
        .default('ministry-of-agriculture')
        .exactOptional()
        .openapi({
          param: {
            description: 'The id or name of the organization',
            in: 'query',
            name: 'id',
            schema: { default: 'ministry-of-agriculture', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Count of organization followers' } },
})

export const getActionOrganizationFollowerListRoute = createRoute({
  method: 'get',
  path: '/action/organization_follower_list',
  tags: ['action'],
  summary: 'Get users following an organization',
  description: 'Return a list of users that are following a given organization',
  request: {
    query: z.object({
      id: z
        .string()
        .default('ministry-of-agriculture')
        .exactOptional()
        .openapi({
          param: {
            description: 'The id or name of the organization',
            in: 'query',
            name: 'id',
            schema: { default: 'ministry-of-agriculture', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'List of organization followers' } },
})

export const getActionOrganizationListRoute = createRoute({
  method: 'get',
  path: '/action/organization_list',
  tags: ['action'],
  summary: 'Get names of all organizations',
  description: 'Returns the names of all indexed organizations',
  request: {
    query: z.object({
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
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'The offset (index) of the first organizations to return',
            in: 'query',
            name: 'offset',
            schema: { default: 0, type: 'integer' },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of organizations to be returned per page',
            in: 'query',
            name: 'limit',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'List of organizations' } },
})

export const getActionOrganizationListForUserRoute = createRoute({
  method: 'get',
  path: '/action/organization_list_for_user',
  tags: ['action'],
  summary: 'Get organizations that a user has a given permission for',
  description: 'Return the organizations that the user has a given permission for',
  request: {
    query: z.object({
      permission: z
        .string()
        .default('"edit_group"')
        .exactOptional()
        .openapi({
          param: {
            description: 'The permission the user has against the returned organization',
            in: 'query',
            name: 'permission',
            schema: { default: '"edit_group"', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'List of organizations for given permission' } },
})

export const getActionOrganizationRevisionListRoute = createRoute({
  method: 'get',
  path: '/action/organization_revision_list',
  tags: ['action'],
  summary: 'Get organization revisions',
  description: "Return an organization's revisions",
  request: {
    query: z.object({
      id: z
        .string()
        .default('ministry-of-agriculture')
        .exactOptional()
        .openapi({
          param: {
            description: 'The name or id of the organization',
            in: 'query',
            name: 'id',
            schema: { default: 'ministry-of-agriculture', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: "List of an organization's revisions" } },
})

export const getActionOrganizationShowRoute = createRoute({
  method: 'get',
  path: '/action/organization_show',
  tags: ['action'],
  summary: 'Get details of a specific organization',
  description: 'Return the details of an organization',
  request: {
    query: z.object({
      id: z
        .string()
        .default('ministry-of-agriculture')
        .exactOptional()
        .openapi({
          param: {
            description: 'The id or name of the organization',
            in: 'query',
            name: 'id',
            schema: { default: 'ministry-of-agriculture', type: 'string' },
            required: false,
          },
        }),
      include_datasets: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description: "include a list of the organization's datasets",
            in: 'query',
            name: 'include_datasets',
            schema: { default: true, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'List organization details' } },
})

export const getActionPackageActivityListRoute = createRoute({
  method: 'get',
  path: '/action/package_activity_list',
  tags: ['action'],
  summary: 'Get the activity stream of a package (dataset)',
  description: "Returns a package's activity stream",
  request: {
    query: z.object({
      id: z
        .string()
        .default('grizzly-bear-population-units')
        .exactOptional()
        .openapi({
          param: {
            description: 'The id or name of the package',
            in: 'query',
            name: 'id',
            schema: { default: 'grizzly-bear-population-units', type: 'string' },
            required: false,
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
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'Where to start getting activity items from',
            in: 'query',
            name: 'offset',
            schema: { default: 0, type: 'integer' },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(31)
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum number of activities to return',
            in: 'query',
            name: 'limit',
            schema: { default: 31, type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'List of activities' } },
})

export const getActionPackageActivityListHtmlRoute = createRoute({
  method: 'get',
  path: '/action/package_activity_list_html',
  tags: ['action'],
  summary: 'Get the activity stream of a package (dataset), HTML format',
  description:
    "The activity stream is rendered as a snippet of HTML meant to be included in an HTML pag, i.e it doesn't have any header or footer.",
  request: {
    query: z.object({
      id: z
        .string()
        .default('grizzly-bear-population-units')
        .exactOptional()
        .openapi({
          param: {
            description: 'The id or name of the package',
            in: 'query',
            name: 'id',
            schema: { default: 'grizzly-bear-population-units', type: 'string' },
            required: false,
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
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'Where to start getting activity items from',
            in: 'query',
            name: 'offset',
            schema: { default: 0, type: 'integer' },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(31)
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum number of activities to return',
            in: 'query',
            name: 'limit',
            schema: { default: 31, type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'List of activities rendered as HTML snippet' } },
})

export const getActionPackageAutocompleteRoute = createRoute({
  method: 'get',
  path: '/action/package_autocomplete',
  tags: ['action'],
  summary: 'Find packages (datasets) matching a query',
  description: 'Return a list of datasets that match a string',
  request: {
    query: z.object({
      q: z
        .string()
        .default('"Okanagan Lake"')
        .exactOptional()
        .openapi({
          param: {
            description: 'The string to query',
            in: 'query',
            name: 'q',
            schema: { default: '"Okanagan Lake"', type: 'string' },
            required: false,
          },
        }),
      limit: z
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
            description: 'The maximum number of resource formats to return',
            in: 'query',
            name: 'limit',
            schema: { default: 10, type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'List of datasets that match a string' } },
})

export const getActionPackageListRoute = createRoute({
  method: 'get',
  path: '/action/package_list',
  tags: ['action'],
  summary: 'Get a list of all packages (datasets)',
  description: 'Returns the names of all indexed packages (datasets)',
  request: {
    query: z.object({
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
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'The offset (index) of the first package to return',
            in: 'query',
            name: 'offset',
            schema: { default: 0, type: 'integer' },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of packages to be returned per page',
            in: 'query',
            name: 'limit',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'List of packages' } },
})

export const getActionPackageRelationshipsListRoute = createRoute({
  method: 'get',
  path: '/action/package_relationships_list',
  tags: ['action'],
  summary: 'Get package (dataset) relationships',
  description: "Return a dataset's relationships",
  request: {
    query: z.object({
      id: z
        .string()
        .default('grizzly-bear-population-units')
        .exactOptional()
        .openapi({
          param: {
            description: 'The id or name of the first package',
            in: 'query',
            name: 'id',
            schema: { default: 'grizzly-bear-population-units', type: 'string' },
            required: false,
          },
        }),
      id2: z
        .string()
        .default('important-fossil-areas')
        .exactOptional()
        .openapi({
          param: {
            description: 'The id or name of the second package',
            in: 'query',
            name: 'id2',
            schema: { default: 'important-fossil-areas', type: 'string' },
            required: false,
          },
        }),
      rel: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'relationship as string',
            in: 'query',
            name: 'rel',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'List of dataset relationships' } },
})

export const getActionPackageRevisionListRoute = createRoute({
  method: 'get',
  path: '/action/package_revision_list',
  tags: ['action'],
  summary: 'Get list of revisions for a package (dataset)',
  description: "Return a dataset's revision as a list of dictionaries",
  request: {
    query: z.object({
      id: z
        .string()
        .default('grizzly-bear-population-units')
        .exactOptional()
        .openapi({
          param: {
            description: 'The id or name of the dataset',
            in: 'query',
            name: 'id',
            schema: { default: 'grizzly-bear-population-units', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'List of dataset revisions' } },
})

export const getActionPackageSearchRoute = createRoute({
  method: 'get',
  path: '/action/package_search',
  tags: ['action'],
  summary: 'Find packages (datasets) matching query terms',
  description: 'Searches for packages (datasets) matching the specified query terms',
  request: {
    query: z.object({
      q: z
        .string()
        .default('"Okanagan Lake"')
        .exactOptional()
        .openapi({
          param: {
            description: 'A query string',
            in: 'query',
            name: 'q',
            schema: { default: '"Okanagan Lake"', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'List of packages' } },
})

export const getActionPackageShowRoute = createRoute({
  method: 'get',
  path: '/action/package_show',
  tags: ['action'],
  summary: 'Get metadata about one specific package (dataset)',
  description:
    'Returns metadata about the package (dataset) corresponding to the specified unique name',
  request: {
    query: z.object({
      id: z
        .string()
        .default('grizzly-bear-population-units')
        .exactOptional()
        .openapi({
          param: {
            description: 'The package name',
            in: 'query',
            name: 'id',
            schema: { default: 'grizzly-bear-population-units', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'A package metadata object' } },
})

export const getActionRelatedListRoute = createRoute({
  method: 'get',
  path: '/action/related_list',
  tags: ['action'],
  summary: 'Gets items related to a package (dataset)',
  description: "Returns a dataset's related items.",
  request: {
    query: z.object({
      id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'id or name of the dataset (optional)',
            in: 'query',
            name: 'id',
            schema: { type: 'string' },
            required: false,
          },
        }),
      dataset: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Dataset dictionary of the dataset (optional)',
            in: 'query',
            name: 'dataset',
            schema: { type: 'string' },
            required: false,
          },
        }),
      type_filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The type of related item to show (optional)',
            in: 'query',
            name: 'type_filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The order to sort the related items in',
            in: 'query',
            name: 'sort',
            schema: { type: 'string' },
            required: false,
          },
        }),
      featured: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'whether or not to restrict the results to only featured items',
            in: 'query',
            name: 'featured',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Search for related items' } },
})

export const getActionResourceSearchRoute = createRoute({
  method: 'get',
  path: '/action/resource_search',
  tags: ['action'],
  summary: 'Find resources',
  description:
    'Returns a dictionary with two fields ``count`` and ``results``.             The ``count`` field contains the total number of Resources                found without the limit or query parameters having an effect.             The ``results`` field is a list of dictized Resource objects.             The query parameter is a required field. It is a string in                the form ``{field}:{term}`` or a list of strings, each of the             same form. Within each string, ``{field}`` is a field or extra             field on the Resource domain object.',
  request: {
    query: z.object({
      query: z
        .string()
        .default('format:csv')
        .exactOptional()
        .openapi({
          param: {
            description:
              'The search criteria string or list of strings of the form ``{field}:{term1}``',
            in: 'query',
            name: 'query',
            schema: { default: 'format:csv', type: 'string' },
            required: false,
          },
        }),
      fields: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Depreciated',
            in: 'query',
            name: 'fields',
            schema: { type: 'string' },
            required: false,
          },
        }),
      order_by: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A field on the resource model that orders the results',
            in: 'query',
            name: 'order_by',
            schema: { type: 'string' },
            required: false,
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
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'Apply an offset to the query',
            in: 'query',
            name: 'offset',
            schema: { default: 0, type: 'integer' },
            required: false,
          },
        }),
      limit: z
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
            description: 'Apply a limit to the query',
            in: 'query',
            name: 'limit',
            schema: { default: 0, type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Search for resources' } },
})

export const getActionResourceShowRoute = createRoute({
  method: 'get',
  path: '/action/resource_show',
  tags: ['action'],
  summary: 'Get metadata for a specific resource',
  description: 'Return the metadata of a resource',
  request: {
    query: z.object({
      id: z
        .string()
        .default('e6c8bb1d-3726-418b-9b7e-1d97a9bbb817')
        .exactOptional()
        .openapi({
          param: {
            description: 'The id of the resource',
            in: 'query',
            name: 'id',
            schema: { default: 'e6c8bb1d-3726-418b-9b7e-1d97a9bbb817', type: 'string' },
            required: false,
          },
        }),
      include_tracking: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Add tracking information to dataset',
            in: 'query',
            name: 'include_tracking',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Return metadata of a resource' } },
})

export const getActionStatusShowRoute = createRoute({
  method: 'get',
  path: '/action/status_show',
  tags: ['action'],
  summary: 'Get the site status',
  description: 'Returns the site status',
  responses: { 200: { description: 'Returns the site status, version, installed extensions' } },
})

export const getActionTagListRoute = createRoute({
  method: 'get',
  path: '/action/tag_list',
  tags: ['action'],
  summary: 'Get a list of tags',
  description: 'Returns the names of all indexed tags',
  request: {
    query: z.object({
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
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'The offset (index) of the first tag to return',
            in: 'query',
            name: 'offset',
            schema: { default: 0, type: 'integer' },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of tags to be returned per page',
            in: 'query',
            name: 'limit',
            schema: { default: 100, type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'List of tags' } },
})
