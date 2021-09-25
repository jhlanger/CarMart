const router = require('express').Router();
const { User, Cars } = require('../../models');
const auth = require('../../util/auth');

router.get('/', auth, (req, res) => {
    console.log('======================');
    Cars.findAll({
        include: [
            {
                model: User,
                attributes: ['id', 'username', 'email']
            }

        ],

        order: [['id', 'DESC']]
    }).then(dbCarData => {

        res.json(dbCarData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    console.log('======================');

    Cars.findOne({

        where: {

            id: req.params.id
        },
        include: [
            {
                model: User,
                attributes: ['id', 'username', 'email']
            }

        ]
    }).then(dbCarData => {

        res.json(dbCarData);

    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', auth, (req, res) => {
    console.log('======================');

    Cars.create({

        make: req.body.make,
        model: req.body.model,
        year: req.body.year,
        miles: req.body.miles,
        price: req.body.price,
        user_id: req.session.user_id,
        color: req.body.color,
        tags: req.body.tags,
        description: req.body.description

    }).then(dbCarData => {

        res.json(dbCarData);

    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.put('/:id', auth, (req, res) => {
    console.log('======================');

    Cars.update({

        make: req.body.make,
        model: req.body.model,
        year: req.body.year,
        miles: req.body.miles,
        price: req.body.price,
        user_id: req.session.user_id,
        color: req.body.color,
        tags: req.body.tags,
        description: req.body.description
    },
        {
            where: {
                id: req.params.id
            }
        }).then(dbCarData => {
            if (!dbCarData) {
                res.status(404).json({ message: 'No car found with this id' });
                return;
            }
            res.json(dbCarData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


router.put('/sold/:id', (req, res) => {
    console.log('======================');
    
    Cars.update({
        sold: req.body.sold
       
    },
        {
            where: {
                id: req.params.id
            }
        }).then(dbCarData => {
            if (!dbCarData) {
                res.status(404).json({ message: 'No car found with this id' });
                return;
            }
            res.json(dbCarData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


router.delete('/:id', (req, res) => {
    console.log('======================');

    Cars.destroy({

        where: {

            id: req.params.id
        }
      
    }).then(dbCarData => {
        if (!dbCarData) {
            res.status(404).json({ message: 'No car found with this id' });
            return;
        }
        res.json(dbCarData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;