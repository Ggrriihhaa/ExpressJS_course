let servers = [
    {id: '1', nane: 'MyFamily', status: 'working'},
    {id: '2', nane: 'Olga', status: 'working'},
    {id: '3', nane: 'Deins', status: 'working'},
    {id: '4', nane: 'Emma', status: 'playing'},
    
]

export const getAll =  (req, res) => {
res.status(200).json(servers)
}  