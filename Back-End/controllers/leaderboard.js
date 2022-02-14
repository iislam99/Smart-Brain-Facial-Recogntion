const handleLeaderboard = (db) => (req, res) => {
    db('users').select('id', 'name', 'entries').orderBy('entries', 'desc')
        .returning('list')
        .then(list => {
            res.json({'list': list});
        })
        .catch(err => res.status(400).json('ERROR: Unable to compile list.'))
}

module.exports = {
    handleLeaderboard: handleLeaderboard
}