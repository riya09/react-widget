# Building a React widget
Tutorial : https://fariabriya.codes/blog/building-cross-framework-widget-with-react/

In the project directory, you can run:

### `npm run build:widget`

This command will build the `widget.js` file and create a `brand-widget` folder.

The widget then can be used like this

```js
feedbackWidget.init({
    title: 'Rate your experience',
    theme: '#effe',
    buttonText: 'Okay',
    handleSubmit: (val) => this.someMethod(val)
  })
```
