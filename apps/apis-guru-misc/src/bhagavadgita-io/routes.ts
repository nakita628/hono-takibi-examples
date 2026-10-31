import { createRoute, z } from '@hono/zod-openapi'

const ChapterSchemaSchema = z
  .object({
    chapter_number: z.int32().nullable().exactOptional(),
    chapter_summary: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    name_meaning: z.string().nullable().exactOptional(),
    name_translation: z.string().nullable().exactOptional(),
    name_transliterated: z.string().nullable().exactOptional(),
    verses_count: z.int32().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ChapterSchema')

const VerseSchemaSchema = z
  .object({
    meaning: z.string().nullable().exactOptional(),
    text: z.string().nullable().exactOptional(),
    transliteration: z.string().nullable().exactOptional(),
    verse_number: z.string().nullable().exactOptional(),
    word_meanings: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('VerseSchema')

export const getApiV1ChaptersRoute = createRoute({
  method: 'get',
  path: '/api/v1/chapters',
  tags: ['chapter'],
  summary: 'Get all the 18 Chapters of the Bhagavad Gita.',
  description: 'Get a list of all the 18 Chapters of the Bhagavad Gita.<br/>',
  request: {
    query: z.object({
      access_token: z
        .string()
        .openapi({
          param: {
            description: "Your app's access token.",
            in: 'query',
            name: 'access_token',
            required: true,
            schema: { type: 'string' },
          },
        }),
      language: z
        .literal('hi')
        .exactOptional()
        .openapi({
          param: {
            description: 'Language to query. Leave blank for english.',
            in: 'query',
            name: 'language',
            schema: { enum: ['hi'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success: Everything worked as expected.',
      content: {
        'application/json': {
          schema: ChapterSchemaSchema,
          examples: {
            response: {
              value:
                '{\n  "chapters": [\n    {\n      "chapter_number": 1, \n      "name": "u\'अर्जुनविषादयोग\'", \n      "name_english": "u\'Arjuna Dilemma\'", \n      "name_transliterated": "u\'Arjun Viṣhād Yog\'", \n      "name_transliterated_simple": "u\'Arjuna Visada Yoga\'", \n      "verses_count": 47\n    }, \n    {\n      "chapter_number": 2, \n      "name": "u\'सांख्ययोग\'", \n      "name_english": "u\'Transcendental Knowledge\'", \n      "name_transliterated": "u\'Sānkhya Yog\'", \n      "name_transliterated_simple": "u\'Sankhya Yoga\'", \n      "verses_count": 72\n    }\n  ]\n}',
            },
          },
        },
      },
    },
    400: { description: 'Bad Request: The request was unacceptable due to wrong parameter(s).' },
    401: { description: 'Unauthorized: Invalid access_token used.' },
    402: { description: 'Request Failed.' },
    500: { description: 'Server Error: Something went wrong on our end.' },
  },
})

export const getApiV1ChaptersChapterNumberRoute = createRoute({
  method: 'get',
  path: '/api/v1/chapters/{chapter_number}',
  tags: ['chapter'],
  summary: 'Get a specific chapter from the Bhagavad Gita.',
  description: 'Get information about a specific chapter from the Bhagavad Gita.<br/>',
  request: {
    query: z.object({
      access_token: z
        .string()
        .openapi({
          param: {
            description: "Your app's access token.",
            in: 'query',
            name: 'access_token',
            required: true,
            schema: { type: 'string' },
          },
        }),
      language: z
        .literal('hi')
        .exactOptional()
        .openapi({
          param: {
            description: 'Language to query. Leave blank for english.',
            in: 'query',
            name: 'language',
            schema: { enum: ['hi'], type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      chapter_number: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([z.literal(1), z.literal(2), z.literal(3)]),
        )
        .default(1)
        .openapi({
          param: {
            description: 'Which Chapter Number to filter?',
            in: 'path',
            name: 'chapter_number',
            required: true,
            schema: { default: 1, enum: [1, 2, 3], type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success: Everything worked as expected.',
      content: {
        'application/json': {
          schema: ChapterSchemaSchema,
          examples: {
            response: {
              value:
                '{\n  "chapter_number": 1, \n  "name": "u\'अर्जुनविषादयोग\'", \n  "name_english": "u\'Arjuna Dilemma\'", \n  "name_transliterated": "u\'Arjun Viṣhād Yog\'", \n  "name_transliterated_simple": "u\'Arjuna Visada Yoga\'", \n  "verses_count": 47\n}',
            },
          },
        },
      },
    },
    400: { description: 'Bad Request: The request was unacceptable due to wrong parameter(s).' },
    401: { description: 'Unauthorized: Invalid access_token used.' },
    402: { description: 'Request Failed.' },
    404: { description: 'Not Found: The chapter number you are looking for could not be found.' },
    500: { description: 'Server Error: Something went wrong on our end.' },
  },
})

export const getApiV1ChaptersChapterNumberVersesRoute = createRoute({
  method: 'get',
  path: '/api/v1/chapters/{chapter_number}/verses',
  tags: ['verse'],
  summary: 'Get all the Verses from a Chapter.',
  description: 'Get a list of all Verses from a particular Chapter.<br/>',
  request: {
    query: z.object({
      access_token: z
        .string()
        .openapi({
          param: {
            description: "Your app's access token.",
            in: 'query',
            name: 'access_token',
            required: true,
            schema: { type: 'string' },
          },
        }),
      language: z
        .literal('hi')
        .exactOptional()
        .openapi({
          param: {
            description: 'Language to query. Leave blank for english.',
            in: 'query',
            name: 'language',
            schema: { enum: ['hi'], type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      chapter_number: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([z.literal(1), z.literal(2), z.literal(3)]),
        )
        .default(1)
        .openapi({
          param: {
            description: 'Which Chapter Number to filter?',
            in: 'path',
            name: 'chapter_number',
            required: true,
            schema: { default: 1, enum: [1, 2, 3], type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success: Everything worked as expected.',
      content: {
        'application/json': {
          schema: VerseSchemaSchema,
          examples: {
            response: {
              value:
                '{\n  "verses": [\n    {\n      "chapter_number": 1,\n      "meaning": "Dhritarashtra said: O Sanjay, after gathering on the holy field of Kurukshetra, and desiring to fight, what did my sons and the sons of Pandu do?",\n      "text": "धृतराष्ट्र उवाच | धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः | मामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय |||1||",\n      "transliteration": "dhṛitarāśhtra uvācha dharma-kṣhetre kuru-kṣhetre samavetā yuyutsavaḥ māmakāḥ pāṇḍavāśhchaiva kimakurvata sañjaya",\n      "verse_number": 1,\n      "word_meanings": "dhṛitarāśhtraḥ uvācha—Dhritarashtra said; dharma-kṣhetre—the land of dharma; kuru-kṣhetre—at Kurukshetra; samavetāḥ—having gathered; yuyutsavaḥ—desiring to fight; māmakāḥ—my sons; pāṇḍavāḥ—the sons of Pandu; cha—and; eva—certainly; kim—what; akurvata—did they do; sañjaya—Sanjay"\n    },\n    {\n      "chapter_number": 1,\n      "meaning": "Sanjay said: On observing the Pandava army standing in military formation, King Duryodhan approached his teacher Dronacharya, and said the following words.",\n      "text": "सञ्जय उवाच | दृष्ट्वा तु पाण्डवानीकं व्यूढं दुर्योधनस्तदा | आचार्यमुपसङ्गम्य राजा वचनमब्रवीत् | ||2||",\n      "transliteration": "sañjaya uvācha dṛiṣhṭvā tu pāṇḍavānīkaṁ vyūḍhaṁ duryodhanastadā āchāryamupasaṅgamya rājā vachanamabravīt",\n      "verse_number": 2,\n      "word_meanings": "sanjayaḥ uvācha—Sanjay said; dṛiṣhṭvā—on observing; tu—but; pāṇḍava-anīkam—the Pandava army; vyūḍham—standing in a military formation; duryodhanaḥ—King Duryodhan; tadā—then; āchāryam—teacher; upasaṅgamya—approached; rājā—the king; vachanam—words; abravīt—spoke"\n    }\n  ]\n}',
            },
          },
        },
      },
    },
    400: { description: 'Bad Request: The request was unacceptable due to wrong parameter(s).' },
    401: { description: 'Unauthorized: Invalid access_token used.' },
    402: { description: 'Request Failed.' },
    404: { description: 'Not Found: The chapter number you are looking for could not be found.' },
    500: { description: 'Server Error: Something went wrong on our end.' },
  },
})

export const getApiV1ChaptersChapterNumberVersesVerseNumberRoute = createRoute({
  method: 'get',
  path: '/api/v1/chapters/{chapter_number}/verses/{verse_number}',
  tags: ['verse'],
  summary: 'Get a particular verse from a chapter.',
  description: 'Get a specific verse from a specific chapter.<br/>',
  request: {
    query: z.object({
      access_token: z
        .string()
        .openapi({
          param: {
            description: "Your app's access token.",
            in: 'query',
            name: 'access_token',
            required: true,
            schema: { type: 'string' },
          },
        }),
      language: z
        .literal('hi')
        .exactOptional()
        .openapi({
          param: {
            description: 'Language to query. Leave blank for english.',
            in: 'query',
            name: 'language',
            schema: { enum: ['hi'], type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      chapter_number: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([z.literal(1), z.literal(2), z.literal(3)]),
        )
        .default(1)
        .openapi({
          param: {
            description: 'Which Chapter Number to filter?',
            in: 'path',
            name: 'chapter_number',
            required: true,
            schema: { default: 1, enum: [1, 2, 3], type: 'integer' },
          },
        }),
      verse_number: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([z.literal(1), z.literal(2), z.literal(3)]),
        )
        .default(1)
        .openapi({
          param: {
            description: 'Which Verse Number to filter?',
            in: 'path',
            name: 'verse_number',
            required: true,
            schema: { default: 1, enum: [1, 2, 3], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success: Everything worked as expected.',
      content: {
        'application/json': {
          schema: VerseSchemaSchema,
          examples: {
            response: {
              value:
                '{\n  "chapter_number": 1,\n  "meaning": "Dhritarashtra said: O Sanjay, after gathering on the holy field of Kurukshetra, and desiring to fight, what did my sons and the sons of Pandu do?",\n  "text": "धृतराष्ट्र उवाच | धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः | मामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय |||1||",\n  "transliteration": "dhṛitarāśhtra uvācha dharma-kṣhetre kuru-kṣhetre samavetā yuyutsavaḥ māmakāḥ pāṇḍavāśhchaiva kimakurvata sañjaya",\n  "verse_number": 1,\n  "word_meanings": "dhṛitarāśhtraḥ uvācha—Dhritarashtra said; dharma-kṣhetre—the land of dharma; kuru-kṣhetre—at Kurukshetra; samavetāḥ—having gathered; yuyutsavaḥ—desiring to fight; māmakāḥ—my sons; pāṇḍavāḥ—the sons of Pandu; cha—and; eva—certainly; kim—what; akurvata—did they do; sañjaya—Sanjay"\n}',
            },
          },
        },
      },
    },
    400: { description: 'Bad Request: The request was unacceptable due to wrong parameter(s).' },
    401: { description: 'Unauthorized: Invalid access_token used.' },
    402: { description: 'Request Failed.' },
    404: {
      description: 'Not Found: The chapter/verse number you are looking for could not be found.',
    },
    500: { description: 'Server Error: Something went wrong on our end.' },
  },
})

export const getApiV1VersesRoute = createRoute({
  method: 'get',
  path: '/api/v1/verses',
  tags: ['verse'],
  summary: 'Get all the Verses.',
  description: 'Get a list of all Verses.<br/>',
  request: {
    query: z.object({
      access_token: z
        .string()
        .openapi({
          param: {
            description: "Your app's access token.",
            in: 'query',
            name: 'access_token',
            required: true,
            schema: { type: 'string' },
          },
        }),
      language: z
        .literal('hi')
        .exactOptional()
        .openapi({
          param: {
            description: 'Language to query. Leave blank for english.',
            in: 'query',
            name: 'language',
            schema: { enum: ['hi'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success: Everything worked as expected.',
      content: {
        'application/json': {
          schema: VerseSchemaSchema,
          examples: {
            response: {
              value:
                '{\n  "verses": [\n    {\n      "chapter_number": 1,\n      "meaning": "Dhritarashtra said: O Sanjay, after gathering on the holy field of Kurukshetra, and desiring to fight, what did my sons and the sons of Pandu do?",\n      "text": "धृतराष्ट्र उवाच | धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः | मामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय |||1||",\n      "transliteration": "dhṛitarāśhtra uvācha dharma-kṣhetre kuru-kṣhetre samavetā yuyutsavaḥ māmakāḥ pāṇḍavāśhchaiva kimakurvata sañjaya",\n      "verse_number": 1,\n      "word_meanings": "dhṛitarāśhtraḥ uvācha—Dhritarashtra said; dharma-kṣhetre—the land of dharma; kuru-kṣhetre—at Kurukshetra; samavetāḥ—having gathered; yuyutsavaḥ—desiring to fight; māmakāḥ—my sons; pāṇḍavāḥ—the sons of Pandu; cha—and; eva—certainly; kim—what; akurvata—did they do; sañjaya—Sanjay"\n    },\n    {\n      "chapter_number": 1,\n      "meaning": "Sanjay said: On observing the Pandava army standing in military formation, King Duryodhan approached his teacher Dronacharya, and said the following words.",\n      "text": "सञ्जय उवाच | दृष्ट्वा तु पाण्डवानीकं व्यूढं दुर्योधनस्तदा | आचार्यमुपसङ्गम्य राजा वचनमब्रवीत् | ||2||",\n      "transliteration": "sañjaya uvācha dṛiṣhṭvā tu pāṇḍavānīkaṁ vyūḍhaṁ duryodhanastadā āchāryamupasaṅgamya rājā vachanamabravīt",\n      "verse_number": 2,\n      "word_meanings": "sanjayaḥ uvācha—Sanjay said; dṛiṣhṭvā—on observing; tu—but; pāṇḍava-anīkam—the Pandava army; vyūḍham—standing in a military formation; duryodhanaḥ—King Duryodhan; tadā—then; āchāryam—teacher; upasaṅgamya—approached; rājā—the king; vachanam—words; abravīt—spoke"\n    }\n  ]\n}',
            },
          },
        },
      },
    },
    400: { description: 'Bad Request: The request was unacceptable due to wrong parameter(s).' },
    401: { description: 'Unauthorized: Inavlid access_token used.' },
    402: { description: 'Request Failed.' },
    500: { description: 'Server Error: Something went wrong on our end.' },
  },
})

export const postAuthOauthTokenRoute = createRoute({
  method: 'post',
  path: '/auth/oauth/token',
  tags: ['auth'],
  summary: 'Send client credentials and get an access token.',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              client_id: z
                .string()
                .openapi({ description: "Your app's client_id. Get from API dashboard." }),
              client_secret: z
                .string()
                .openapi({ description: "Your app's client_secret. Get from API dashboard." }),
              grant_type: z
                .string()
                .default('client_credentials')
                .openapi({ description: 'Grant Type.' }),
              scope: z
                .string()
                .default('verse chapter')
                .openapi({ description: 'The resources that you would like to access.' }),
            })
            .openapi({ required: ['client_id', 'client_secret', 'grant_type', 'scope'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success: Everything worked as expected.', content: {} },
    400: { description: 'Bad Request: The request was unacceptable due to wrong parameter(s).' },
    401: { description: 'Unauthorized: Invalid access_token used.' },
    402: { description: 'Request Failed.' },
    500: { description: 'Server Error: Something went wrong on our end.' },
  },
})
