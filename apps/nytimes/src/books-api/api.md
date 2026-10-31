<h1 id="books-api">Books API v3.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Books API provides information about book reviews and The New York Times bestsellers lists.

Base URLs:

* <a href="https://api.nytimes.com/svc/books/v3">https://api.nytimes.com/svc/books/v3</a>

<a href="http://developer.nytimes.com/tou">Terms of service</a>

<a href="http://developer.nytimes.com/">External documentation</a>

# Authentication

* API Key (api-key)
    - Parameter Name: **api-key**, in: query.

<h1 id="books-api-default">Default</h1>

## Best Seller List

<a id="opIdGET_lists-format"></a>

> Code samples

```bash
curl "https://api.nytimes.com/svc/lists.json?api-key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /lists.{format}`

<h3 id="best-seller-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|list|query|string|false|The name of the Times best-seller list. To get valid values, use a list names request.<br><br>Be sure to replace spaces with hyphens (e.g., e-book-fiction or hardcover-fiction, not E-Book Fiction or Hardcover Fiction). (The parameter is not case sensitive.)|
|weeks-on-list|query|integer|false|The number of weeks that the best seller has been on list-name, as of bestsellers-date|
|bestsellers-date|query|string(date-time)|false|YYYY-MM-DD<br><br>The week-ending date for the sales reflected on list-name. Times best-seller lists are compiled using available book sale data. The bestsellers-date may be significantly earlier than published-date. For additional information, see the explanation at the bottom of any best-seller list page on NYTimes.com (example: Hardcover Fiction, published Dec. 5 but reflecting sales to Nov. 29).|
|date|query|string|false|YYYY-MM-DD  The date the best-seller list was published on NYTimes.com (compare bestsellers-date)|
|isbn|query|string|false|International Standard Book Number, 10 or 13 digits|
|published-date|query|string|false|YYYY-MM-DD<br><br>The date the best-seller list was published on NYTimes.com (compare bestsellers-date)|
|rank|query|integer|false|The rank of the best seller on list-name as of bestsellers-date|
|rank-last-week|query|integer|false|The rank of the best seller on list-name one week prior to bestsellers-date|
|offset|query|integer|false|Sets the starting point of the result set|
|sort-order|query|string|false|Sets the sort order of the result set|
|format|path|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort-order|ASC|
|sort-order|DESC|
|format|json|
|format|jsonp|

> Example responses

> 200 Response

```json
{
  "copyright": "Copyright (c) 2016 The New York Times Company.  All Rights Reserved.",
  "last_modified": "2016-03-11T13:09:01-05:00",
  "num_results": 1,
  "results": [
    {
      "amazon_product_url": "http://www.amazon.com/Girls-Guide-Moving-On-Novel-ebook/dp/B00ZNE17B4?tag=thenewyorktim-20",
      "asterisk": 0,
      "bestsellers_date": "2016-03-05",
      "book_details": [
        {
          "age_group": "",
          "author": "Debbie Macomber",
          "contributor": "by Debbie Macomber",
          "contributor_note": "",
          "description": "A mother and her daughter-in-law both leave unhappy marriages and take up with new men.",
          "price": 0,
          "primary_isbn10": "0553391925",
          "primary_isbn13": "9780553391923",
          "publisher": "Ballantine",
          "title": "A GIRL'S GUIDE TO MOVING ON"
        }
      ],
      "dagger": 0,
      "display_name": "Hardcover Fiction",
      "isbns": [
        {
          "isbn10": "0553391925",
          "isbn13": "9780553391923"
        }
      ],
      "list_name": "Hardcover Fiction",
      "published_date": "2016-03-20",
      "rank": 5,
      "rank_last_week": 2,
      "reviews": [
        {
          "article_chapter_link": "",
          "book_review_link": "",
          "first_chapter_link": "",
          "sunday_review_link": ""
        }
      ],
      "weeks_on_list": 2
    }
  ],
  "status": "OK"
}
```

<h3 id="best-seller-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="best-seller-list-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|copyright|string|false|none|none|
|last_modified|string|false|none|none|
|num_results|integer|false|none|none|
|results|[object]|false|none|none|
|» amazon_product_url|string|false|none|none|
|» asterisk|integer|false|none|none|
|» bestsellers_date|string|false|none|none|
|» book_details|[object]|false|none|none|
|» » age_group|string|false|none|none|
|» » author|string|false|none|none|
|» » contributor|string|false|none|none|
|» » contributor_note|string|false|none|none|
|» » description|string|false|none|none|
|» » price|integer|false|none|none|
|» » primary_isbn10|string|false|none|none|
|» » primary_isbn13|string|false|none|none|
|» » publisher|string|false|none|none|
|» » title|string|false|none|none|
|» dagger|integer|false|none|none|
|» display_name|string|false|none|none|
|» isbns|[object]|false|none|none|
|» » isbn10|string|false|none|none|
|» » isbn13|string|false|none|none|
|» list_name|string|false|none|none|
|» published_date|string|false|none|none|
|» rank|integer|false|none|none|
|» rank_last_week|integer|false|none|none|
|» reviews|[object]|false|none|none|
|» » article_chapter_link|string|false|none|none|
|» » book_review_link|string|false|none|none|
|» » first_chapter_link|string|false|none|none|
|» » sunday_review_link|string|false|none|none|
|» weeks_on_list|integer|false|none|none|
|status|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key
</aside>

## Best Seller History List

<a id="opIdGET_lists-best-sellers-history-json"></a>

> Code samples

```bash
curl "https://api.nytimes.com/svc/lists/best-sellers/history.json?api-key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /lists/best-sellers/history.json`

<h3 id="best-seller-history-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|age-group|query|string|false|The target age group for the best seller.|
|author|query|string|false|The author of the best seller. The author field does not include additional contributors (see Data Structure for more details about the author and contributor fields).<br><br>When searching the author field, you can specify any combination of first, middle and last names.<br><br>When sort-by is set to author, the results will be sorted by author's first name. |
|contributor|query|string|false|The author of the best seller, as well as other contributors such as the illustrator (to search or sort by author name only, use author instead).<br><br>When searching, you can specify any combination of first, middle and last names of any of the contributors.<br><br>When sort-by is set to contributor, the results will be sorted by the first name of the first contributor listed. |
|isbn|query|string|false|International Standard Book Number, 10 or 13 digits<br><br>A best seller may have both 10-digit and 13-digit ISBNs, and may have multiple ISBNs of each type. To search on multiple ISBNs, separate the ISBNs with semicolons (example: 9780446579933;0061374229).|
|price|query|string|false|The publisher's list price of the best seller, including decimal point|
|publisher|query|string|false|The standardized name of the publisher|
|title|query|string|false|The title of the best seller<br><br>When searching, you can specify a portion of a title or a full title.|

> Example responses

> 200 Response

```json
{
  "copyright": "Copyright (c) 2016 The New York Times Company.  All Rights Reserved.",
  "num_results": 28970,
  "results": [
    {
      "age_group": "",
      "author": "Sophia Amoruso",
      "contributor": "by Sophia Amoruso",
      "contributor_note": "",
      "description": "An online fashion retailer traces her path to success.",
      "isbns": [
        {
          "isbn10": "039916927X",
          "isbn13": "9780399169274"
        }
      ],
      "price": 0,
      "publisher": "Portfolio/Penguin/Putnam",
      "ranks_history": [
        {
          "asterisk": 0,
          "bestsellers_date": "2016-02-27",
          "dagger": 0,
          "display_name": "Business",
          "list_name": "Business Books",
          "primary_isbn10": "1591847931",
          "primary_isbn13": "9781591847939",
          "published_date": "2016-03-13",
          "rank": 8,
          "ranks_last_week": null,
          "weeks_on_list": 0
        }
      ],
      "reviews": [
        {
          "article_chapter_link": "",
          "book_review_link": "",
          "first_chapter_link": "",
          "sunday_review_link": ""
        }
      ],
      "title": "#GIRLBOSS"
    }
  ],
  "status": "OK"
}
```

<h3 id="best-seller-history-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="best-seller-history-list-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|copyright|string|false|none|none|
|num_results|integer|false|none|none|
|results|[object]|false|none|none|
|» age_group|string|false|none|none|
|» author|string|false|none|none|
|» contributor|string|false|none|none|
|» contributor_note|string|false|none|none|
|» description|string|false|none|none|
|» isbns|[object]|false|none|none|
|» » isbn10|string|false|none|none|
|» » isbn13|string|false|none|none|
|» price|integer|false|none|none|
|» publisher|string|false|none|none|
|» ranks_history|[object]|false|none|none|
|» » asterisk|integer|false|none|none|
|» » bestsellers_date|string|false|none|none|
|» » dagger|integer|false|none|none|
|» » display_name|string|false|none|none|
|» » list_name|string|false|none|none|
|» » primary_isbn10|string|false|none|none|
|» » primary_isbn13|string|false|none|none|
|» » published_date|string|false|none|none|
|» » rank|integer|false|none|none|
|» » ranks_last_week|object \| null|false|none|none|
|» » weeks_on_list|integer|false|none|none|
|» reviews|[object]|false|none|none|
|» » article_chapter_link|string|false|none|none|
|» » book_review_link|string|false|none|none|
|» » first_chapter_link|string|false|none|none|
|» » sunday_review_link|string|false|none|none|
|» title|string|false|none|none|
|status|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key
</aside>

## Best Seller List Names

<a id="opIdGET_lists-names-format"></a>

> Code samples

```bash
curl "https://api.nytimes.com/svc/lists/names.json?api-key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /lists/names.{format}`

<h3 id="best-seller-list-names-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api-key|query|string|false|none|
|format|path|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|jsonp|

> Example responses

> 200 Response

```json
{
  "copyright": "Copyright (c) 2016 The New York Times Company.  All Rights Reserved.",
  "num_results": 53,
  "results": [
    {
      "display_name": "Combined Print & E-Book Fiction",
      "list_name": "Combined Print and E-Book Fiction",
      "list_name_encoded": "combined-print-and-e-book-fiction",
      "newest_published_date": "2016-03-20",
      "oldest_published_date": "2011-02-13",
      "updated": "WEEKLY"
    }
  ],
  "status": "OK"
}
```

<h3 id="best-seller-list-names-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="best-seller-list-names-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|copyright|string|false|none|none|
|num_results|integer|false|none|none|
|results|[object]|false|none|none|
|» display_name|string|false|none|none|
|» list_name|string|false|none|none|
|» list_name_encoded|string|false|none|none|
|» newest_published_date|string|false|none|none|
|» oldest_published_date|string|false|none|none|
|» updated|string|false|none|none|
|status|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key
</aside>

## Best Seller List Overview

<a id="opIdGET_lists-overview-format"></a>

> Code samples

```bash
curl "https://api.nytimes.com/svc/lists/overview.json?api-key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /lists/overview.{format}`

<h3 id="best-seller-list-overview-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|published_date|query|string|false|The best-seller list publication date. YYYY-MM-DD<br><br>You do not have to specify the exact date the list was published. The service will search forward (into the future) for the closest publication date to the date you specify. For example, a request for lists/overview/2013-05-22 will retrieve the list that was published on 05-26.<br><br>If you do not include a published_date, the current week's best-sellers lists will be returned.|
|api-key|query|string|false|none|
|format|path|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|jsonp|

> Example responses

> 200 Response

```json
{
  "copyright": "Copyright (c) 2016 The New York Times Company.  All Rights Reserved.",
  "num_results": 210,
  "results": {
    "bestsellers_date": "2016-03-05",
    "lists": [
      {
        "books": [
          {
            "age_group": "",
            "author": "Clive Cussler and Justin Scott",
            "contributor": "by Clive Cussler and Justin Scott",
            "contributor_note": "",
            "created_date": "2016-03-10 12:00:22",
            "description": "In the ninth book in this series, set in 1906, the New York detective Isaac Bell contends with a crime boss passing as a respectable businessman and a tycoon’s plot against President Theodore Roosevelt.",
            "price": 0,
            "primary_isbn10": "0698406427",
            "primary_isbn13": "9780698406421",
            "publisher": "Putnam",
            "rank": 1,
            "title": "THE GANGSTER",
            "updated_date": "2016-03-10 17:00:21"
          }
        ],
        "display_name": "Combined Print & E-Book Fiction",
        "list_id": 704,
        "list_image": "http://du.ec2.nytimes.com.s3.amazonaws.com/prd/books/9780399175954.jpg",
        "list_name": "Combined Print and E-Book Fiction",
        "updated": "WEEKLY"
      }
    ],
    "published_date": "2016-03-20"
  },
  "status": "OK"
}
```

<h3 id="best-seller-list-overview-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="best-seller-list-overview-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|copyright|string|false|none|none|
|num_results|integer|false|none|none|
|results|object|false|none|none|
|» bestsellers_date|string|false|none|none|
|» lists|[object]|false|none|none|
|» » books|[object]|false|none|none|
|» » » age_group|string|false|none|none|
|» » » author|string|false|none|none|
|» » » contributor|string|false|none|none|
|» » » contributor_note|string|false|none|none|
|» » » created_date|string|false|none|none|
|» » » description|string|false|none|none|
|» » » price|integer|false|none|none|
|» » » primary_isbn10|string|false|none|none|
|» » » primary_isbn13|string|false|none|none|
|» » » publisher|string|false|none|none|
|» » » rank|integer|false|none|none|
|» » » title|string|false|none|none|
|» » » updated_date|string|false|none|none|
|» » display_name|string|false|none|none|
|» » list_id|integer|false|none|none|
|» » list_image|string|false|none|none|
|» » list_name|string|false|none|none|
|» » updated|string|false|none|none|
|» published_date|string|false|none|none|
|status|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key
</aside>

## Best Seller List by Date

<a id="opIdGET_lists-date-list-json"></a>

> Code samples

```bash
curl "https://api.nytimes.com/svc/lists/string/string.json?api-key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /lists/{date}/{list}.json`

<h3 id="best-seller-list-by-date-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|isbn|query|integer|false|International Standard Book Number, 10 or 13 digits|
|list-name|query|string|false|The name of the Times best-seller list. To get valid values, use a list names request.<br><br>Be sure to replace spaces with hyphens (e.g., e-book-fiction or hardcover-fiction, not E-Book Fiction or Hardcover Fiction). (The parameter is not case sensitive.)|
|published-date|query|string(date-time)|false|YYYY-MM-DD<br><br>The date the best-seller list was published on NYTimes.com (compare bestsellers-date)|
|bestsellers-date|query|string|false|YYYY-MM-DD<br><br>The week-ending date for the sales reflected on list-name. Times best-seller lists are compiled using available book sale data. The bestsellers-date may be significantly earlier than published-date. For additional information, see the explanation at the bottom of any best-seller list page on NYTimes.com (example: Hardcover Fiction, published Dec. 5 but reflecting sales to Nov. 29).|
|weeks-on-list|query|integer|false|The number of weeks that the best seller has been on list-name, as of bestsellers-date|
|rank|query|string|false|The rank of the best seller on list-name as of bestsellers-date|
|rank-last-week|query|integer|false|The rank of the best seller on list-name one week prior to bestsellers-date|
|offset|query|integer|false|Sets the starting point of the result set|
|sort-order|query|string|false|The default is ASC (ascending). The sort-order parameter is used with the sort-by parameter — for details, see each request type.|
|date|path|string|true|none|
|list|path|string|true|Name of the Best Sellers List. You can get the full list from /lists/names.json|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort-order|ASC|
|sort-order|DESC|

> Example responses

> 200 Response

```json
{
  "copyright": "Copyright (c) 2016 The New York Times Company.  All Rights Reserved.",
  "last_modified": "2015-12-25T13:05:20-05:00",
  "num_results": 15,
  "results": {
    "bestsellers_date": "2015-12-19",
    "books": [
      {
        "age_group": "",
        "amazon_product_url": "http://www.amazon.com/The-Martian-Novel-Andy-Weir-ebook/dp/B00EMXBDMA?tag=thenewyorktim-20",
        "article_chapter_link": "",
        "asterisk": 0,
        "author": "Andy Weir",
        "book_image": "http://du.ec2.nytimes.com.s3.amazonaws.com/prd/books/9780804139038.jpg",
        "book_review_link": "",
        "contributor": "by Andy Weir",
        "contributor_note": "",
        "dagger": 0,
        "description": "Separated from his crew, an astronaut embarks on a quest to stay alive on Mars. The basis of the movie.",
        "first_chapter_link": "",
        "isbns": [
          {
            "isbn10": "0804139024",
            "isbn13": "9780804139021"
          }
        ],
        "price": 0,
        "primary_isbn10": "0553418025",
        "primary_isbn13": "9780553418026",
        "publisher": "Broadway",
        "rank": 1,
        "rank_last_week": 0,
        "sunday_review_link": "",
        "title": "THE MARTIAN",
        "weeks_on_list": 60
      }
    ],
    "corrections": [],
    "display_name": "Paperback Trade Fiction",
    "list_name": "Trade Fiction Paperback",
    "normal_list_ends_at": 10,
    "published_date": "2016-01-03",
    "updated": "WEEKLY"
  },
  "status": "OK"
}
```

<h3 id="best-seller-list-by-date-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="best-seller-list-by-date-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|copyright|string|false|none|none|
|last_modified|string|false|none|none|
|num_results|integer|false|none|none|
|results|object|false|none|none|
|» bestsellers_date|string|false|none|none|
|» books|[object]|false|none|none|
|» » age_group|string|false|none|none|
|» » amazon_product_url|string|false|none|none|
|» » article_chapter_link|string|false|none|none|
|» » asterisk|integer|false|none|none|
|» » author|string|false|none|none|
|» » book_image|string|false|none|none|
|» » book_review_link|string|false|none|none|
|» » contributor|string|false|none|none|
|» » contributor_note|string|false|none|none|
|» » dagger|integer|false|none|none|
|» » description|string|false|none|none|
|» » first_chapter_link|string|false|none|none|
|» » isbns|[object]|false|none|none|
|» » » isbn10|string|false|none|none|
|» » » isbn13|string|false|none|none|
|» » price|integer|false|none|none|
|» » primary_isbn10|string|false|none|none|
|» » primary_isbn13|string|false|none|none|
|» » publisher|string|false|none|none|
|» » rank|integer|false|none|none|
|» » rank_last_week|integer|false|none|none|
|» » sunday_review_link|string|false|none|none|
|» » title|string|false|none|none|
|» » weeks_on_list|integer|false|none|none|
|» corrections|[object]|false|none|none|
|» display_name|string|false|none|none|
|» list_name|string|false|none|none|
|» normal_list_ends_at|integer|false|none|none|
|» published_date|string|false|none|none|
|» updated|string|false|none|none|
|status|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key
</aside>

## Reviews

<a id="opIdGET_reviews-format"></a>

> Code samples

```bash
curl "https://api.nytimes.com/svc/reviews.json?api-key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /reviews.{format}`

<h3 id="reviews-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|isbn|query|integer|false|Searching by ISBN is the recommended method. You can enter 10- or 13-digit ISBNs.|
|title|query|string|false|You’ll need to enter the full title of the book. Spaces in the title will be converted into the characters %20.|
|author|query|string|false|You’ll need to enter the author’s first and last name, separated by a space. This space will be converted into the characters %20.|
|api-key|query|string|false|none|
|format|path|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|jsonp|

> Example responses

> 200 Response

```json
{
  "copyright": "Copyright (c) 2016 The New York Times Company.  All Rights Reserved.",
  "num_results": 2,
  "results": [
    {
      "book_author": "Haruki Murakami",
      "book_title": "1Q84",
      "byline": "JANET MASLIN",
      "isbn13": [
        "9780307476463"
      ],
      "publication_dt": "2011-11-10",
      "summary": "In “1Q84,” the Japanese novelist Haruki Murakami writes about characters in a Tokyo with two moons.",
      "url": "http://www.nytimes.com/2011/11/10/books/1q84-by-haruki-murakami-review.html"
    }
  ],
  "status": "OK"
}
```

<h3 id="reviews-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="reviews-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|copyright|string|false|none|none|
|num_results|integer|false|none|none|
|results|[object]|false|none|none|
|» book_author|string|false|none|none|
|» book_title|string|false|none|none|
|» byline|string|false|none|none|
|» isbn13|[string]|false|none|none|
|» publication_dt|string|false|none|none|
|» summary|string|false|none|none|
|» url|string|false|none|none|
|status|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key
</aside>
