const Milestone2 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v6.4.1.json",

  "autosize": {
    "type": "fit",
    "contains": "padding",
    "resize" : true
  },
  "width": "container",

  "height": 500,
  "config": {
    "view": {
      "continuousHeight": 300
    }
  },
  "data": {
    "name": "data-6c9b165c67de39c02af9d1886831c0ed"
  },
  "datasets": {
    "data-6c9b165c67de39c02af9d1886831c0ed": [
      {
        "Caffeine (mg)": 2,
        "Drink": "Herbal Tea"
      },
      {
        "Caffeine (mg)": 2,
        "Drink": "Rooibos"
      },
      {
        "Caffeine (mg)": 15,
        "Drink": "White Tea"
      },
      {
        "Caffeine (mg)": 30,
        "Drink": "Green Tea"
      },
      {
        "Caffeine (mg)": 37,
        "Drink": "Oolong Tea"
      },
      {
        "Caffeine (mg)": 47,
        "Drink": "Black Tea"
      },
      {
        "Caffeine (mg)": 60,
        "Drink": "Pu'erh Tea"
      },
      {
        "Caffeine (mg)": 70,
        "Drink": "Matcha"
      },
      {
        "Caffeine (mg)": 85,
        "Drink": "Maté"
      },
      {
        "Caffeine (mg)": 95,
        "Drink": "Coffee - Arabica"
      },
      {
        "Caffeine (mg)": 140,
        "Drink": "Coffee - Robusta"
      },
      {
        "Caffeine (mg)": 80,
        "Drink": "Red Bull"
      },
      {
        "Caffeine (mg)": 80,
        "Drink": "Monster"
      },
      {
        "Caffeine (mg)": 133,
        "Drink": "Alani"
      },
      {
        "Caffeine (mg)": 150,
        "Drink": "Bang"
      }
    ]
  },
  "encoding": {
    "color": {
      "field": "Caffeine (mg)",
      "legend": {
        "title": "Caffeine (mg)"
      },
      "scale": {
        "reverse": true,
        "scheme": "redyellowgreen"
      },
      "type": "quantitative"
    },
    "tooltip": [
      {
        "field": "Drink",
        "type": "nominal"
      },
      {
        "field": "Caffeine (mg)",
        "type": "quantitative"
      }
    ],
    "x": {
      "field": "Drink",
      "sort": "y",
      "title": "Beverage (8oz)",
      "type": "nominal"
    },
    "y": {
      "field": "Caffeine (mg)",
      "title": "Caffeine (mg per serving)",
      "type": "quantitative"
    }
  },
  "mark": {
    "type": "bar"
  },
  "params": [
    {
      "bind": "scales",
      "name": "param_1e9efca18e7a2868",
      "select": {
        "encodings": [
          "x",
          "y"
        ],
        "type": "interval"
      }
    }
  ],
  "title": "Typical Caffeine Content by Beverage"
};
vegaEmbed('#MS2', Milestone2, { actions: false, resize: true });
