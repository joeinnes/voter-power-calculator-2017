var voteValue = 1
var votingData = {
  'Conservatives': {
    'votes': 13632914,
    'seats': 317
  },
  'Labour': {
    'votes': 12874985,
    'seats': 262
  },
  'SNP': {
    'votes': 977569,
    'seats': 35
  },
  'Lib Dems': {
    'votes': 2371772,
    'seats': 12
  },
  'Democratic Unionist Party': {
    'votes': 292316,
    'seats': 10
  },
  'Sinn Fein': {
    'votes': 238915,
    'seats': 7
  },
  'Plaid Cymru': {
    'votes': 164466,
    'seats': 4
  },
  'Green Party': {
    'votes': 525371,
    'seats': 1
  },
  'Independent Unionist': {
    'votes': 16148,
    'seats':1
  },
  'votesForWinningParties': 31094456,
  'totalVotes': 32196918,
  'totalSeats': 650,
  'electorate': 46843896
}

var i
document.getElementById('votedFor').addEventListener('change', updateSummary, false)
var averageVotesPerSeat = Math.round(votingData.votesForWinningParties / votingData.totalSeats)

function updateSummary () {
  var votedFor = document.getElementById('votedFor').value
  var voteStats = votingData[votedFor]
  var votesPerSeat = Math.round(voteStats.votes / voteStats.seats)
  var seatsPerVoteShare = Math.round((voteStats.votes / votingData.votesForWinningParties) * 650)
  voteValue = (1 / (votesPerSeat / averageVotesPerSeat)).toFixed(2)
  var seatComparison

  if (seatsPerVoteShare == voteStats.seats) {
    seatComparison = 'Your party would have gained exactly as many seats.'
  } else {
    seatComparison = 'If the votes of everyone in your party had been as strong as an average vote, then your party would have received ' + seatsPerVoteShare + ' seats, instead of ' + voteStats.seats + '.</p>'
  }

  document.getElementById('summary').innerHTML = '<h1 class="title is-1">Your vote was worth ' + voteValue + 'x the average!</h1><p>An average candidate needed to receive ' + averageVotesPerSeat + ' votes to get a seat. Your party required ' + votesPerSeat + ' votes per seat. ' + seatComparison
}
