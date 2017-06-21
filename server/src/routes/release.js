import Release from '../models/release';

const releasesRoutes = (router) => {
  router.route('/releases')
    .post((req, res) => {
      // const sub = new Submission();
      // sub.category = req.body.category;
      // sub.authorName = req.body.authorName;
      // sub.content = req.body.content;
      // sub.rawContentWithoutTitle = req.body.rawContentWithoutTitle;
      // sub.contentTitle = req.body.contentTitle;

      // sub.save((err, submission) => {
      //   if (err) {
      //     if (err.name === "ValidationError") {
      //       res.status(400)
      //     } else {
      //       res.status(500);
      //     }
      //     res.send(err);
      //   } else {
      //     res.json(submission);
      //   }
      // })
    })
    .put((req, res) => {
      // const subId = JSON.parse(req.body.subId);
      // Submission.findOneAndUpdate({ id: subId }, {
      //   category: req.body.category,
      //   authorName: req.body.authorName,
      //   content: req.body.content,
      //   rawContentWithoutTitle: req.body.rawContentWithoutTitle,
      //   contentTitle: req.body.contentTitle
      // }, { new: true }, (err, submission) => {
      //   if (err) {
      //     if (err.name === "ValidationError") {
      //       res.status(400)
      //     } else {
      //       res.status(500);
      //     }
      //     res.send(err);
      //   } else {
      //     res.json(submission);
      //   }
      // });
    })
    .get((req, res) => {
      Release.find((err, releases) => {
        if (err) {
          res.send(err);
        } else {
          res.json(releases);
        }
      })
    });

  router.route('/releases/:relId')
    .get((req, res) => {
      Release.where({ id: req.params.relId }).findOne((err, rel) => {
        if (err) {
          res.send(err);
        } else {
          res.json(rel);
        }
      });
    });
}

export default releasesRoutes;