import { z } from '@hono/zod-openapi'

type TopType = { cat?: { subcategories?: TopType[] } }

const TopSchema: z.ZodType<TopType> = z
  .lazy(() =>
    z
      .object({
        cat: z
          .object({ subcategories: z.array(z.lazy(() => TopSchema)).exactOptional() })
          .exactOptional()
          .openapi({ required: [] }),
      })
      .openapi({ required: [] }),
  )
  .openapi('Top')
