import { injectQuery, queryOptions } from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getApiQueryKey() {
  return ['api', '/api'] as const
}

export function getApiQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiQueryKey>
  >({
    queryKey: getApiQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApi<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getApiQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getApiAbilityScoresIndexQueryKey(
  args: InferRequestType<(typeof client.api)['ability-scores'][':index']['$get']>,
) {
  return ['api', '/api/ability-scores/:index', args] as const
}

export function getApiAbilityScoresIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['ability-scores'][':index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['ability-scores'][':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['ability-scores'][':index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAbilityScoresIndexQueryKey>
  >({
    queryKey: getApiAbilityScoresIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['ability-scores'][':index'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiAbilityScoresIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['ability-scores'][':index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['ability-scores'][':index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['ability-scores'][':index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAbilityScoresIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiAbilityScoresIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiAlignmentsIndexQueryKey(
  args: InferRequestType<(typeof client.api.alignments)[':index']['$get']>,
) {
  return ['api', '/api/alignments/:index', args] as const
}

export function getApiAlignmentsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.alignments)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.alignments)[':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.alignments)[':index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAlignmentsIndexQueryKey>
  >({
    queryKey: getApiAlignmentsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.alignments[':index'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiAlignmentsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.alignments)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.alignments)[':index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.alignments)[':index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAlignmentsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiAlignmentsIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiBackgroundsIndexQueryKey(
  args: InferRequestType<(typeof client.api.backgrounds)[':index']['$get']>,
) {
  return ['api', '/api/backgrounds/:index', args] as const
}

export function getApiBackgroundsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.backgrounds)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.backgrounds)[':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.backgrounds)[':index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiBackgroundsIndexQueryKey>
  >({
    queryKey: getApiBackgroundsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.backgrounds[':index'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiBackgroundsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.backgrounds)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.backgrounds)[':index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.backgrounds)[':index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiBackgroundsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiBackgroundsIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiClassesIndexQueryKey(
  args: InferRequestType<(typeof client.api.classes)[':index']['$get']>,
) {
  return ['api', '/api/classes/:index', args] as const
}

export function getApiClassesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.classes)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.classes)[':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.classes)[':index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiClassesIndexQueryKey>
  >({
    queryKey: getApiClassesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.classes[':index'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiClassesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.classes)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.classes)[':index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.classes)[':index']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiClassesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiClassesIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiClassesIndexFeaturesQueryKey(
  args: InferRequestType<(typeof client.api.classes)[':index']['features']['$get']>,
) {
  return ['api', '/api/classes/:index/features', args] as const
}

export function getApiClassesIndexFeaturesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.classes)[':index']['features']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.classes)[':index']['features']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.classes)[':index']['features']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiClassesIndexFeaturesQueryKey>
  >({
    queryKey: getApiClassesIndexFeaturesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.classes[':index'].features.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiClassesIndexFeatures<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.classes)[':index']['features']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.classes)[':index']['features']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.classes)[':index']['features']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiClassesIndexFeaturesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiClassesIndexFeaturesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiClassesIndexLevelsQueryKey(
  args: InferRequestType<(typeof client.api.classes)[':index']['levels']['$get']>,
) {
  return ['api', '/api/classes/:index/levels', args] as const
}

export function getApiClassesIndexLevelsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.classes)[':index']['levels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.classes)[':index']['levels']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.classes)[':index']['levels']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiClassesIndexLevelsQueryKey>
  >({
    queryKey: getApiClassesIndexLevelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.classes[':index'].levels.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiClassesIndexLevels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.classes)[':index']['levels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.classes)[':index']['levels']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.classes)[':index']['levels']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiClassesIndexLevelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiClassesIndexLevelsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiClassesIndexLevelsClassLevelQueryKey(
  args: InferRequestType<(typeof client.api.classes)[':index']['levels'][':class_level']['$get']>,
) {
  return ['api', '/api/classes/:index/levels/:class_level', args] as const
}

export function getApiClassesIndexLevelsClassLevelQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.classes)[':index']['levels'][':class_level']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.classes)[':index']['levels'][':class_level']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.classes)[':index']['levels'][':class_level']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiClassesIndexLevelsClassLevelQueryKey>
  >({
    queryKey: getApiClassesIndexLevelsClassLevelQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.classes[':index'].levels[':class_level'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiClassesIndexLevelsClassLevel<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.classes)[':index']['levels'][':class_level']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.classes)[':index']['levels'][':class_level']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.classes)[':index']['levels'][':class_level']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiClassesIndexLevelsClassLevelQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiClassesIndexLevelsClassLevelQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiClassesIndexLevelsClassLevelFeaturesQueryKey(
  args: InferRequestType<
    (typeof client.api.classes)[':index']['levels'][':class_level']['features']['$get']
  >,
) {
  return ['api', '/api/classes/:index/levels/:class_level/features', args] as const
}

export function getApiClassesIndexLevelsClassLevelFeaturesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.classes)[':index']['levels'][':class_level']['features']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.classes)[':index']['levels'][':class_level']['features']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.classes)[':index']['levels'][':class_level']['features']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiClassesIndexLevelsClassLevelFeaturesQueryKey>
  >({
    queryKey: getApiClassesIndexLevelsClassLevelFeaturesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.classes[':index'].levels[':class_level'].features.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiClassesIndexLevelsClassLevelFeatures<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.classes)[':index']['levels'][':class_level']['features']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.classes)[':index']['levels'][':class_level']['features']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.classes)[':index']['levels'][':class_level']['features']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiClassesIndexLevelsClassLevelFeaturesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiClassesIndexLevelsClassLevelFeaturesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getApiClassesIndexLevelsSpellLevelSpellsQueryKey(
  args: InferRequestType<
    (typeof client.api.classes)[':index']['levels'][':spell_level']['spells']['$get']
  >,
) {
  return ['api', '/api/classes/:index/levels/:spell_level/spells', args] as const
}

export function getApiClassesIndexLevelsSpellLevelSpellsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.classes)[':index']['levels'][':spell_level']['spells']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.classes)[':index']['levels'][':spell_level']['spells']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.classes)[':index']['levels'][':spell_level']['spells']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiClassesIndexLevelsSpellLevelSpellsQueryKey>
  >({
    queryKey: getApiClassesIndexLevelsSpellLevelSpellsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.classes[':index'].levels[':spell_level'].spells.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiClassesIndexLevelsSpellLevelSpells<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.classes)[':index']['levels'][':spell_level']['spells']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.classes)[':index']['levels'][':spell_level']['spells']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.classes)[':index']['levels'][':spell_level']['spells']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiClassesIndexLevelsSpellLevelSpellsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiClassesIndexLevelsSpellLevelSpellsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiClassesIndexMultiClassingQueryKey(
  args: InferRequestType<(typeof client.api.classes)[':index']['multi-classing']['$get']>,
) {
  return ['api', '/api/classes/:index/multi-classing', args] as const
}

export function getApiClassesIndexMultiClassingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.classes)[':index']['multi-classing']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.classes)[':index']['multi-classing']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.classes)[':index']['multi-classing']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiClassesIndexMultiClassingQueryKey>
  >({
    queryKey: getApiClassesIndexMultiClassingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.classes[':index']['multi-classing'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiClassesIndexMultiClassing<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.classes)[':index']['multi-classing']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.classes)[':index']['multi-classing']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.classes)[':index']['multi-classing']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiClassesIndexMultiClassingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiClassesIndexMultiClassingQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiClassesIndexProficienciesQueryKey(
  args: InferRequestType<(typeof client.api.classes)[':index']['proficiencies']['$get']>,
) {
  return ['api', '/api/classes/:index/proficiencies', args] as const
}

export function getApiClassesIndexProficienciesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.classes)[':index']['proficiencies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.classes)[':index']['proficiencies']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.classes)[':index']['proficiencies']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiClassesIndexProficienciesQueryKey>
  >({
    queryKey: getApiClassesIndexProficienciesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.classes[':index'].proficiencies.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiClassesIndexProficiencies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.classes)[':index']['proficiencies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.classes)[':index']['proficiencies']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.classes)[':index']['proficiencies']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiClassesIndexProficienciesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiClassesIndexProficienciesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiClassesIndexSpellcastingQueryKey(
  args: InferRequestType<(typeof client.api.classes)[':index']['spellcasting']['$get']>,
) {
  return ['api', '/api/classes/:index/spellcasting', args] as const
}

export function getApiClassesIndexSpellcastingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.classes)[':index']['spellcasting']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.classes)[':index']['spellcasting']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.classes)[':index']['spellcasting']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiClassesIndexSpellcastingQueryKey>
  >({
    queryKey: getApiClassesIndexSpellcastingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.classes[':index'].spellcasting.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiClassesIndexSpellcasting<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.classes)[':index']['spellcasting']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.classes)[':index']['spellcasting']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.classes)[':index']['spellcasting']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiClassesIndexSpellcastingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiClassesIndexSpellcastingQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiClassesIndexSpellsQueryKey(
  args: InferRequestType<(typeof client.api.classes)[':index']['spells']['$get']>,
) {
  return ['api', '/api/classes/:index/spells', args] as const
}

export function getApiClassesIndexSpellsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.classes)[':index']['spells']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.classes)[':index']['spells']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.classes)[':index']['spells']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiClassesIndexSpellsQueryKey>
  >({
    queryKey: getApiClassesIndexSpellsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.classes[':index'].spells.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiClassesIndexSpells<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.classes)[':index']['spells']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.classes)[':index']['spells']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.classes)[':index']['spells']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiClassesIndexSpellsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiClassesIndexSpellsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiClassesIndexSubclassesQueryKey(
  args: InferRequestType<(typeof client.api.classes)[':index']['subclasses']['$get']>,
) {
  return ['api', '/api/classes/:index/subclasses', args] as const
}

export function getApiClassesIndexSubclassesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.classes)[':index']['subclasses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.classes)[':index']['subclasses']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.classes)[':index']['subclasses']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiClassesIndexSubclassesQueryKey>
  >({
    queryKey: getApiClassesIndexSubclassesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.classes[':index'].subclasses.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiClassesIndexSubclasses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.classes)[':index']['subclasses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.classes)[':index']['subclasses']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.classes)[':index']['subclasses']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiClassesIndexSubclassesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiClassesIndexSubclassesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiConditionsIndexQueryKey(
  args: InferRequestType<(typeof client.api.conditions)[':index']['$get']>,
) {
  return ['api', '/api/conditions/:index', args] as const
}

export function getApiConditionsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.conditions)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.conditions)[':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.conditions)[':index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiConditionsIndexQueryKey>
  >({
    queryKey: getApiConditionsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.conditions[':index'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiConditionsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.conditions)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.conditions)[':index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.conditions)[':index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiConditionsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiConditionsIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiDamageTypesIndexQueryKey(
  args: InferRequestType<(typeof client.api)['damage-types'][':index']['$get']>,
) {
  return ['api', '/api/damage-types/:index', args] as const
}

export function getApiDamageTypesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['damage-types'][':index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['damage-types'][':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['damage-types'][':index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDamageTypesIndexQueryKey>
  >({
    queryKey: getApiDamageTypesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['damage-types'][':index'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiDamageTypesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['damage-types'][':index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['damage-types'][':index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['damage-types'][':index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiDamageTypesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiDamageTypesIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiEquipmentCategoriesIndexQueryKey(
  args: InferRequestType<(typeof client.api)['equipment-categories'][':index']['$get']>,
) {
  return ['api', '/api/equipment-categories/:index', args] as const
}

export function getApiEquipmentCategoriesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['equipment-categories'][':index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['equipment-categories'][':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['equipment-categories'][':index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiEquipmentCategoriesIndexQueryKey>
  >({
    queryKey: getApiEquipmentCategoriesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['equipment-categories'][':index'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiEquipmentCategoriesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['equipment-categories'][':index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['equipment-categories'][':index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['equipment-categories'][':index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiEquipmentCategoriesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiEquipmentCategoriesIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiEquipmentIndexQueryKey(
  args: InferRequestType<(typeof client.api.equipment)[':index']['$get']>,
) {
  return ['api', '/api/equipment/:index', args] as const
}

export function getApiEquipmentIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.equipment)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.equipment)[':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.equipment)[':index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiEquipmentIndexQueryKey>
  >({
    queryKey: getApiEquipmentIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.equipment[':index'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiEquipmentIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.equipment)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.equipment)[':index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.equipment)[':index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiEquipmentIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiEquipmentIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiFeatsIndexQueryKey(
  args: InferRequestType<(typeof client.api.feats)[':index']['$get']>,
) {
  return ['api', '/api/feats/:index', args] as const
}

export function getApiFeatsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.feats)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.feats)[':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.feats)[':index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiFeatsIndexQueryKey>
  >({
    queryKey: getApiFeatsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.feats[':index'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiFeatsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.feats)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.feats)[':index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.feats)[':index']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiFeatsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiFeatsIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiFeaturesIndexQueryKey(
  args: InferRequestType<(typeof client.api.features)[':index']['$get']>,
) {
  return ['api', '/api/features/:index', args] as const
}

export function getApiFeaturesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.features)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.features)[':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.features)[':index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiFeaturesIndexQueryKey>
  >({
    queryKey: getApiFeaturesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.features[':index'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiFeaturesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.features)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.features)[':index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.features)[':index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiFeaturesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiFeaturesIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiLanguagesIndexQueryKey(
  args: InferRequestType<(typeof client.api.languages)[':index']['$get']>,
) {
  return ['api', '/api/languages/:index', args] as const
}

export function getApiLanguagesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.languages)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.languages)[':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.languages)[':index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLanguagesIndexQueryKey>
  >({
    queryKey: getApiLanguagesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.languages[':index'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiLanguagesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.languages)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.languages)[':index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.languages)[':index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiLanguagesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiLanguagesIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiMagicItemsIndexQueryKey(
  args: InferRequestType<(typeof client.api)['magic-items'][':index']['$get']>,
) {
  return ['api', '/api/magic-items/:index', args] as const
}

export function getApiMagicItemsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['magic-items'][':index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['magic-items'][':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['magic-items'][':index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiMagicItemsIndexQueryKey>
  >({
    queryKey: getApiMagicItemsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['magic-items'][':index'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiMagicItemsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['magic-items'][':index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['magic-items'][':index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['magic-items'][':index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiMagicItemsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiMagicItemsIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiMagicSchoolsIndexQueryKey(
  args: InferRequestType<(typeof client.api)['magic-schools'][':index']['$get']>,
) {
  return ['api', '/api/magic-schools/:index', args] as const
}

export function getApiMagicSchoolsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['magic-schools'][':index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['magic-schools'][':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['magic-schools'][':index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiMagicSchoolsIndexQueryKey>
  >({
    queryKey: getApiMagicSchoolsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['magic-schools'][':index'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiMagicSchoolsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['magic-schools'][':index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['magic-schools'][':index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['magic-schools'][':index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiMagicSchoolsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiMagicSchoolsIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiMonstersQueryKey(args: InferRequestType<typeof client.api.monsters.$get>) {
  return ['api', '/api/monsters', args] as const
}

export function getApiMonstersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.monsters.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.monsters.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.monsters.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiMonstersQueryKey>
  >({
    queryKey: getApiMonstersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.monsters.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiMonsters<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.monsters.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.monsters.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.monsters.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiMonstersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiMonstersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiMonstersIndexQueryKey(
  args: InferRequestType<(typeof client.api.monsters)[':index']['$get']>,
) {
  return ['api', '/api/monsters/:index', args] as const
}

export function getApiMonstersIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.monsters)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.monsters)[':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.monsters)[':index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiMonstersIndexQueryKey>
  >({
    queryKey: getApiMonstersIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.monsters[':index'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiMonstersIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.monsters)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.monsters)[':index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.monsters)[':index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiMonstersIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiMonstersIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiProficienciesIndexQueryKey(
  args: InferRequestType<(typeof client.api.proficiencies)[':index']['$get']>,
) {
  return ['api', '/api/proficiencies/:index', args] as const
}

export function getApiProficienciesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.proficiencies)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.proficiencies)[':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.proficiencies)[':index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiProficienciesIndexQueryKey>
  >({
    queryKey: getApiProficienciesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.proficiencies[':index'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiProficienciesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.proficiencies)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.proficiencies)[':index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.proficiencies)[':index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiProficienciesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiProficienciesIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiRacesIndexQueryKey(
  args: InferRequestType<(typeof client.api.races)[':index']['$get']>,
) {
  return ['api', '/api/races/:index', args] as const
}

export function getApiRacesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.races)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.races)[':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.races)[':index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiRacesIndexQueryKey>
  >({
    queryKey: getApiRacesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.races[':index'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiRacesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.races)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.races)[':index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.races)[':index']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiRacesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiRacesIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiRacesIndexProficienciesQueryKey(
  args: InferRequestType<(typeof client.api.races)[':index']['proficiencies']['$get']>,
) {
  return ['api', '/api/races/:index/proficiencies', args] as const
}

export function getApiRacesIndexProficienciesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.races)[':index']['proficiencies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.races)[':index']['proficiencies']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.races)[':index']['proficiencies']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiRacesIndexProficienciesQueryKey>
  >({
    queryKey: getApiRacesIndexProficienciesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.races[':index'].proficiencies.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiRacesIndexProficiencies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.races)[':index']['proficiencies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.races)[':index']['proficiencies']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.races)[':index']['proficiencies']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiRacesIndexProficienciesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiRacesIndexProficienciesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiRacesIndexSubracesQueryKey(
  args: InferRequestType<(typeof client.api.races)[':index']['subraces']['$get']>,
) {
  return ['api', '/api/races/:index/subraces', args] as const
}

export function getApiRacesIndexSubracesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.races)[':index']['subraces']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.races)[':index']['subraces']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.races)[':index']['subraces']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiRacesIndexSubracesQueryKey>
  >({
    queryKey: getApiRacesIndexSubracesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.races[':index'].subraces.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiRacesIndexSubraces<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.races)[':index']['subraces']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.races)[':index']['subraces']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.races)[':index']['subraces']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiRacesIndexSubracesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiRacesIndexSubracesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiRacesIndexTraitsQueryKey(
  args: InferRequestType<(typeof client.api.races)[':index']['traits']['$get']>,
) {
  return ['api', '/api/races/:index/traits', args] as const
}

export function getApiRacesIndexTraitsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.races)[':index']['traits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.races)[':index']['traits']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.races)[':index']['traits']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiRacesIndexTraitsQueryKey>
  >({
    queryKey: getApiRacesIndexTraitsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.races[':index'].traits.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiRacesIndexTraits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.races)[':index']['traits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.races)[':index']['traits']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.races)[':index']['traits']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiRacesIndexTraitsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiRacesIndexTraitsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiRuleSectionsIndexQueryKey(
  args: InferRequestType<(typeof client.api)['rule-sections'][':index']['$get']>,
) {
  return ['api', '/api/rule-sections/:index', args] as const
}

export function getApiRuleSectionsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['rule-sections'][':index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['rule-sections'][':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['rule-sections'][':index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiRuleSectionsIndexQueryKey>
  >({
    queryKey: getApiRuleSectionsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['rule-sections'][':index'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiRuleSectionsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['rule-sections'][':index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['rule-sections'][':index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['rule-sections'][':index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiRuleSectionsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiRuleSectionsIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiRulesIndexQueryKey(
  args: InferRequestType<(typeof client.api.rules)[':index']['$get']>,
) {
  return ['api', '/api/rules/:index', args] as const
}

export function getApiRulesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.rules)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.rules)[':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.rules)[':index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiRulesIndexQueryKey>
  >({
    queryKey: getApiRulesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.rules[':index'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiRulesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.rules)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.rules)[':index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.rules)[':index']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiRulesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiRulesIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiSkillsIndexQueryKey(
  args: InferRequestType<(typeof client.api.skills)[':index']['$get']>,
) {
  return ['api', '/api/skills/:index', args] as const
}

export function getApiSkillsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.skills)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.skills)[':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.skills)[':index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSkillsIndexQueryKey>
  >({
    queryKey: getApiSkillsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.skills[':index'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiSkillsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.skills)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.skills)[':index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.skills)[':index']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSkillsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiSkillsIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiSpellsQueryKey(args: InferRequestType<typeof client.api.spells.$get>) {
  return ['api', '/api/spells', args] as const
}

export function getApiSpellsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.spells.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.spells.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.spells.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiSpellsQueryKey>
  >({
    queryKey: getApiSpellsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.spells.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiSpells<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.spells.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.spells.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.spells.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiSpellsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiSpellsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiSpellsIndexQueryKey(
  args: InferRequestType<(typeof client.api.spells)[':index']['$get']>,
) {
  return ['api', '/api/spells/:index', args] as const
}

export function getApiSpellsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.spells)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.spells)[':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.spells)[':index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSpellsIndexQueryKey>
  >({
    queryKey: getApiSpellsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.spells[':index'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiSpellsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.spells)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.spells)[':index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.spells)[':index']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSpellsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiSpellsIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiSubclassesIndexQueryKey(
  args: InferRequestType<(typeof client.api.subclasses)[':index']['$get']>,
) {
  return ['api', '/api/subclasses/:index', args] as const
}

export function getApiSubclassesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.subclasses)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.subclasses)[':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.subclasses)[':index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSubclassesIndexQueryKey>
  >({
    queryKey: getApiSubclassesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.subclasses[':index'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiSubclassesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.subclasses)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.subclasses)[':index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.subclasses)[':index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSubclassesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiSubclassesIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiSubclassesIndexFeaturesQueryKey(
  args: InferRequestType<(typeof client.api.subclasses)[':index']['features']['$get']>,
) {
  return ['api', '/api/subclasses/:index/features', args] as const
}

export function getApiSubclassesIndexFeaturesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.subclasses)[':index']['features']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.subclasses)[':index']['features']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.subclasses)[':index']['features']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSubclassesIndexFeaturesQueryKey>
  >({
    queryKey: getApiSubclassesIndexFeaturesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.subclasses[':index'].features.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiSubclassesIndexFeatures<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.subclasses)[':index']['features']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.subclasses)[':index']['features']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.subclasses)[':index']['features']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSubclassesIndexFeaturesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiSubclassesIndexFeaturesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiSubclassesIndexLevelsQueryKey(
  args: InferRequestType<(typeof client.api.subclasses)[':index']['levels']['$get']>,
) {
  return ['api', '/api/subclasses/:index/levels', args] as const
}

export function getApiSubclassesIndexLevelsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.subclasses)[':index']['levels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.subclasses)[':index']['levels']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.subclasses)[':index']['levels']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSubclassesIndexLevelsQueryKey>
  >({
    queryKey: getApiSubclassesIndexLevelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.subclasses[':index'].levels.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiSubclassesIndexLevels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.subclasses)[':index']['levels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.subclasses)[':index']['levels']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.subclasses)[':index']['levels']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSubclassesIndexLevelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiSubclassesIndexLevelsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiSubclassesIndexLevelsSubclassLevelQueryKey(
  args: InferRequestType<
    (typeof client.api.subclasses)[':index']['levels'][':subclass_level']['$get']
  >,
) {
  return ['api', '/api/subclasses/:index/levels/:subclass_level', args] as const
}

export function getApiSubclassesIndexLevelsSubclassLevelQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.subclasses)[':index']['levels'][':subclass_level']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.subclasses)[':index']['levels'][':subclass_level']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.subclasses)[':index']['levels'][':subclass_level']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSubclassesIndexLevelsSubclassLevelQueryKey>
  >({
    queryKey: getApiSubclassesIndexLevelsSubclassLevelQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.subclasses[':index'].levels[':subclass_level'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiSubclassesIndexLevelsSubclassLevel<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.subclasses)[':index']['levels'][':subclass_level']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.subclasses)[':index']['levels'][':subclass_level']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.subclasses)[':index']['levels'][':subclass_level']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSubclassesIndexLevelsSubclassLevelQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiSubclassesIndexLevelsSubclassLevelQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiSubclassesIndexLevelsSubclassLevelFeaturesQueryKey(
  args: InferRequestType<
    (typeof client.api.subclasses)[':index']['levels'][':subclass_level']['features']['$get']
  >,
) {
  return ['api', '/api/subclasses/:index/levels/:subclass_level/features', args] as const
}

export function getApiSubclassesIndexLevelsSubclassLevelFeaturesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.subclasses)[':index']['levels'][':subclass_level']['features']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.subclasses)[':index']['levels'][':subclass_level']['features']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.subclasses)[':index']['levels'][':subclass_level']['features']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSubclassesIndexLevelsSubclassLevelFeaturesQueryKey>
  >({
    queryKey: getApiSubclassesIndexLevelsSubclassLevelFeaturesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.subclasses[':index'].levels[':subclass_level'].features.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiSubclassesIndexLevelsSubclassLevelFeatures<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.subclasses)[':index']['levels'][':subclass_level']['features']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.subclasses)[':index']['levels'][':subclass_level']['features']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.subclasses)[':index']['levels'][':subclass_level']['features']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSubclassesIndexLevelsSubclassLevelFeaturesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiSubclassesIndexLevelsSubclassLevelFeaturesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getApiSubracesIndexQueryKey(
  args: InferRequestType<(typeof client.api.subraces)[':index']['$get']>,
) {
  return ['api', '/api/subraces/:index', args] as const
}

export function getApiSubracesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.subraces)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.subraces)[':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.subraces)[':index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSubracesIndexQueryKey>
  >({
    queryKey: getApiSubracesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.subraces[':index'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiSubracesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.subraces)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.subraces)[':index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.subraces)[':index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSubracesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiSubracesIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiSubracesIndexProficienciesQueryKey(
  args: InferRequestType<(typeof client.api.subraces)[':index']['proficiencies']['$get']>,
) {
  return ['api', '/api/subraces/:index/proficiencies', args] as const
}

export function getApiSubracesIndexProficienciesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.subraces)[':index']['proficiencies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.subraces)[':index']['proficiencies']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.subraces)[':index']['proficiencies']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSubracesIndexProficienciesQueryKey>
  >({
    queryKey: getApiSubracesIndexProficienciesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.subraces[':index'].proficiencies.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiSubracesIndexProficiencies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.subraces)[':index']['proficiencies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.subraces)[':index']['proficiencies']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.subraces)[':index']['proficiencies']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSubracesIndexProficienciesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiSubracesIndexProficienciesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiSubracesIndexTraitsQueryKey(
  args: InferRequestType<(typeof client.api.subraces)[':index']['traits']['$get']>,
) {
  return ['api', '/api/subraces/:index/traits', args] as const
}

export function getApiSubracesIndexTraitsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.subraces)[':index']['traits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.subraces)[':index']['traits']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.subraces)[':index']['traits']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSubracesIndexTraitsQueryKey>
  >({
    queryKey: getApiSubracesIndexTraitsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.subraces[':index'].traits.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiSubracesIndexTraits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.subraces)[':index']['traits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.subraces)[':index']['traits']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.subraces)[':index']['traits']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSubracesIndexTraitsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiSubracesIndexTraitsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiTraitsIndexQueryKey(
  args: InferRequestType<(typeof client.api.traits)[':index']['$get']>,
) {
  return ['api', '/api/traits/:index', args] as const
}

export function getApiTraitsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.traits)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.traits)[':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.traits)[':index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTraitsIndexQueryKey>
  >({
    queryKey: getApiTraitsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.traits[':index'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiTraitsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.traits)[':index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.traits)[':index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.traits)[':index']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiTraitsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiTraitsIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiWeaponPropertiesIndexQueryKey(
  args: InferRequestType<(typeof client.api)['weapon-properties'][':index']['$get']>,
) {
  return ['api', '/api/weapon-properties/:index', args] as const
}

export function getApiWeaponPropertiesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['weapon-properties'][':index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['weapon-properties'][':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['weapon-properties'][':index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiWeaponPropertiesIndexQueryKey>
  >({
    queryKey: getApiWeaponPropertiesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['weapon-properties'][':index'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiWeaponPropertiesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['weapon-properties'][':index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['weapon-properties'][':index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['weapon-properties'][':index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiWeaponPropertiesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiWeaponPropertiesIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiEndpointQueryKey(
  args: InferRequestType<(typeof client.api)[':endpoint']['$get']>,
) {
  return ['api', '/api/:endpoint', args] as const
}

export function getApiEndpointQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api)[':endpoint']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)[':endpoint']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)[':endpoint']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiEndpointQueryKey>
  >({
    queryKey: getApiEndpointQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api[':endpoint'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiEndpoint<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api)[':endpoint']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)[':endpoint']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api)[':endpoint']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiEndpointQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiEndpointQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}
